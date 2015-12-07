var TracksIndexItem = React.createClass({

  getInitialState: function () {
    return ({
      genre: GenreStore.getGenre(this.props.track.genre_id),
      user: UserStore.getUser(this.props.track.user_id),
      plays: parseInt(this.props.track.plays),
      controls: <img src={assets.play} onClick={this.handlePlay} />
    });
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._setUser);
  },

  _setUser:function () {
    this.setState({ user: UserStore.getUser(this.props.track.user_id) });
  },

  componentWillUnmount: function () {
    UserStore.removeChangeListener(this._setUser);
  },

  render: function () {
    if (!this.state.user || !this.state.genre) {
      return <img className="spinner" src={assets.spinner} />;
    } else {
    var track = this.props.track;
    var user = this.state.user;
    var genre = this.state.genre.genre;

    return (
      <li className="tracks-index-item group">
        <ReactRouter.Link className="artist" to={"/users/" + user.id }>
          <img src={track.image} />
        </ReactRouter.Link>

        <div className="track-profile">
          <div className="controls">
            {this.state.controls}
          </div>
          <h3 className="artist">
            <ReactRouter.Link to={user.username}>
              {user.username.capitalize()}
            </ReactRouter.Link>
          </h3>
          <h3 className="title">
            <ReactRouter.Link to={"/users/" + user.id } className="artist">
              {track.title}
            </ReactRouter.Link>
          </h3>
          <button className="genre">#{this.state.genre.genre}</button>

          <Waveform track={track}/>
          <Trackbar plays={this.state.plays} track={track} />
        </div>
      </li>
    );

  }
  },

  handlePlay: function () {
    var trackId = "audio-" + this.props.track.id;
    document.getElementById(trackId).play();

    if (this.state.playing === undefined) {
      this.setState({ plays: this.props.track.plays + 1 });
      TracksUtil.addPlay(this.props.track, this._success);
    }
    this.setState({
      playing: this.state.playing ? true : false,
      controls: <img className="pause" src={assets.pause} onClick={this.handlePause} />
    });
  },

  _success: function () {
    if (this.props.track.user_id === CUserStore.cUser().id) {
      //updates Sidebar play count for cUser
      CUserStore.plays(1);
    }
  },

  handlePause: function () {
    var trackId = "audio-" + this.props.track.id;
    document.getElementById(trackId).pause();

    toggle = this.state.playing ? true : false;
    this.setState({ playing: toggle });
    this.setState({ controls: <img src={assets.play} onClick={this.handlePlay} /> });
  },

});
