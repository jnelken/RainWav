(function (root) {

  var CHANGE_EVENT = 'change';
  var _repost;
  var _reposts = [];

  var setReposts = function (reposts) {
    _reposts = CUserStore.cUser().reposts;
  };

  root.RepostStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _reposts.slice(0);
    },

    show: function (trackId) {
      if (typeof _reposts !== "undefined") {
        return _reposts.filter(function (rpst) {
          return rpst.user_id === CUserStore.cUser().id && rpst.track_id === trackId;
        })[0];
      }
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

          _reposts.push(payload.repost);
          RepostStore.emit(CHANGE_EVENT);
          break;
        case RepostConstants.REPOST_REMOVED:

          var i = _reposts.map(function(repost) { return repost.id; }).indexOf(payload.repost.id);
          _reposts.splice(i,1);
          RepostStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
  RepostStore.setMaxListeners(99);
})(this);
