var App = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({ currentUser: CurrentUserStore.currentUser() });
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeListener(this._setCurrentUser);
    
    SessionUtil.fetchCurrentUser();
    FollowUtil.fetchFollows();
    RepostUtil.fetchReposts();
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
    // var children = React.Children.map(this.props.children, function(child) {
    //   return React.cloneElement(child, {...this.state});
    // }, this);

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
