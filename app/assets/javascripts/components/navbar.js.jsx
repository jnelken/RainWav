var Nav = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({ uploadClick: false});
  },

  handleLogout: function () {
    ApiUtil.logout();
    this.history.pushState(null, "/login");
  },

  uploadClick: function () {
    var uploadClick = this.state.uploadClick ? false : true;
    this.setState({ uploadClick: uploadClick });
  },

  _closeOut: function () {
    this.uploadClick();
  },

  render: function () {
    var username = "login";
    if (this.props.currentUser.username) {
      username = this.props.currentUser.username;
    }

    var trackForm;
    if (this.state.uploadClick) {
      trackForm = <TrackForm
      genres={this.props.genres}
      closeOut={this._closeOut}
      />;
  } else {
    trackForm = undefined;
  }

/// change ul to div or divs to li
    return (
      <div>
        <div className="navbar-container">
          <ul className="navbar group">

            <li className="logo">
              <a href="#"></a>
            </li>
            <li className="nav-tab">
              <a href="#">Home</a>
            </li>

            <div className="flex-container">
              <input type="search" placeholder="Search"/>

              <div className="navbar-right group">
                <li onClick={this.uploadClick}className="nav-tab">
                    <a>Upload</a>
                </li>
                <li className="nav-tab nav-profile group">
                  <a href={'#/' + username}>
                    <img src={this.props.currentUser.avatar} className="avtr" />
                    {username.capitalize()}
                  </a>
                </li>
                <li className="more" onClick={this.handleLogout}>
                  <a className="dots" href="#/login" ></a>
                </li>
              </div>

            </div>

          </ul>
        </div>
        <div className="nav-spacer"></div>
        {trackForm}
      </div>
    );
  },
});
            // <a href={'#/' + username}>{username.capitalize()}</a>
// <img src={assets.logo}/>
