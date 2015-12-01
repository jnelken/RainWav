var TracksIndex = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return { tracks: CurrentUserStore.currentUser().feed_tracks  };
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeListener(this._getFeed);
    this._checkCUser();
  },

  _getFeed: function () {
    this.setState({ tracks: CurrentUserStore.currentUser().feed_tracks });
  },

  componentWillUnmount: function () {
    TrackStore.removeChangeListener(this._getFeed);
  },

  _checkCUser: function () {
    var cUser = CurrentUserStore.currentUser();
    if (typeof cUser === "undefined") {
      this.history.pushState(null, "/login");
    }
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
