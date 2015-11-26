(function (root) {

  var CHANGE_EVENT = 'change';
  var _follows = [];
  var _follow;

  var setFollow = function (follow) {
    console.log("follow in store");
    _follow = follow;
  };

  var setFollows = function (follows) {
    _follows = follows;
  };

  root.FollowStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _follows.slice(0);
    },

    show: function () {
      // if (typeof _follow !== "undefined") {
        // if (_follow.following_id === UserStore.show().id && _follow.follower_id === CurrentUserStore.currentUser()) {
          return _follow;
        // }
      // }
      // return _follows.filter(function (follow) {
        // return follow.following_id === UserStore.show().id && follow.follower_id === CurrentUserStore.currentUser();
      // })[0];
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case FollowConstants.FOLLOWS_RECEIVED:

          setFollows(payload.follows);
          FollowStore.emit(CHANGE_EVENT);
          break;
        case FollowConstants.FOLLOW_RECEIVED:

          setFollow(payload.follow);
          FollowStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
  FollowStore.setMaxListeners(99);
})(this);
