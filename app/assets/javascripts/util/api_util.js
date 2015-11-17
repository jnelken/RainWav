ApiUtil = {
  fetchTracks: function () {
        debugger
    $.ajax({
      url: 'api/tracks',
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveAll(data);
      }
    });
  }
};
