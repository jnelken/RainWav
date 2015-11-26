var TracksDetail = React.createClass({

  getInitialState: function () {
    return ({ track: TrackStore.show() });
  },

  componentDidMount: function () {
    TrackStore.addChangeListener(this._getTrack);
      // TracksUtil.fetchTrackUrl(options);
    // } else {
      TracksUtil.fetchTrack(this.props.params.id);
    // }
  },

  componentWillReceiveProps: function (newProps) {
    TracksUtil.fetchTrack(newProps.params.id);
  },

  _getTrack: function () {
    this.setState({ track: TrackStore.show() });
  },

  componentWillUnmount: function () {
    TrackStore.removeChangeListener(this._getTrack);
  },

  render: function () {
    if (typeof this.state.track === "undefined") { return <img className="spinner" src={assets.spinner} />; }

    var user = this.state.track.user;
    var track = this.state.track;
    console.log(this.state.track);

    return (
        <div className="track-page group">
          <header className="cover">
            <h2>{track.title.capitalize()}</h2>
            <p>{track.description}</p>
            <img className="lgwaveform" src={assets.lgwaveform} />
            <img className="track-image" src={track.image} />
          </header>
              <TracksIndexItem key={track.id} track={track} />;
          <section className="tracklist">
            <ul className="profile-tabs group">
              <li><a href={"#/" + user.username}>All</a></li>
              <li><a href="#/tracks">Tracks</a></li>
              <li><a href="#/reposts">Reposts</a></li>
            </ul>
          </section>
        </div>
    );
  }
});
