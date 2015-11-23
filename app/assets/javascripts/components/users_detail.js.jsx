var UsersDetail = React.createClass({

  getInitialState: function () {
    return ({
      user: UserStore.show(),
      tracks: TrackStore.userTracks()
    });
  },

componentDidMount: function () {
  UserStore.addChangeListener(this._getUser);
  TrackStore.addChangeListener(this._getUserTracks);

  if (this.props.params.username !== undefined) {
    ApiUtil.fetchUser(this.props.params.username);
  } else {
    ApiUtil.fetchUser(this.props.params.id);
  }
  ApiUtil.fetchUserTracks(this.props.params.id);
},

_getUser: function () {
  // debugger
  this.setState({ user: UserStore.show() });
  this.setState({ tracks: TrackStore.userTracks() });
},

_getUserTracks: function () {
  this.setState({ tracks: TrackStore.userTracks() });
},

  render: function () {
    var user = this.state.user;
    return (
        <div className="show-page">
          <header><h2>{user.username}</h2></header>
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
