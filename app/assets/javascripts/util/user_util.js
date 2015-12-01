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
};
