var TracksIndexItem = React.createClass({

  render: function () {
    track = this.props.track;
    return (
        <li className="tracks-index-item">
          <p>Title: {track.title}</p>
          <p>Genre: {track.genre}</p>
          <p>{track.audio_url}</p>
          <TracksDetail track={track} />
        </li>
    );
  }
});
          // <button>Play<Link to={"/users/${track.title}"}>{user.name}</Link></button>
