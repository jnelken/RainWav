TracksUtil = {

  fetchTracks: function () {
    $.ajax({
      url: 'api/tracks',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveAllTracks(data);
      }
    });
  },

  fetchTrack: function (id) {
    $.ajax({
      url: 'api/tracks/' + id,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveTrack(data);
      }
    });
  },

  fetchTrackUrl: function (id, options) {
    $.ajax({
      url: 'api/tracks/' + id,
      type: 'GET',
      dataType: 'json',
      data: options,
      success: function (data) {
        ApiActions.receiveTrack(data);
      }
    });
  },

  fetchUserTracks: function (userId) {
    $.ajax({
      url: 'api/tracks',
      type: 'GET',
      dataType: 'json',
      data: { user_id: userId },
      success: function (data) {
        ApiActions.receiveUserTracks(data);
      }
    });
  },

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
  },

};
