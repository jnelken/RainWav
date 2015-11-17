(function (root) {

  var CHANGE_EVENT = 'change';
  var _tracks = [];

  var resetTracks = function (tracks) {
    _tracks = tracks;
  };

  root.TrackStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _tracks.slice(0);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      if (payload.actionType === TrackConstants.TRACKS_RECEIVED) {
        resetTracks(payload.tracks);
        TrackStore.emit(CHANGE_EVENT);
      }
    })

  });
})(this);
