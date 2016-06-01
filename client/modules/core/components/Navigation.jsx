import React from 'react';
import Location from './Location.jsx';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    //console.log("[construct ]");
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

    //console.log(this.getLocations());
    return this.getLocations().map((location) => (
      <Location key={location._id} location={location} />
    ));
  }

  //onChange={this.updateLocation.bind(this)}


  updateLocation() {
    //console.log(this.refs.locationInput.selectedIndex);

    FlowRouter.go(this.refs.locationInput.selectedIndex ? "/messages/" + this.refs.locationInput.selectedIndex : "/");
  }

  render() {

    //console.log(this.props);
    return (
        <select ref="locationInput" onChange={this.updateLocation.bind(this)} >


          {this.renderLocations()}
        </select>
    );

  }


}


export default Navigation;
