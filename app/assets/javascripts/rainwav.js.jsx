$(function () {
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

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
      if (this.props.location.pathname !== newProps.location.pathname) {
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
        <div id="main">
          {this.props.children}
        </div>
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={TracksIndex} />
      <Route path="login" component={Login} />
      <Route path="createaccount" component={CreateAcc} />
      <Route path="users" component={UsersIndex} />
      <Route path="users/:id" component={UsersDetail} />
      <Route path=":username" component={UsersDetail} />
      <Route path="tracks/:id" component={TracksDetail} />
      <Route path=":username/:title" component={TracksDetail} />
    </Route>
  );
  React.render(<Router>{routes}</Router>, root);
});
