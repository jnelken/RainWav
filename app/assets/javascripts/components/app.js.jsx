var App = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({ currentUser: CurrentUserStore.currentUser() });
  },

  _setGenres: function () {
    this.setState({ genres: GenreStore.all() });
  },

  _setUsers: function () {
    this.setState({ users: UserStore.all() });
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeListener(this._setCurrentUser);
    ApiUtil.fetchCurrentUser();
    GenreStore.addChangeListener(this._setGenres);
    GenreUtil.fetchGenres();
    UserStore.addChangeListener(this._setUsers);
    ApiUtil.fetchUsers();
  },

  // componentWillUnmount: function () {
  //   GenreStore.removeChangeListener(this._setGenres);
  //   GenreStore.removeChangeListener(this._setUsers);
  // },

  componentWillReceiveProps: function (newProps) {
    var newPath = newProps.location.pathname;
    if (newPath === "/createaccount") {
      return;
    }
    if (newPath !== this.props.location.pathname) {
      this._ensureLoggedIn();
    }
  },

  _ensureLoggedIn: function () {
    if (!CurrentUserStore.isLoggedIn()) {
      this.history.pushState(null, "/login");
    }
  },

  _setCurrentUser: function () {
    this.setState({currentUser: CurrentUserStore.currentUser() });
  },

  render: function () {
    return (
      <div id="app">
        <Nav
          currentUser={this.state.currentUser}
          users={this.state.users}
          genres={this.state.genres}
        />

        <div id="viewport">
          {this.props.children}
        </div>
      </div>
    );
  }
});
