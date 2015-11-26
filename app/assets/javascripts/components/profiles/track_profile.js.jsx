var TracksDetail = React.createClass({

  getInitialState: function () {
    return ({ track: TrackStore.show() });
  },

  componentDidMount: function () {
    TrackStore.addChangeListener(this._getTrack);

    // try to make this component read /id or username/title
    if (this.props.params.id === undefined) {
      var options = {
        track: this.props.params.title,
        artist: this.props.params.username
      };

      TracksUtil.fetchTrackUrl(options);
    } else {
      TracksUtil.fetchTrack(this.props.params.id);
    }
  },

  _getTrack: function () {
    this.setState({ track: TrackStore.show() });
  },

  componentWillUnmount: function () {
    TrackStore.removeChangeListener(this._getTrack);
  },

  render: function () {


    if (typeof track === "undefined") { return <img className="spinner" src={assets.spinner} />; }

    return (
        <div className="track-page group">
          <header>
            <img className="avatar" src={user.avatar} />
            <h2>{user.username.capitalize()}</h2>
            <p>{user.bio}</p>
          </header>
          <section className="tracklist">
            <ul className="profile-tabs group">
              <li><a href={"#/" + user.username}>All</a></li>
              <li><a href="#/tracks">Tracks</a></li>
              <li><a href="#/reposts">Reposts (coming soon)</a></li>
            </ul>
            <ul>
              {this.state.tracks.map(function (track) {
                return <TracksIndexItem key={track.id} track={track} />;
              })}
            </ul>
          </section>
        </div>
    );
  }
});
