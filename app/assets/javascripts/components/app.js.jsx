var App = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({ currentUser: CUserStore.cUser() });
  },

  componentDidMount: function () {
    CUserStore.addChangeListener(this._setCurrentUser);

    SessionUtil.fetchCurrentUser();
    UserUtil.fetchUsers();
    GenreUtil.fetchGenres();
    TracksUtil.fetchTracks();
  },

  // componentWillReceiveProps: function (newProps) {
  //   /// logged out redirect
  //   var newPath = newProps.location.pathname;
  //   var currentPath = this.props.location.pathname;
  //
  //   if (newPath !== currentPath && newPath !== "/createaccount") {
  //     this._ensureLoggedIn();
  //   }
  // },
  //
  // _ensureLoggedIn: function () {
  //   if (!CUserStore.isLoggedIn()) {
  //     this.history.pushState(null, "/login");
  //   }
  // },

  _setCurrentUser: function () {
    this.setState({currentUser: CUserStore.cUser() });
  },

  componentWillUnmount: function () {
    CUserStore.removeChangeListener(this._setCurrentUser);
  },

  render: function () {
    return (
      <div id="app">
        <Nav cUser={this.state.currentUser} />
        <div id="viewport">
          {this.props.children}
        </div>
      </div>
    );
  }
});
