var UsersDetail = React.createClass({
  getInitialState: function () {
    return ({ user: ApiUtil.fetchUser(this.props.params.id) });
  },

  render: function () {
    var user = this.state.user;
    return (
        <div className="users-detail">
          <header className="users-detail-header"><h2>Profile: {user.email}</h2></header>
          <p>{user.tracks}</p>
        </div>
    );
  }
});
