RepostUtil = {
  createRepost: function (userId, trackId) {
    $.ajax({
      url: 'api/reposts',
      type: 'POST',
      dataType: 'json',
      data: {repost: { user_id: userId, track_id: trackId }},
      success: function (data) {
        RepostActions.receiveRepost(data);
      }
    });
  },

  getReposts: function () {
    $.ajax({
      url: 'api/reposts',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        RepostActions.receiveReposts(data);
      }
    });
  },

  unRepost: function (id) {
    $.ajax({
      url: 'api/reposts/' + id,
      type: 'DELETE',
      dataType: 'json',
      success: function (data) {
        RepostActions.receiveRepost(data);
      }
    });
  }
};
