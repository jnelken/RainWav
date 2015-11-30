RepostActions = {
  receiveRepost: function (repost) {
    AppDispatcher.dispatch({
      actionType: RepostConstants.REPOST_RECEIVED,
      repost: repost
    });
  },

  receiveReposts: function (reposts) {
    AppDispatcher.dispatch({
      actionType: RepostConstants.REPOSTS_RECEIVED,
      reposts: reposts
    });
  },

  removeRepost: function (repost) {
    AppDispatcher.dispatch({
      actionType: RepostConstants.REPOST_REMOVED,
      repost: repost
    });
  }
};
