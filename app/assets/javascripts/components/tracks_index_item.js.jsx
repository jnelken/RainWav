var TracksIndexItem = React.createClass({

  getInitialState: function () {
    return ({
      genre: GenreStore.getGenre(this.props.track.genre_id),
      artist: UserStore.getUser(this.props.track.user_id)
    });
  },

  componentDidMount: function () {
    UserStore.addChangeListener(this._onUserChange);
    GenreStore.addChangeListener(this._onGenreChange);
  },

  _onUserChange: function () {
    this.setState({ artist: UserStore.getUser(this.props.track.user_id) });
  },

  _onGenreChange: function () {
    this.setState({ genre: GenreStore.getGenre(this.props.track.genre_id) });
  },

// ADD ARTIST NAME ABOVE TRACK

handlePlay: function () {
  debugger
  // TRACKSUTIL IS NOT DEFINED
  TracksUtil.addPlay(this.props.track);
},

  render: function () {
    var track = this.props.track;

    if (!this.state.artist || !this.state.genre) {
      return <img className="spinner" src={assets.spinner} />;
    }

    return (
      <li className="tracks-index-item group">
        <ReactRouter.Link className="artist" to={"/tracks/" + track.id }>
          <img src={track.image} />
        </ReactRouter.Link>

        <div className="track-profile">
          <div className="play-button">

            <img src={assets.play} onClick={this.handlePlay} />
          </div>
          <h3 className="artist">
            <ReactRouter.Link className="artist" to={this.state.artist.username}>
              {this.state.artist.username}
            </ReactRouter.Link>
          </h3>
          <h3 className="title">
            <ReactRouter.Link to={"/tracks/" + track.id } className="artist">
              {track.title}
            </ReactRouter.Link>
          </h3>
          <button className="genre">#{this.state.genre.genre}</button>
          <div>
            <audio controls="controls">
              Your browser does not support the <code>audio</code> element.
              <source src={track.audio} type="audio/mp3" />
            </audio>
          </div>


        </div>
      </li>
    );
  }
});
          // <TracksDetail track={track} />
