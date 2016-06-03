import React from 'react';
import ReactDOM from 'react-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  _updateProfile(event) {

    event.preventDefault();

    const {nameInput, emailInput} = this.refs;


    console.log(this.props);

    const {updateProfile, toggle} = this.props; // !
    updateProfile(nameInput.value.trim(), emailInput.value); // !

    toggle();

  }


  render() {


    console.log(`[showProfile]`,this.props.showProfile);//-


    return this.props.showProfile /*true /*Meteor.user()*/ ? (
      <form className="profile" onSubmit={this._updateProfile.bind(this)} >
        Your name:
        <input type="text" ref="nameInput" placeholder="Name" defaultValue={this.props.currentUser.name} />
        E-mail:
        <input type="email" ref="emailInput" placeholder="E-mail" defaultValue={this.props.currentUser.emails[0].address} />
        <input type="submit" value="Save changes" />
      </form>
    ) : (<span></span>);

  }


}


export default Profile;
