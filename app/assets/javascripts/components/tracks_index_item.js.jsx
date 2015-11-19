var TracksIndexItem = React.createClass({
  // mixins: [ReactRouter.History],

showDetail: function () {
  // this.history.pushState(null, "/users/" + this.props.track.user_id);
},

  render: function () {
    var track = this.props.track;
    return (
      <li className="tracks-index-item">
        <h2>{track.title}</h2>
          <button className="genre">#{track.genre}</button>
          <div>
            <audio controls="controls">
              Your browser does not support the <code>audio</code> element.
              <source src={track.audio_url} type="audio/mp3" />
            </audio>
          </div>
        <ReactRouter.Link to={"/users/" + track.user_id }>^ Go to track</ReactRouter.Link>
      </li>
    );
  }
});
          // <TracksDetail track={track} />
