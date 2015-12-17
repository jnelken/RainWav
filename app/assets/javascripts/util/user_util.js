UserUtil = {
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
      },
      error: function (data) {
        alert(data);
      }
    });
  },
};
