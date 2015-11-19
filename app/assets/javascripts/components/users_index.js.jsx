var UsersIndex = React.createClass({

  getInitialState: function () {
    ApiUtil.fetchUsers();
    return {users: UserStore.all() };
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ users: UserStore.all() });
  },

  render: function () {

    debugger
    return (
        <ul className="users-index">
        {
          this.state.users.map(function (user) {
            return (
              <div className="users-index">
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
                // <UsersDetail user={user} />
