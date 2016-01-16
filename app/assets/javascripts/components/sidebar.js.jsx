var Sidebar = React.createClass({

  getInitialState: function() {
    return {
      playDetails: "hidden",
      userPlays: CUserStore.plays(),
      profiles: UserStore.all(),
      userPage: 0
    };
  },

  componentDidMount: function () {
    CUserStore.addChangeListener(this._setPlays);
    UserStore.addChangeListener(this._setProfiles);

    UserUtil.fetchUsers();
  },

  _setPlays: function () {
    this.setState({ userPlays: CUserStore.plays() });
  },

  _setProfiles: function () {
    this.setState({ profiles: UserStore.all() });
  },

  componentWillUnmount: function () {
    CUserStore.removeChangeListener(this._setPlays);
    UserStore.removeChangeListener(this._setProfiles);
  },


  render: function () {
    var cUser = CUserStore.cUser();
    var trackStats;
    var trackCount;
    var count;
    var page = this.state.userPage;
    var profiles = this.state.profiles;

    if (cUser.tracks) {
      trackCount = <p className="tracks">{cUser.tracks.length}</p>;
      trackStats = cUser.tracks.map(function (track) {
        return (
          <li key={track.id}>
            <p>{track.plays} in {track.title}</p>
          </li>
        );
      });
    }
    if (Object.keys(cUser).length === 0) {
      return <img className="spinner" src={assets.spinner} />;
    }
    return (
      <section className="sidebar">
        <article className="stats">
          <div className="stats-header">
            <img src={assets.stats} />
            Your Statistics
          </div>

          <p className="followers">
            {cUser.followers.length}
          </p>
          <p>Followers</p>

          <p className="plays" onClick={this.togglePlayDetails}>
            {this.state.userPlays}
          </p>
          <p>Plays in total of</p>

            <ul className={"play-details " + this.state.playDetails}>
              {trackStats}
            </ul>
          {trackCount}
            <p>Tracks</p>
        </article>

        <article className="stats">
          <div className="stats-header">
            <img src={assets.followers} />
             Who to follow
            <span className="refresh" onClick={this.paginateUsers}> ⟳</span>
          </div>
          <ul className="profiles group flex-container">
          {
            profiles.slice(page, (9+page)).map(function (profile) {

              if (cUser.followees.indexOf(profile) === -1) {

                  return (
                    <li key={profile.id} className="profile">
                      <a href={"#/users/" + profile.id}><img className="sidebar-avatar" src={profile.avatar} /></a>
                      <div className="followcount">
                        <img className="icon" src={assets.followers} /> {profile.followers.length}
                      </div>
                      <div className="trackcount">
                        <img className="icon" src={assets.wave} />{TrackStore.userTracks(profile.id).length}
                      </div>
                    </li>
                  );

              }
          })}

        </ul>

        </article>

      </section>
    );
  },

  paginateUsers: function () {
    if (this.state.userPage > this.state.profiles.length-10) {
      this.setState({ userPage: 0 });
    } else {
      this.setState({ userPage: (this.state.userPage + 9) });
    }
  },

  togglePlayDetails: function () {
    if (this.state.playDetails === "hidden") {
      this.setState({playDetails: ""});
    } else {
      this.setState({playDetails: "hidden"});
    }
  }
});
