var UsersDetail = React.createClass({

  getInitialState: function () {
    return ({
      user: UserStore.show(),
      tracks: TrackStore.userTracks(),
      follow: { status: "Follow"}
    });
  },

componentDidMount: function () {
  UserStore.addChangeListener(this._getUser);
  TrackStore.addChangeListener(this._getUserTracks);
  FollowStore.addChangeListener(this._getFollow);

  var u = this.props.params;
  if (u.username === undefined) {
    ApiUtil.fetchUser(u.id);
  } else {
    ApiUtil.fetchUser(u.username);
  }
},

_getUser: function () {
  this.setState({ user: UserStore.show() });
  ApiUtil.fetchUserTracks(this.state.user.id);
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

follow: function () {
  if (this.state.follow.status == "Follow") {
    FollowUtil.addFollow(CurrentUserStore.currentUser().id, this.state.user.id);
  } else {
    FollowUtil.removeFollow(this.state.follow.id);
  }
},
  render: function () {
    var user = this.state.user;
    var hideMe;
    if (this.state.user.id === CurrentUserStore.currentUser().id) {
      hideMe = "hide";
    }

    console.log(this.state.follow.status);
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
              <li><a href={"#/" + user.username}>All</a></li>
              <li><a href="#/tracks">Tracks</a></li>
              <li><a href="#/reposts">Reposts</a></li>
              <li className={"follow-button " + this.state.follow.status}>
                <button className={hideMe} onClick={this.follow}>{this.state.follow.status}</button>
              </li>
            </ul>

            <ul>
              {this.state.tracks.map(function (track) {
                return <TracksIndexItem key={track + track.id} track={track} />;
              })}
            </ul>
          </section>
          <Sidebar className="sidebar" />
        </div>
    );
  }
});
          // <div className="cover" styles={"background-image: url(" + user.cover + ")"}>
          // </div>
