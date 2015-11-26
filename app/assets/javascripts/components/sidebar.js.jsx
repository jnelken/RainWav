var Sidebar = React.createClass({

  getInitialState: function() {
    return {playDetails: "hidden"};
  },

  componentDidMount: function () {

  },

  render: function () {
    var currentUser = CurrentUserStore.currentUser();
    var trackStats;
    var trackCount;

    if (currentUser.tracks) {
      trackCount = <p className="plays">{currentUser.tracks.length}</p>;
      trackStats = currentUser.tracks.map(function (track) {
        return (
          <li key={track.id}>
            <p>{track.plays} in {track.title}</p>
          </li>
        );
      });
    }

    var profiles;

    return (
      <section className="sidebar">
        <article className="stats">

          <div className="stats-header">
            <img src={assets.stats} />
            Statistics
          </div>

          <ul className={"play-details " + this.state.playDetails}>
            {trackStats}
          </ul>

          <p className="plays" onClick={this.togglePlayDetails}>{currentUser.plays}</p><p>Plays in total</p>
          {trackCount}<p>Tracks in total</p>

        </article>

        <article className="stats">
            <div className="stats-header">
            <img src={assets.followers} />
            Who to follow
          </div>
          <p>{profiles}</p>

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
