var Nav = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({ formDisplayed: false});
  },

  render: function () {
    var username = "Login";
    var logoutItem = <li></li>;
    var trackForm;

    if (this.props.cUser.username) {
      username = this.props.cUser.username;
      logoutItem =  (
        <li onClick={this.handleLogout} className="more">
          <a className="dots" href="#/login">Logout</a>
        </li>
      );
    }

    if (this.state.formDisplayed) {
      trackForm = (
        <TrackForm
          genres={this.props.genres}
          closeOut={this._closeOut}
        />
      );
    }

    return (
      <div>
        <div className="navbar-container">
          <ul className="navbar group">

            <li className="logo">
              <a href="#"><img src={assets.logo} /></a>
            </li>
            <li className="nav-tab">
              <a href="#">Home</a>
            </li>

            <div className="flex-container">
              <input type="search" placeholder="Search (coming soon)"/>

              <ul className="navbar-right group">
                <li onClick={this.formDisplayed}className="nav-tab">
                    <a>Upload</a>
                </li>

                <li className="nav-tab nav-profile group">
                  <a href={'#/' + username}>
                    <img src={this.props.cUser.avatar} className="avtr" />
                    {username.capitalize()}
                  </a>
                </li>
                {logoutItem}
              </ul>

            </div>

          </ul>
        </div>
        <div className="nav-spacer"></div>
        {trackForm}
      </div>
    );
  },

  formDisplayed: function () {
    var formDisplayed = this.state.formDisplayed ? false : true;
    this.setState({ formDisplayed: formDisplayed });
  },

  _closeOut: function () {
    this.formDisplayed();
  },

  handleLogout: function () {
    SessionUtil.logout();
    this.history.pushState(null, "/login");
  },
});
