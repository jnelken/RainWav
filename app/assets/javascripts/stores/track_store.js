(function (root) {

  var CHANGE_EVENT = 'change';
  var _tracks = [];
  var _track;
  // = { track:
  //                 title: '',
  //                 audio_url: '',
  //                 description
  //               }

  var resetTracks = function (tracks) {
    _tracks = tracks;
  };

  var setTrack = function (track) {
    _track = track;
  };

  root.TrackStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _tracks.slice(0);
    },

    show: function () {
      return _track;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
          case TrackConstants.TRACKS_RECEIVED:
            resetTracks(payload.tracks);
            TrackStore.emit(CHANGE_EVENT);
            break;
          case TrackConstants.TRACK_RECEIVED:
            setTrack(payload.track);
            TrackStore.emit(CHANGE_EVENT);
            break;
      }
    })

  });
})(this);
