var UsersIndexItem = React.createClass({
  render: function () {
    var user = this.props.user;
    return (
      <div className="users-index-item">
        <p key={user.id}>{user.id}: {user.username}</p>
      </div>
    );
  }
});
