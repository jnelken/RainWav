TracksUtil = {
  addPlay: function (track) {
    track.plays += 1;
    debugger
    $.ajax({
      url: 'api/tracks/' + track.id,
      type: 'PATCH',
      dataType: 'json',
      data: { track: track },
      success: function (data) {
        console.log("added play:");
        console.log(track.plays);
        ApiActions.receiveTrack(data);
      },
      error: function (data) {
        console.log("addPlay:");
        console.log(data);
      }
    });
  },

  createTrack: function (newTrack, success) {
    $.ajax({
      url: '/api/tracks',
      type: 'POST',
      dataType: 'json',
      data: newTrack,
      success: function (data) {
        ApiActions.receiveTrack(data);
        success && success();
      },
      error: function (data) {
        console.log("createTrack:");
        console.log(data);
      }
    });
  }
};
