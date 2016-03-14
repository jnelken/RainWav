var TracksIndexItem = React.createClass({

  getInitialState: function () {
    return ({
      wavesurfer: Object.create(WaveSurfer),
      genre: GenreStore.getGenre(this.props.track.genre_id).genre,
      user: UserStore.getUser(this.props.track.user_id),
      plays: parseInt(this.props.track.plays),
      controls: <img src={assets.play} onClick={this.handlePlay} />,
    });
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._setUser);
    TrackStore.addChangeListener(this._setControls);
  },

  _setUser:function () {
    this.setState({ user: UserStore.getUser(this.props.track.user_id) });
  },

  _setControls: function () {
    if (this.isPlaying()) TrackStore.nowPlaying().play();
    var controls = ((this.isPlaying())
      ? <img src={assets.pause} onClick={this.handlePause} />
      : <img src={assets.play} onClick={this.handlePlay} />
    );
    this.setState({ controls: controls });
  },

  componentWillUnmount: function () {
    UserStore.removeChangeListener(this._setUser);
    TrackStore.removeChangeListener(this._setControls);
  },

  render: function () {
    var track = this.props.track;
    var user = this.state.user;
    var genre = this.state.genre;

    if (!user || !genre ) {
      return <img className="spinner" src={assets.spinner} />;
    }

    return (
      <li className="tracks-index-item group">

        <a href={"#/users/" + user.id } className="artist">
          <img src={track.image} />
        </a>

        <div className="track-profile">
          <div className="controls">
            {this.state.controls}
          </div>

          <h3 className="artist">
            <a href={"#/" + user.username}>
              {user.username.capitalize()}
            </a>
          </h3>

          <h3 className="title">
            <a href={"#/users/" + user.id } className="artist">
              {track.title}
            </a>
          </h3>

          <button className="genre">#{genre}</button>
          <WaveSurferItem track={track} wavesurfer={this.state.wavesurfer}/>
          <Trackbar plays={this.state.plays} track={track} />
        </div>
      </li>
    );
  },

  handlePlay: function () {
    WaveUtil.setPlaying(this.state.wavesurfer);
    if (this.state.playing === undefined) {
      this.setState({ plays: this.props.track.plays + 1 });
      TracksUtil.addPlay(this.props.track, this._success);
    }

    this.setState({
      playing: this.state.playing ? true : false,
      controls: <img className="pause" src={assets.pause} onClick={this.handlePause} />
    });
  },

  _success: function () { //updates Sidebar play count for cUser
    if (this.props.track.user_id === CUserStore.cUser().id) {
      CUserStore.plays(1);
    }
  },

  handlePause: function () {
    WaveUtil.setPlaying();
    toggle = this.state.playing ?  true : false;
    this.setState({ playing: toggle, controls: <img src={assets.play} onClick={this.handlePlay} /> });
  },

  isPlaying: function () {
    return this.state.wavesurfer === TrackStore.nowPlaying();
  }
});
