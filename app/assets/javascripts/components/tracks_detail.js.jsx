var TracksDetail = React.createClass({

//////////*** make api util for fetchTrack ***////////////
//   getInitialState: function () {
//     return ({ user: TrackStore.all() });
//   },
//
// ComponentDidMount: function () {
//   TrackStore.addChangeListener(this._getTrack);
//   ApiUtil.fetchTrack(this.props.params.id);
// },
//
// _getTrack: function () {
//   this.setState({ track: TrackStore.all() });
// },

  render: function () {
    track = this.props.track;
    return (
        <div className="tracks-detail">
          <header className="tracks-detail-header"><h2>Title: {track.title}</h2></header>
          <p>Genre: {track.genre}</p>
          <p>{track.audio_url}</p>
        </div>
    );
  }
});
