var WaveSurferItem = React.createClass({

  componentDidMount: function () {
    this.props.wavesurfer.init({
        container: document.querySelector('#wave-' + this.props.track.id),
        waveColor: '#aaa',
        progressColor: '#20C1F3',
        height: 65,
        cursorColor: '#18a0cb',
        cursorWidth: 1,
        pixelRatio: 1,
        fillParent: true

    });
    this.props.wavesurfer.load(this.props.track.audio);
  },

  render: function () {
    return (
      <div className="wavesurfer" id={'wave-' + this.props.track.id}></div>
    );
  }
});
