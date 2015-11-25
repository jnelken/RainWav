var App = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return { currentUser: CurrentUserStore.currentUser() };
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeListener(this._onChange);
    ApiUtil.fetchCurrentUser();
  },

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

  _onChange: function () {
    this.setState({currentUser: CurrentUserStore.currentUser() });
  },

  render: function () {
    return (
      <div id="app">
        <Nav currentUser={this.state.currentUser} />

        <div id="viewport">
          {this.props.children}
        </div>
      </div>
    );
  }
});
