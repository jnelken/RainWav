WaveActions = {
  receivePlaying: function (wave) {
    AppDispatcher.dispatch({
      actionType: "playing",
      wave: wave
    });
  }
};
