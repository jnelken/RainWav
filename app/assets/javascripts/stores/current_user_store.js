(function (root) {
  var CHANGE_EVENT = "change";
  var _currentUser = {};
  var _plays = 0;

  root.CUserStore = $.extend({}, EventEmitter.prototype, {

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    cUser: function () {
      return $.extend({}, _currentUser);
    },

    plays: function (num) {
      if (num > 0) {
        _plays += num;
        CUserStore.emit(CHANGE_EVENT);
      }

      return _plays;
    },

    isLoggedIn: function () {
      return (typeof _currentUser.id !== "undefined");
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {

        case CurrentUserConstants.RECEIVE_CURRENT_USER:
          _currentUser = payload.currentUser;
          _plays = _currentUser.plays;
          FollowStore.setFollows();

          CUserStore.emit(CHANGE_EVENT);
          break;

      }
    }),
  });
})(this);
