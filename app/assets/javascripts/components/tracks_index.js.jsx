var TracksIndex = React.createClass({

  getInitialState: function () {
    return { tracks: []  };
  },

  componentDidMount: function () {
    // TrackStore.addChangeListener(this._onChange);
    // TracksUtil.fetchTracks();
    CurrentUserStore.addChangeListener(this._getFeed);
  },

  _getFeed: function () {
    this.setState({ tracks: CurrentUserStore.currentUser().feed_tracks });
  },

  componentWillUnmount: function () {
    TrackStore.removeChangeListener(this._onChange);
  },

  render: function () {

    if (typeof this.state.tracks === "undefined") {
      return <img className="spinner" src={assets.spinner} />;
    }
    return (
      <div className="group">
      <ul className="tracks-index">
        <li>
          <h1>Stream</h1>
          <p>Hear the latest posts from the people you're following</p>
        </li>
        {
          this.state.tracks.map(function (track) {
            return (
              <TracksIndexItem key={track.id} track={track} />
            );
          })
        }
      </ul>
      <Sidebar />
      </div>
    );
  }
});
