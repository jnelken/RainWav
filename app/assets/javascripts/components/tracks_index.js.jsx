var TracksIndex = React.createClass({

  getInitialState: function () {
    return {
      tracks: TrackStore.all()
     };
  },

  componentDidMount: function () {
    TrackStore.addChangeListener(this._onChange);
    TracksUtil.fetchTracks();
    RepostUtil.getReposts();
  },

  _onChange: function () {
    this.setState({ tracks: TrackStore.all() });
  },

  componentWillUnmount: function () {
    TrackStore.removeChangeListener(this._onChange);
  },

  render: function () {
    return (
      <div className="group">
      <ul className="tracks-index">
        <li>
          <h1>Stream</h1>
          <p>Hear the latest posts from the people youre following</p>
        </li>
        {
          this.state.tracks.map(function (track) {
            return (
              <TracksIndexItem key={track.id} track={track} />
            );
          })
        }
      </ul>
      <Sidebar currentUser={this.state.currentUser} />
      </div>
    );
  }
});
