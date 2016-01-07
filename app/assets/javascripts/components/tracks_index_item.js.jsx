var TracksIndexItem = React.createClass({

  getInitialState: function () {
    return ({
      wavesurfer: Object.create(WaveSurfer),
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
    var track = this.props.track;
    var user = this.state.user;
    var genre = this.state.genre.genre;

    if (!user || !genre) {
      return <img className="spinner" src={assets.spinner} />;
    }

    return (
      <li className="tracks-index-item group">

        <ReactRouter.Link to={"/users/" + user.id } className="artist">
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
          <WaveSurferItem track={track} wavesurfer={this.state.wavesurfer}/>
          <Trackbar plays={this.state.plays} track={track} />
        </div>
      </li>
    );
  },

  handlePlay: function () {
    this.state.wavesurfer.play();

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
    this.state.wavesurfer.pause();

    toggle = this.state.playing ? true : false;
    this.setState({ playing: toggle, controls: <img src={assets.play} onClick={this.handlePlay} /> });
  }
});
