RepostUtil = {
  createRepost: function (userId, trackId) {
    $.ajax({
      url: 'api/reposts',
      type: 'POST',
      dataType: 'json',
      data: {repost: { track_id: trackId, user_id: userId }},
      success: function (data) {
        RepostActions.receiveRepost(data);
      }
    });
  },

  fetchReposts: function () {
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
        RepostActions.removeRepost(data);
      }
    });
  }
};
