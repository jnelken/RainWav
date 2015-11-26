(function (root) {

  var CHANGE_EVENT = 'change';
  var _repost;
  var _reposts = [];

  var setRepost = function (repost) {
    _repost = repost;
  };

  var setReposts = function (reposts) {
    _reposts = reposts;
  };

  root.RepostStore = $.extend({}, EventEmitter.prototype, {

    // all: function () {
    //   return _reposts.slice(0);
    // },

    show: function (track_id) {
      return _reposts.filter(function (repost) {
        return repost.track.id === track_id;
      })[0];
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case RepostConstants.REPOSTS_RECEIVED:

          setReposts(payload.reposts);
          RepostStore.emit(CHANGE_EVENT);
          break;
        case RepostConstants.REPOST_RECEIVED:

          setRepost(payload.repost);
          RepostStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
  RepostStore.setMaxListeners(99);
})(this);
