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

  componentWillUnmount: function () {
    TrackStore.removeChangeListener(this._onChange);
  },

  render: function () {


    return (
        <ul className="tracks-index">
          <li>
            <h1>Stream</h1>
            <p>Hear the latest posts from the people you're following</p>
          </li>
        {
          this.state.tracks.map(function (track) {
            return (
                <TracksIndexItem key={track.title} track={track} />
            );
          })
        }
        </ul>
    );
  }
});
