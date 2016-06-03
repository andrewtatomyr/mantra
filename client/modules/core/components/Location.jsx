
import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class userLocation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <option value={this.props.userLocation._id} >
        {this.props.userLocation.locationName}
      </option>
    );
  }

}
