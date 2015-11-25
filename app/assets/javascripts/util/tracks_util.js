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

  createTrack: function (trackData, success) {
    debugger
    $.ajax({
      url: '/api/tracks',
      type: 'POST',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: trackData,
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
