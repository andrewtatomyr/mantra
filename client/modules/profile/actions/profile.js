export default {
  toggle({Meteor, LocalState}) {
    //this.setState({showProfile: !this.state.showProfile});
    //console.log(showProfile);

    //const ___showprofile=LocalState.get("showProfile");
    //console.log(`[toggle] `, ___showprofile);
    LocalState.set("showProfile", !LocalState.get("showProfile"));


  },
};
