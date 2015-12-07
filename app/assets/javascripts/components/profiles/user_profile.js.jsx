var UsersDetail = React.createClass({

getInitialState: function () {
  return ({
    user: UserStore.show(),
    tracks: TrackStore.userTracks(),
    follow: FollowStore.show()
  });
},

componentDidMount: function () {
  UserStore.addChangeListener(this._getUser);
  TrackStore.addChangeListener(this._getUserTracks);
  FollowStore.addChangeListener(this._getFollow);

  this.fetchUser(this.props.params);
},

componentWillReceiveProps: function (newProps) {
  this.fetchUser(newProps.params);
},

fetchUser: function (params) {
  var u = params;
  if (u.username === undefined) {
    UserUtil.fetchUser(u.id);
  } else {
    UserUtil.fetchUser(u.username);
  }
},

_getUser: function () {
  this.setState({ user: UserStore.show() });
  this._getFollow();
  TracksUtil.fetchUserTracks(this.state.user.id);
},

_getUserTracks: function () {
  this.setState({ tracks: TrackStore.userTracks() });

},

_getFollow: function () {
  this.setState({ follow: FollowStore.show() });
},

componentWillUnmount: function () {
  UserStore.removeChangeListener(this._getUser);
  TrackStore.removeChangeListener(this._getUserTracks);
  FollowStore.removeChangeListener(this._getFollow);
},

render: function () {
  var user = this.state.user;
  var hideMe;
  var status;

  if (this.state.user.id === CUserStore.cUser().id) {
    hideMe = "hide";
  }

  if (this.state.follow) {
    status = "Following";
  } else {
    status = "Follow";
  }

  if (this.state.tracks.length === 0) {
    tracks =  <li className="tracks-index-item group">
            <div className="track-profile">
              <h3 className="artist">
              </h3>
              <h3 className="artist title">
              </h3>
            </div>
          </li>;
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
              <button className={hideMe} onClick={this.follow}>{status}</button>
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
}

});
