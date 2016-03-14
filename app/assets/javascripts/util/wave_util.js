WaveUtil = {
  setPlaying: function (wave) {
    WaveActions.receivePlaying(wave);
  },
  continuePlaying: function (wave) {
    WaveActions.receiveContPlaying(wave);
  }
};
