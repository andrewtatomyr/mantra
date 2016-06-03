import React from 'react';
import ReactDOM from 'react-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  _toggle() {
    const {toggle} = this.props;
    toggle();
  }


  render() {


    //console.log(this.props);//-


    return true /*Meteor.user()*/ ? (
      <span className="toggle-profile" onClick={this._toggle.bind(this)}>
        &#9998;
      </span>
    ) : (<span></span>);

  }


}


export default Profile;
