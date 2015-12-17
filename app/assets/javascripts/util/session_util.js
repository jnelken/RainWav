SessionUtil = {

  login: function (credentials, success) {
    $.ajax({
      url: '/api/session',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (data) {
        ApiActions.receiveCurrentUser(data);
        success && success();
      },
      error: function (data) {
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
      }
    });
  },

  updateCUser: function (userData) {
    $.ajax({
      url: '/api/users/' + CUserStore.cUser().id,
      type: 'PATCH',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: userData,
      success: function (data) {
        ApiActions.receiveUser(data);
        ApiActions.receiveCurrentUser(data);
      }
    });
  }
};
