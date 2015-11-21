var Nav = React.createClass({

  getInitialState: function () {
    return {currentUser: CurrentUserStore.currentUser()};
  },
  componentDidMount: function () {
    UserStore.addChangeListener(this._changeUser);
  },
  _changeUser: function () {
    this.setState({ currentUser: CurrentUserStore.currentUser() });
  },
  render: function () {
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
            <a href={'#/' + this.state.currentUser.username}>{this.state.currentUser.username}</a>
          </li>

          <li className="nav-tab">
            <a href="#">Upload</a>
          </li>
        </div>
        </ul>
      </div>
    );
  }
});

// <img src={assets.logo}/>
