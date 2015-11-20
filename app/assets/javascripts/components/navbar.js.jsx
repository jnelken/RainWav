var Nav = React.createClass({

  componentDidMount: function () {
    UserStore.addChangeListener(this._changeUser);
    // ApiUtil.fetchUser(this.props.params.id);
  },

  _changeUser: function () {
    this.setState({ user: UserStore.show() });
  },

  render: function () {
    //
    // if (current_user)

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
            <a href="#">User</a>
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
