var UsersDetail = React.createClass({

  getInitialState: function () {
    return ({
      user: UserStore.show(),
      tracks: TrackStore.userTracks()
    });
  },

componentDidMount: function () {
  UserStore.addChangeListener(this._getUser);

  if (this.props.params.username !== undefined) {
    ApiUtil.fetchUser(this.props.params.username);
  } else {
    ApiUtil.fetchUser(this.props.params.id);
    ApiUtil.fetchUserTracks(this.props.params.id);
  }


},

_getUser: function () {
  this.setState({ user: UserStore.show() });
},

  render: function () {
    console.log(this.state.user);
    var user = this.state.user;
    return (
        <div className="users-detail">
          <header className="users-detail-header"><h2>Profile: {user.username}</h2></header>
          <p>{user.bio}</p>
          <ul>
            {this.state.tracks.map(function (track) {
              return <TracksIndexItem track={track} />;
            })}
          </ul>
        </div>
    );
  }
});
