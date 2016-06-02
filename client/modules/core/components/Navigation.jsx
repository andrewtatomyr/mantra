import React from 'react';
import Location from './Location.jsx';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }


  getLocations() {
    return [
      {_id: "0", locationName: "Select location"},
      {_id: "1", locationName: "Location 'A'"},
      {_id: "2", locationName: "Location 'B'"},
      {_id: "3", locationName: "Location 'C'"},
    ];
  }


  renderLocations() {

    return this.getLocations().map((userLocation) => (
      <Location key={userLocation._id} userLocation={userLocation} />
    ));
  }

  updateLocation() {
    FlowRouter.go(this.refs.locationInput.selectedIndex ? "/messages/" + this.refs.locationInput.selectedIndex : "/");
  }

  render() {
    return (
        <select ref="locationInput" onChange={this.updateLocation.bind(this)} >
          {this.renderLocations()}
        </select>
    );
  }


}


export default Navigation;
