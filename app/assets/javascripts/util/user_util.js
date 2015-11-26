UserUtil = {
  // fetchTracks: function () {
  //   $.ajax({
  //     url: 'api/tracks',
  //     type: 'GET',
  //     dataType: 'json',
  //     success: function (data) {
  //       ApiActions.receiveAllTracks(data);
  //     }
  //   });
  // },
  //
  // fetchTrack: function (id) {
  //   $.ajax({
  //     url: 'api/tracks/' + id,
  //     type: 'GET',
  //     dataType: 'json',
  //     success: function (data) {
  //       ApiActions.receiveTrack(data);
  //     }
  //   });
  // },
  //
  // fetchTrackUrl: function (id, options) {
  //   $.ajax({
  //     url: 'api/tracks/' + id,
  //     type: 'GET',
  //     dataType: 'json',
  //     data: options,
  //     success: function (data) {
  //       ApiActions.receiveTrack(data);
  //     }
  //   });
  // },
  //
  // fetchUserTracks: function (userId) {
  //   $.ajax({
  //     url: 'api/tracks',
  //     type: 'GET',
  //     dataType: 'json',
  //     data: { user_id: userId },
  //     success: function (data) {
  //       ApiActions.receiveUserTracks(data);
  //     }
  //   });
  // },

  fetchUsers: function () {
    $.ajax({
      url: 'api/users',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveAllUsers(data);
      }
    });
  },

  fetchUser: function (userParams) {
    $.ajax({
      url: 'api/users/' + userParams,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveUser(data);
      }
    });
  },

  // credentials/ user forms

  createUser: function (credentials, success) {
    $.ajax({
      url: '/api/users',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (data) {
        ApiActions.receiveCurrentUser(data);
        success && success();
      },
      error: function (data) {
        console.log(data);
      }
    });
  },

  // login: function (credentials, success) {
  //   $.ajax({
  //     url: '/api/session',
  //     type: 'POST',
  //     dataType: 'json',
  //     data: credentials,
  //     success: function (data) {
  //       ApiActions.receiveCurrentUser(data);
  //       success && success();
  //     },
  //     error: function (data) {
  //       console.log(data);
  //     }
  //
  //   });
  // },
  //
  // logout: function () {
  //   $.ajax({
  //     url: '/api/session' + "/0",
  //     type: 'DELETE',
  //     dataType: 'json',
  //     success: function () {
  //       ApiActions.receiveCurrentUser({});
  //     }
  //   });
  // },
  //
  // fetchCurrentUser: function () {
  //   $.ajax({
  //     url: '/api/session',
  //     type: 'GET',
  //     dataType: 'json',
  //     success: function (currentUser) {
  //       ApiActions.receiveCurrentUser(currentUser);
  //     }
  //   });
  // }
};
