var TracksIndex = React.createClass({

  getInitialState: function () {
    ApiUtil.fetchTracks();
    return {tracks: TrackStore.all() };
  },

  componentDidMount: function () {
    TrackStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ tracks: TrackStore.all() });
  },

  render: function () {


    return (
        <ul className="tracks-index">
        {
          this.state.tracks.map(function (track) {
            return (
                <TracksIndexItem track={track} />
            );
          })
        }
        </ul>
    );
  }
});
