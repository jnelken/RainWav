TracksUtil = {
  addPlay: function (track) {
    // track.plays += 1; // already adds play in component prop, just needs to save
    $.ajax({
      url: 'api/tracks/' + track.id,
      type: 'PATCH',
      dataType: 'json',
      data: { track: { plays: track.plays }},
      success: function (data) {
        console.log("added play:");
        console.log(track.plays);
        ApiActions.receiveTrack(data);
      },
      error: function (data) {
        console.log("addPlay error:");
        console.log(data);
      }
    });
  },

  createTrack: function (trackData, success) {
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
