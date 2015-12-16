var UsersDetail = React.createClass({

getInitialState: function () {
  return this.getStateFromStores();
},

getStateFromStores: function(props) {
  props = props || this.props;

  return {
    user: UserStore.show(),
    tracks: TrackStore.userTracks(props.params.id),
    follow: FollowStore.show()
  };
},

_onChange: function() {
  this.setState(this.getStateFromStores());
},

componentDidMount: function () {
  UserStore.addChangeListener(this._onChange);
  TrackStore.addChangeListener(this._onChange);
  FollowStore.addChangeListener(this._onChange);

  this.fetchUser(this.props.params);
},

componentWillUnmount: function () {
  UserStore.removeChangeListener(this._onChange);
  TrackStore.removeChangeListener(this._onChange);
  FollowStore.removeChangeListener(this._onChange);
},

componentWillReceiveProps: function (newProps) {
  this.fetchUser(newProps.params);
  this.setState(this.getStateFromStores(newProps));
},

fetchUser: function (params) {
  var u = params;
  if (u.username === undefined) {
    UserUtil.fetchUser(u.id);
  } else {
    UserUtil.fetchUser(u.username);
  }
},

// _getUser: function () {
//   this.setState({ user: UserStore.show() });
// },
//
// _getUserTracks: function () {
//   this.setState({ tracks: TrackStore.userTracks(this.state.user.id) });
// },
//
// _getFollow: function () {
//   this.setState({ follow: FollowStore.show() });
// },


render: function () {
  var user = this.state.user;
  var hideFollow = user.id === CUserStore.cUser().id ? "hide" : "";
  var status = this.state.follow ? "Following" : "Follow";
  var tracks;

  if (this.state.tracks.length === 0) {
    tracks = this.dummyTrack;
  } else {
    tracks = this.state.tracks.map(function (track) {
      return <TracksIndexItem key={track.id} track={track} />;
    });
  }

  return (
      <div className="profile-page group">
        <header>
        <img className="cover" src={user.cover}>
            <img className="avatar" src={user.avatar} />
            <h2>{user.username.capitalize()}</h2>
            <p>{user.bio}</p>
        </img>
        </header>
        <section className="tracklist">
          <ul className="profile-tabs group">
            <li><a>Tracks</a></li>
            <li className={"follow-button " + status}>
              <button className={hideFollow} onClick={this.follow}>{status}</button>
            </li>
          </ul>

          <ul>
            {tracks}
          </ul>
        </section>
        <Sidebar className="sidebar" />
      </div>
  );
},

follow: function (status) {
  if (typeof this.state.follow === "undefined") {
    FollowUtil.addFollow(CUserStore.cUser().id, this.state.user.id);
  } else {
    FollowUtil.removeFollow(this.state.follow.id);
  }
},

dummyTrack: (
  <li className="tracks-index-item group">
    <div className="track-profile">
      <h3 className="artist"></h3>
      <h3 className="artist title"></h3>
      <h3>This artist has no tracks yet!</h3>
    </div>
  </li>
)

});
