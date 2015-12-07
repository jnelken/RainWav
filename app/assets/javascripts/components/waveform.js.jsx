var Waveform = React.createClass({
render: function () {

  return (
    <div className="waveform-container">
      <img className="waveform" src={assets.waveform} />
      <audio id={"audio-" + this.props.track.id } src={this.props.track.audio} type="audio/mp3" />
    </div>
  );
}

});
