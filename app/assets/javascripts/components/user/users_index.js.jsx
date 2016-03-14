var UsersIndex = React.createClass({

  getInitialState: function () {
    return {users: UserStore.all() };
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
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
              <UsersIndexItem user={user} key={user.id} />
            );
          })
        }
        </ul>
    );
  }
});
