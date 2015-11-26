var Waveform = React.createClass({
render: function () {

  // var waveform = new Waveform({
  //   container: document.getElementById("wavform"),
  //   data: [1, 0.2, 0.5],
  //   innerColor: "#20C1F3",
  //   // outerColor:
  //   interpolate:
  // });

  return (
    <div className="waveform-container">
      <img className="waveform" src={assets.waveform} />
      <audio id={"audio-" + this.props.track.id } src={this.props.track.audio} type="audio/mp3" />
    </div>
  );
}

});
