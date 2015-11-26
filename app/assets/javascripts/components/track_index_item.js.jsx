var TracksIndexItem = React.createClass({

  getInitialState: function () {
    return ({
      genre: this.props.track.genre,
      artist: this.props.track.user,
      plays: parseInt(this.props.track.plays),
      controls: <img src={assets.play} onClick={this.handlePlay} />
    });
  },

  render: function () {
    var track = this.props.track;
    var artist = this.state.artist;
    var genre = this.state.genre.genre;

    if (!this.state.artist || !this.state.genre) {
      return <img className="spinner" src={assets.spinner} />;
    }

    return (
      <li className="tracks-index-item group">
        <ReactRouter.Link className="artist" to={"/tracks/" + track.id }>
          <img src={track.image} />
        </ReactRouter.Link>

        <div className="track-profile">
          <div className="controls">
            {this.state.controls}
          </div>
          <h3 className="artist">
            <ReactRouter.Link to={artist.username}>
              {artist.username.capitalize()}
            </ReactRouter.Link>
          </h3>
          <h3 className="title">
            <ReactRouter.Link to={"/tracks/" + track.id } className="artist">
              {track.title}
            </ReactRouter.Link>
          </h3>
          <button className="genre">#{genre}</button>

          <Waveform track={track}/>
          <Trackbar plays={this.state.plays} track={track} />
        </div>
      </li>
    );
  },

  handlePlay: function () {
    var trackId = "audio-" + this.props.track.id;
    document.getElementById(trackId).play();

    if (this.state.playing === undefined) {
      this.setState({ plays: this.props.track.plays + 1 });
      TracksUtil.addPlay(this.props.track);

      if (this.props.track.user.id === CurrentUserStore.currentUser().id) {
        SessionUtil.fetchCurrentUser();
      }
    }
    this.setState({
      playing: this.state.playing ? true : false,
      controls: <img className="pause" src={assets.pause} onClick={this.handlePause} />
    });
  },

  handlePause: function () {
    var trackId = "audio-" + this.props.track.id;
    document.getElementById(trackId).pause();

    toggle = this.state.playing ? true : false;
    this.setState({ playing: toggle });
    this.setState({ controls: <img src={assets.play} onClick={this.handlePlay} /> });
  },

});
