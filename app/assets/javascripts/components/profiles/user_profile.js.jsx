var UsersDetail = React.createClass({

getInitialState: function () {
  return this.getStateFromStores(this.props.params.id);
},

getStateFromStores: function(userId) {
  return {
    user: UserStore.show(),
    userId: userId,
    tracks: TrackStore.userTracks(userId),
    follow: FollowStore.show()
  };
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

_onChange: function() {
  this.setState(this.getStateFromStores(this.state.userId));
},

componentWillReceiveProps: function (newProps) {
  this.fetchUser(newProps.params);
},

fetchUser: function (params) {
  var u = params;
  if (u.username === undefined) {
    UserUtil.fetchUser(u.id, this._userSuccess);
  } else {
    UserUtil.fetchUser(u.username, this._userSuccess);
  }
},

_userSuccess: function (userId) {
  this.setState(this.getStateFromStores(userId));
},

render: function () {
  var user = this.state.user;
  var hideOption = user.id === CUserStore.cUser().id ? "hide" : "";
  var showOption = user.id === CUserStore.cUser().id ? "" : "hide";
  var status = this.state.follow ? "Following" : "Follow";
  var tracks;

  if (this.state.tracks.length === 0) {
    tracks = this.zeroTracks;
  } else {
    tracks = this.state.tracks.map(function (track) {
      return <TracksIndexItem key={track.id} track={track} />;
    });
  }

  return (
      <div className="profile-page group">
        <header>
        <img className="cover" src={user.cover} />
          <input type="file" name="file" id="avatar-file" onChange={this.changeAvatar}/>
          <img className="avatar" src={user.avatar} />
          <label htmlFor="avatar-file" className={"avatar-input " + showOption}>
            Replace image
          </label>
          <h2>{user.username.capitalize()}</h2>
          <p>{user.bio}</p>
        </header>

        <section className="tracklist">
          <ul className="profile-tabs group">
            <li><a>Tracks</a></li>
            <li className={"follow-button " + status}>
              <button className={hideOption} onClick={this.follow}>{status}</button>
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

changeAvatar: function (e) {
  var imageFile = e.currentTarget.files[0];

  if (imageFile) {
    var newAvatar = new FormData();
    newAvatar.append("user[avatar]", imageFile);
    newAvatar.append("user[id]", this.state.user.id);

    SessionUtil.updateCUser(newAvatar);
  }
},

follow: function (status) {
  if (typeof this.state.follow === "undefined") {
    FollowUtil.addFollow(CUserStore.cUser().id, this.state.user.id);
  } else {
    FollowUtil.removeFollow(this.state.follow.id);
  }
},

zeroTracks: (
  <li className="tracks-index-item group">
    <div className="track-profile">
      <h3 className="artist"></h3>
      <h3 className="artist title"></h3>
      <h3>This artist has no tracks yet!</h3>
    </div>
  </li>
)

});
