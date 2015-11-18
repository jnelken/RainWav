var TracksDetail = React.createClass({

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
