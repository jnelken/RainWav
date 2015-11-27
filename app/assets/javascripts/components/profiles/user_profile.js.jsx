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
  FollowUtil.fetchFollows();
},

fetchUser: function (params) {
  var u = params;
  if (u.username === undefined) {
    UserUtil.fetchUser(u.id);
  } else {
    UserUtil.fetchUser(u.username);
  }
},

componentWillReceiveProps: function (newProps) {
  this.fetchUser(newProps.params);
  FollowUtil.fetchFollows();
},

_getUser: function () {
  this.setState({ user: UserStore.show() });
  TracksUtil.fetchUserTracks(this.state.user.id);
},
_getUserTracks: function () {
  this.setState({ tracks: TrackStore.userTracks() });
  FollowUtil.fetchFollows();
},
_getFollow: function () {
  this.setState({ follow: FollowStore.show() });
  // debugger
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

    if (this.state.user.id === CurrentUserStore.currentUser().id) {
      hideMe = "hide";
    }

    if (this.state.follow) {
      status = "Following";
    } else {
      status = "Follow";
    }
    // debugger

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
              <li className={"follow-button " + status}>
                <button className={hideMe} onClick={this.follow}>{status}</button>
              </li>
            </ul>

            <ul>
              {this.state.tracks.map(function (track) {
                return <TracksIndexItem key={track.id} track={track} />;
              })}
            </ul>
          </section>
          <Sidebar className="sidebar" />
        </div>
    );
  },

  follow: function (status) {
    if (typeof follow === "undefined") {
      FollowUtil.addFollow(CurrentUserStore.currentUser().id, this.state.user.id);
    } else {
      FollowUtil.removeFollow(this.state.follow.id);
    }
    FollowUtil.fetchFollows();
  }

});
