FollowUtil = {
  addFollow: function (follower_id, following_id) {
    $.ajax({
      url: 'api/follows',
      type: 'POST',
      dataType: 'json',
      data: { follow: {
        follower_id: follower_id,
        following_id: following_id
      }},
      success: function (data) {
        SessionUtil.fetchCurrentUser();
        FollowActions.receiveFollow(data);
      }
    });
  },

  removeFollow: function (follow_id) {
    $.ajax({
      url: 'api/follows/' + follow_id,
      type: 'DELETE',
      dataType: 'json',
      success: function (data) {
        SessionUtil.fetchCurrentUser();
        FollowActions.removeFollow(data);
      }
    });
  },

  // fetchFollows: function () {
  //   $.ajax({
  //     url: 'api/follows',
  //     type: 'GET',
  //     dataType: 'json',
  //     success: function (data) {
  //       FollowActions.receiveFollows(data);
  //     }
  //   });
  // },
};
