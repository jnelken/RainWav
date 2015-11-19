(function (root) {

  var CHANGE_EVENT = 'change';
  var _tracks = [];
  var _track;
  var _userTracks = [];
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

  var setUserTracks = function (userTracks) {
      _userTracks = userTracks;
  };

  root.TrackStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _tracks.slice(0);
    },

    show: function () {
      return _track;
    },

    // return all tracks matching user id, username
    userTracks: function (id, username) {
      // _userTracks = _tracks.map(function (track) {
      //   if (track.username === username) {
      //     return track;
      //   } else if (track.user_id === id) {
      //     return track;
      //   }
      // });
      // debugger
      return _userTracks;
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
          case TrackConstants.USER_TRACKS_RECEIVED:
            setUserTracks(payload.userTracks);
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
