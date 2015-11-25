var TracksDetail = React.createClass({

  getInitialState: function () {
    return ({ user: TrackStore.show() });
  },

  componentDidMount: function () {
    TrackStore.addChangeListener(this._getTrack);

    // try to make this component read /id or username/title
    if (this.props.params.id === undefined) {
      var options = {
        track: this.props.params.title,
        artist: this.props.params.username
      };

      ApiUtil.fetchTrackUrl(options);
    } else {
      ApiUtil.fetchTrack(this.props.params.id);
    }
  },

  _getTrack: function () {
    this.setState({ track: TrackStore.show() });
  },

  componentWillUnmount: function () {
    TrackStore.removeChangeListener(this._getTrack);
  },

  render: function () {

    var track = this.state.track;
    if (track === undefined) { return <div>loading...</div>; }

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
                return <TracksIndexItem key={track.title} track={track} />;
              })}
            </ul>
          </section>
        </div>
    );
  }
});
