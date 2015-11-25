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
        console.log("error");
        console.log(data);
      }
    });
  }
};
