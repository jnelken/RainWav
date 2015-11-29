var Sidebar = React.createClass({

  getInitialState: function() {
    return {
      playDetails: "hidden",
      userPlays: CurrentUserStore.currentUser().plays,
      profiles: UserStore.all()
    };
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeListener(this._setPlays);
    UserStore.addChangeListener(this._setProfiles);

    UserUtil.fetchUsers();
  },

  _setPlays: function () {
    this.setState({ userPlays: CurrentUserStore.currentUser().plays });
  },

  _setProfiles: function () {
    this.setState({ profiles: UserStore.all() });
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeListener(this._setPlays);
  },


  render: function () {
    var currentUser = CurrentUserStore.currentUser();
    var trackStats;
    var trackCount;
    var count;

    if (currentUser.tracks) {
      trackCount = <p className="tracks">{currentUser.tracks.length}</p>;
      trackStats = currentUser.tracks.map(function (track) {
        return (
          <li key={track.id}>
            <p>{track.plays} in {track.title}</p>
          </li>
        );
      });
    }
    if (Object.keys(currentUser).length === 0) {
      return <img className="spinner" src={assets.spinner} />;
    }
    return (
      <section className="sidebar">
        <article className="stats">
          <div className="stats-header">
            <img src={assets.stats} />
            Your Statistics
          </div>

          <p className="plays">
            {FollowStore.followercount()}
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
          </div>
          <ul className="profiles group flex-container">
          {
            this.state.profiles.map(function (profile, i) {
              if (currentUser.followees.indexOf(profile) === -1) {
                if (i < 10) {
                  return (
                    <li key={profile.id} className="profile">
                      <a href={"#/users/" + profile.id}><img src={profile.avatar} /></a>
                      <div className="followcount">
                        <img className="icon" src={assets.followers} /> {profile.followees.length}
                      </div>
                      <div className="trackcount">
                        <img className="icon" src={assets.wave} />{profile.tracks.length}
                      </div>
                    </li>
                  );
                }
              }
          })}

        </ul>

        </article>

      </section>
    );
  },

  togglePlayDetails: function () {
    if (this.state.playDetails === "hidden") {
      this.setState({playDetails: ""});
    } else {
      this.setState({playDetails: "hidden"});
    }
  }
});
