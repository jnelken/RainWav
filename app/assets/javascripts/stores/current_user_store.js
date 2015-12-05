(function (root) {
  var CHANGE_EVENT = "change";
  var _currentUser = {};
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

    userFollow: function () {
      if (typeof CUserStore.cUser().username !== "undefined") {
        return CUserStore.cUser().followees.filter(function (follow) {
          return follow.following_id === UserStore.show().id;
        })[0];
      }
    },

    isLoggedIn: function () {
      return (typeof _currentUser.id !== "undefined");
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {

        case CurrentUserConstants.RECEIVE_CURRENT_USER:
          _currentUser = payload.currentUser;

          CUserStore.emit(CHANGE_EVENT);
          break;

      }
    }),
  });
})(this);
