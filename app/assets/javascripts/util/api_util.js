ApiUtil = {
  fetchTracks: function () {
    $.ajax({
      url: 'api/tracks',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveAll(data);
      }
    });
  },
};
