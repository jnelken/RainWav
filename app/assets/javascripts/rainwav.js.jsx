$(function () {
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var App = React.createClass({
    render: function () {
      return (
        <div>
          <header><h1>RainWav</h1></header>
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Stream}/>
      <Route path="users/show" component={Profile}/>
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});