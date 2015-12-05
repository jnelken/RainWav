(function (root) {

  var CHANGE_EVENT = 'change';
  var _tracks = [];
  var _userTracks = [];
  var _track;

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

    feed: function () {
      if (_tracks.length > 0) {
        return _tracks.filter(function (track) {
          followings = CUserStore.cUser().followees.map(function (follow) {
            return follow.following_id;
          });
          return followings.indexOf(track.user_id) != -1;
        });
      }
    },

    show: function () {
      return _track;
    },

    userTracks: function () {
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
