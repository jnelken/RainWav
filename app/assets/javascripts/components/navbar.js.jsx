var Nav = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {currentUser: { username: "login"}};
  },
  componentDidMount: function () {
    CurrentUserStore.addChangeListener(this._changeUser);
  },
  _changeUser: function () {
    this.setState({ currentUser: CurrentUserStore.currentUser() });
  },

  handleLogout: function () {
    ApiUtil.logout();
    this.history.pushState(null, "#/login");
  },

  render: function () {
    var username = "login";
    if (this.state.currentUser) {
      username = this.state.currentUser.username;
      // return (<div>Logged out. <a href="#/login">Log In</a></div>);
    }
    console.log(username);
    return (
      <div className="navbar-container group">
        <ul className="navbar group">
          <div className="navbar-left">
          <li className="logo">
            <a href="#"></a>
          </li>

          <li className="nav-tab">
            <a href="#">Home</a>
          </li>
        </div>

          <li className="searchbar">
            <a href="#">Search</a>
          </li>

          <div className="navbar-right">
          <li className="nav-tab">
            <a href={'#/' + username}>{username.capitalize()}</a>
          </li>

          <li className="nav-tab" onClick={this.handleLogout}>
            <a href="#">Logout</a>
          </li>

          <li className="nav-tab">
            <a href="#">Upload</a>
          </li>

          <li className="nav-tab more" onClick={this.handleLogout}>
            <a href="#"></a>
          </li>
        </div>
        </ul>
      </div>
    );
  }
});

// <img src={assets.logo}/>
