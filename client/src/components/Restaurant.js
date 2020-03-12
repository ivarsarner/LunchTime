import React, { Component } from 'react';

class Restaurant extends Component {
  render() {
    return (
      <div key={this.props.restaurant.id} className="restaurants-list__card">
        <h4>{this.props.restaurant.name}</h4>
      </div>
    );
  }
}

export default Restaurant;
