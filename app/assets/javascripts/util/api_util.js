ApiUtil = {
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
};
