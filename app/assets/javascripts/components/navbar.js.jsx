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

  componentDidUnmount: function () {
    CurrentUserStore.removeChangeListener(this._changeUser);
  },

  handleLogout: function () {
    ApiUtil.logout();
    this.history.pushState(null, "#/login");
  },

  render: function () {
    var username = "login";
    console.log(username);
    if (this.state.currentUser) {
      username = this.state.currentUser.username;
    }
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
              <a href="#">Upload</a>
            </li>

            <li className="nav-tab">
              <a href="#">{username}</a>
            </li>

            <li className="more" onClick={this.handleLogout}>
              <a href="#"></a>
            </li>
          </div>

        </ul>
      </div>
    );
  }
});
            // <a href={'#/' + username}>{username.capitalize()}</a>
// <img src={assets.logo}/>
