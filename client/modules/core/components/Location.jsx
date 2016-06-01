
import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Location extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <option >
        {this.props.location.locationName}
      </option>
    );
  }

}
