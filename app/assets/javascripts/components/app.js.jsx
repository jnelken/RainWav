var App = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({ currentUser: CurrentUserStore.currentUser() });
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeListener(this._setCurrentUser);
    ApiUtil.fetchCurrentUser();

    ApiUtil.fetchUsers();
    ApiUtil.fetchTracks();
    GenreUtil.fetchGenres();
  },

  componentWillReceiveProps: function (newProps) {
    /// logged out redirect

    var newPath = newProps.location.pathname;
    var currentPath = this.props.location.pathname;
    if (newPath !== currentPath && newPath !== "/createaccount") {
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
