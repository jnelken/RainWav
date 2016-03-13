var TracksIndex = React.createClass({

  getInitialState: function () {
    return ({tracks: TrackStore.feed()});
  },

  componentDidMount: function () {
    TrackStore.addChangeListener(this._getFeed);
    CUserStore.addChangeListener(this._getFeed);
  },

  _getFeed: function () {
    this.setState({ tracks: TrackStore.feed() });
  },

  componentWillUnmount: function () {
    TrackStore.removeChangeListener(this._getFeed);
    CUserStore.removeChangeListener(this._getFeed);
  },

  render: function () {
    if (typeof CUserStore.cUser().username === "undefined") {
      return <Login />;
    }

    return (
      <div className="group">
      <ul className="tracks-index">
        <li>
          <h1>Stream</h1>
          {(typeof this.state.tracks === "undefined")
            ? <p>
                Oops! Something went wrong.
                Please logout, refresh and try again.
              </p>
            : <p>High-quality music from the people you're following:</p>
          }
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
