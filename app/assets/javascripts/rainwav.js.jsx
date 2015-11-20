$(function () {
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
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
      <Route path="users" component={UsersIndex} />
      <Route path="users/:id" component={UsersDetail} />
      <Route path=":username" component={UsersDetail} />
      <Route path="tracks/:id" component={TracksDetail} />
      <Route path=":username/:title" component={TracksDetail} />
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);

});
