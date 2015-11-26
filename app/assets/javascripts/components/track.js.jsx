var TracksIndexItem = React.createClass({

  getInitialState: function () {
    return ({
      genre: GenreStore.getGenre(this.props.track.genre_id),
      artist: UserStore.getUser(this.props.track.user_id),
      plays: parseInt(this.props.track.plays),
      controls: <img src={assets.play} onClick={this.handlePlay} />
    });
  },

  componentDidMount: function () {
    debugger
    UserStore.addChangeListener(this._onUserChange);
    GenreStore.addChangeListener(this._onGenreChange);
  },

  _onUserChange: function () {
    this.setState({ artist: UserStore.getUser(this.props.track.user_id) });
  },

  _onGenreChange: function () {
    this.setState({ genre: GenreStore.getGenre(this.props.track.genre_id) });
  },

  componentWillUnmount: function () {
    UserStore.addChangeListener(this._onUserChange);
    GenreStore.addChangeListener(this._onGenreChange);
  },

  handlePlay: function () {
    var trackId = "audio-" + this.props.track.id;
    document.getElementById(trackId).play();

    if (this.state.playing === undefined) {
      this.setState({ plays: parseInt(this.props.track.plays) + 1 });
      TracksUtil.addPlay(this.props.track);
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

  render: function () {
    var track = this.props.track;

    if (!this.state.artist || !this.state.genre) {
      return <img className="spinner" src={assets.spinner} />;
    }

    // var waveform = new Waveform({
    //   container: document.getElementById("wavform"),
    //   data: [1, 0.2, 0.5],
    //   innerColor: "#20C1F3",
    //   // outerColor:
    //   interpolate:
    // });

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
            <ReactRouter.Link to={this.state.artist.username}>
              {this.state.artist.username.capitalize()}
            </ReactRouter.Link>
          </h3>
          <h3 className="title">
            <ReactRouter.Link to={"/tracks/" + track.id } className="artist">
              {track.title}
            </ReactRouter.Link>
          </h3>
          <button className="genre">#{this.state.genre.genre}</button>
          <img className="waveform" src={assets.waveform} />
          <audio id={"audio-" + track.id } src={track.audio} type="audio/mp3" />
          <CommentBar plays={this.state.plays} track={this.props.track} />
        </div>
      </li>
    );
  }
});
