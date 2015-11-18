var UsersDetail = React.createClass({

  getInitialState: function () {
    return ({ user: UserStore.all() });
  },

ComponentDidMount: function () {
  UserStore.addChangeListener(this._getUser);
  ApiUtil.fetchUser(this.props.params.id);
},

_getUser: function () {
  this.setState({ user: UserStore.all() });
},

  render: function () {
    debugger
    var user = this.state.user;
    return (
        <div className="users-detail">
          <header className="users-detail-header"><h2>Profile: {user.email}</h2></header>
          <p>{user.tracks}</p>
        </div>
    );
  }
});
