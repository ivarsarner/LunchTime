import React, { Component } from 'react';
import Restaurant from './Restaurant';
import axios from 'axios';

class RestaurantList extends Component {
  state = {
    restaurants: [],
  };

  getLocation() {
    const options = {
      enableHighAccuracy: true,
    };
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  async getRestaurants(latitude, longitude) {
    return await axios.get(
      `http://localhost:9000/restaurants/${latitude}/${longitude}`
    );
  }

  async componentDidMount() {
    const location = await this.getLocation();
    const { latitude, longitude } = location.coords;

    const response = await this.getRestaurants(latitude, longitude);

    this.setState({
      restaurants: response.data,
    });
  }

  render() {
    return (
      <>
        {this.state.restaurants.length > 0 ? (
          <div>
            <header>
              <h3>Restaurants close to you:</h3>
            </header>
            <section className="restaurants-list">
              {this.state.restaurants.map((restaurant) => (
                <div key={restaurant.id} className="restaurants-list__card">
                  <Restaurant restaurant={restaurant} />
                </div>
              ))}
            </section>
          </div>
        ) : (
          <p>Getting restaurants in your area...</p>
        )}
      </>
    );
  }
}

export default RestaurantList;
