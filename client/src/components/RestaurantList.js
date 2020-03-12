import React, { Component } from 'react';
import Restaurant from './Restaurant';
import axios from 'axios';

class RestaurantList extends Component {
  state = {
    restaurants: [],
  };

  async getRestaurants() {
    return await axios.get('http://localhost:9000/restaurants');
  }

  async componentDidMount() {
    const response = await this.getRestaurants();
    this.setState({
      restaurants: response.data,
    });
    this.log();
  }

  log() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h3>Restaurants close to you</h3>
        <section className="restaurants-list">
          {this.state.restaurants.map((restaurant) => (
            <Restaurant restaurant={restaurant} />
          ))}
        </section>
      </div>
    );
  }
}

/* {this.state.restaurants ? (
  <Restaurant restaurants={this.state.restaurants} />
) : (
  'Loading restaurants...'
)} */

export default RestaurantList;
