RepostUtil = {
  createRepost: function (userId, trackId) {
    $.ajax({
      url: 'api/reposts',
      type: 'POST',
      dataType: 'json',
      data: {repost: { user_id: userId, track_id: trackId }},
      success: function (data) {
        ApiActions.receiveRepost(data);
        console.log("created repost");
      }
    });
  }
};
