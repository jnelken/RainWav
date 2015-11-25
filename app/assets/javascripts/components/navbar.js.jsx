var Nav = React.createClass({
  mixins: [ReactRouter.History],

  handleLogout: function () {
    ApiUtil.logout();
    this.history.pushState(null, "/login");
  },


  render: function () {
    var username = "login";
    if (this.props.currentUser.username) {
      username = this.props.currentUser.username;
    }

    var style = {
      backgroundImage: 'url(' + this.props.currentUser.avatar + ')'
    };

    return (
      <div>
        <div className="navbar-container">
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
              <input type="search" placeholder="Search"/>
            </li>

            <div className="navbar-right">
              <li className="nav-tab">
                <a href="#">Upload</a>
              </li>

              <li className="nav-tab">

                <a href={'#/' + username}>
                  <div className="avtr" style={style}></div>
                  {username.capitalize()}
                </a>
              </li>

              <li className="more" onClick={this.handleLogout}>
                <a className="dots" href="#/login" ></a>
              </li>
            </div>

          </ul>
        </div>
        <div className="nav-spacer"></div>
      </div>
    );
  }
});
            // <a href={'#/' + username}>{username.capitalize()}</a>
// <img src={assets.logo}/>
