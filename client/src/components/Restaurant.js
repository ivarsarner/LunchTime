import React, { Component } from 'react';

class Restaurant extends Component {
  render() {
    return (
      <>
        <div>
          <h4>{this.props.restaurant.name}</h4>
        </div>
        <img
          className="restaurants-list__card__img"
          src={this.props.restaurant.image_url}
          alt={`${this.props.restaurant.name}`}
        ></img>
        <div className="restaurants-list__card__categories">
          {this.props.restaurant.categories.map((category, index) => (
            <span key={index}>{category.title} </span>
          ))}
        </div>
      </>
    );
  }
}

export default Restaurant;
