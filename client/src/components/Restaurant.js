import React, { Component } from 'react';

class Restaurant extends Component {
  render() {
    return (
      <>
        <div className="restaurants-list__card__left">
          <img
            className="restaurants-list__card__img"
            src={this.props.restaurant.image_url}
            alt={`${this.props.restaurant.name}`}
          />
          <div>Rating: {this.props.restaurant.rating}</div>
        </div>
        <div className="restaurants-list__card__right">
          <div className="restaurants-list__card__name">
            <h3>{this.props.restaurant.name}</h3>
          </div>
          <div className="restaurants-list__card__categories">
            <span className="restaurants-list__card__category">Category:</span>{' '}
            <br></br>
            {this.props.restaurant.categories.map((category, index) => (
              <span key={index}>{category.title} </span>
            ))}
          </div>
          <div>
            <a
              href={`https://www.google.com/maps/?q=${this.props.restaurant.coordinates.latitude},${this.props.restaurant.coordinates.longitude}`}
            >
              Find restaurant
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Restaurant;
