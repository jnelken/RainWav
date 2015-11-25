var TracksIndexItem = React.createClass({
  // mixins: [ReactRouter.History],

showDetail: function () {
  // this.history.pushState(null, "/users/" + this.props.track.user_id);
},

// ADD ARTIST NAME ABOVE TRACK

handlePlay: function () {
  ApiUtil.addPlay(this.props.track);
},

  render: function () {
    var track = this.props.track;
    return (
      <li className="tracks-index-item group">
        <ReactRouter.Link className="artist" to={"/tracks/" + track.id }>
          <img src={track.image} />
        </ReactRouter.Link>

        <div className="track-profile">
          <div className="play-button">

            <img src={assets.play} />
          </div>
          <h3 className="artist">
            <ReactRouter.Link className="artist" to={"/users/" + track.user_id }>
              [ArtistNameHere]
            </ReactRouter.Link>
          </h3>
          <h3 className="title">
            <ReactRouter.Link className="artist" to={"/tracks/" + track.id }>
              {track.title}
            </ReactRouter.Link>
          </h3>
          <button className="genre">#{track.genre_id}</button>
          <div onClick={this.handlePlay}>
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
