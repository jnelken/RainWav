UserUtil = {
  fetchUsers: function () {
    $.ajax({
      url: 'api/users',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        var userTracks = [];
        data.forEach(function (user) {
          userTracks.concat(user.tracks);
        });

        ApiActions.receiveAllUsers(data);
        ApiActions.receiveUserTracks(userTracks);
      }
    });
  },

  fetchUser: function (userParams, success) {
    $.ajax({
      url: 'api/users/' + userParams,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveUser(data);
        success && success(data.id);
      }
    });
  },

  createUser: function (credentials, success) {
    $.ajax({
      url: '/api/users',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (data) {
        ApiActions.receiveCurrentUser(data);
        success && success();
      }
    });
  },
};
