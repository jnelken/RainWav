var TracksIndex = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({tracks: TrackStore.feed()});
  },

  componentDidMount: function () {
    CUserStore.addChangeListener(this._getFeed);
    TrackStore.addChangeListener(this._getFeed);
    RepostUtil.fetchReposts();
  },

  _getFeed: function () {
    this.setState({ tracks: TrackStore.feed() });
  },

  componentWillUnmount: function () {
    TrackStore.removeChangeListener(this._getFeed);
  },

  render: function () {
    if (typeof CUserStore.cUser().username === "undefined") {
      return <Login />;
    }

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
