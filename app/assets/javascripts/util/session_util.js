SessionUtil = {

  login: function (credentials, success) {
    $.ajax({
      url: '/api/session',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (data) {
        ApiActions.receiveCurrentUser(data);
        FollowUtil.fetchFollows();
        success && success();
      },
      error: function (data) {
        console.log(data);
      }

    });
  },

  logout: function () {
    $.ajax({
      url: '/api/session' + "/0",
      type: 'DELETE',
      dataType: 'json',
      success: function () {
        ApiActions.receiveCurrentUser({});
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: '/api/session',
      type: 'GET',
      dataType: 'json',
      success: function (currentUser) {
        ApiActions.receiveCurrentUser(currentUser);
        FollowUtil.fetchFollows();
      }
    });
  }









};
