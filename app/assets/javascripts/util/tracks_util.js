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

  addPlay: function (track, success) {
    track.plays += 1;
    $.ajax({
      url: 'api/tracks/' + track.id,
      type: 'PATCH',
      dataType: 'json',
      data: { track: { plays: track.plays }},
      success: function (data) {
        success && success();
        ApiActions.receiveTrack(data);
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
        alert("Upload failed :( Please try filling out all the required inputs and try again.");
      }
    });
  },

  deleteTrack: function (trackId, success) {
    $.ajax({
      url: '/api/tracks/' + trackId,
      type: 'DELETE',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveTrack(data);
        success && success();
      }
    });
  }

};
