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
      },
      error: function (data) {
        alert("Couldn't add play : (");
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
        alert("Upload failed :()");
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
      },
      error: function (data) {
        alert("Sorry! We can't delete your track right now :(");
      }
    });
  }

};
