var Nav = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({ uploadClick: false});
  },

  render: function () {
    var username = "login";
    if (this.props.cUser.username) {
      username = this.props.cUser.username;
    }

    var trackForm;
    if (this.state.uploadClick) {
      trackForm =
        <TrackForm
          genres={this.props.genres}
          closeOut={this._closeOut}
        />;
    } else {
      trackForm = undefined;
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
                <li onClick={this.uploadClick}className="nav-tab">
                    <a>Upload</a>
                </li>

                <li className="nav-tab nav-profile group">
                  <a href={'#/' + username}>
                    <img src={this.props.cUser.avatar} className="avtr" />
                    {username.capitalize()}
                  </a>
                </li>

                <li onClick={this.handleLogout} className="more">
                  <a className="dots" href="#/login">Logout</a>
                </li>
              </ul>

            </div>

          </ul>
        </div>
        <div className="nav-spacer"></div>
        {trackForm}
      </div>
    );
  },

  uploadClick: function () {
    var uploadClick = this.state.uploadClick ? false : true;
    this.setState({ uploadClick: uploadClick });
  },

  _closeOut: function () {
    this.uploadClick();
  },

  handleLogout: function () {
    SessionUtil.logout();
    this.history.pushState(null, "/login");
  },
});
