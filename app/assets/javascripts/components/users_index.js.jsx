var UsersIndex = React.createClass({

  getInitialState: function () {
    return {users: UserStore.all() };
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._onChange);
    UserUtil.fetchUsers();
  },

  _onChange: function () {
    this.setState({ users: UserStore.all() });
  },

  render: function () {

    return (
        <ul className="users-index">
        {
          this.state.users.map(function (user) {
            return (
              <div className="users-index">
                <p>user.username</p>
                <p>{user.id}</p>
                <p>{user.email}</p>
              </div>
            );
          })
        }
        </ul>
    );
  }
});
