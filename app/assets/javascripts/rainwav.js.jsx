$(function () {
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function () {
      return { currentUser: null };
    },

    componentWillMount: function () {
      CurrentUserStore.addChangeListener(this._ensureLoggedIn);
      ApiUtil.fetchCurrentUser();
    },

    _ensureLoggedIn: function () {
      if (!CurrentUserStore.isLoggedIn()) {
        this.history.pushState(null, "/login");
      }

      this.setState({currentUser: CurrentUserStore.currentUser()});
    },

      // if (!this.state.currentUser) { return ( <img className="spinner" src={assets.spinner} /> ); }
    render: function () {
      return (
        <div id="app">
          <Nav />
          {this.props.children}
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
