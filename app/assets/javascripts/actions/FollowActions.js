FollowActions = {

  receiveFollow: function (follow) {
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOW_RECEIVED,
      follow: follow
    });
  },

  receiveFollows: function (follows) {
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOWS_RECEIVED,
      follows: follows
    });
  },

  removeFollow: function (follow) {
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOW_REMOVED,
      follow: follow
    });
  },
};
