(function (root) {

  var CHANGE_EVENT = 'change';
  var _tracks = [];
  var _track;
  var users = {};

  var resetTracks = function (tracks) {
    users = {};
    tracks.forEach(function (track) {
      users[track.user_id] = true;
    });
    _tracks = tracks;
  };

  var addUserTracks = function (userTracks) {
    _tracks.concat(userTracks);
  };

  var setTrack = function (track) {
    _track = track;
  };

  root.TrackStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _tracks.slice(0);
    },

    feed: function () {
      if (_tracks.length > 0 && typeof CUserStore.cUser().followees !== "undefined") {
        return _tracks.filter(function (track) {
          followings = CUserStore.cUser().followees.map(function (follow) {
            return follow.following_id;
          });
          return followings.indexOf(track.user_id) != -1;
        }).sort(function (a, b) {
          return a.updated_at < b.updated_at;
        });
      }
    },

    show: function () {
      return _track;
    },

    userTracks: function (userId) {
      return _tracks.filter(function (track) {
        return track.user_id === userId;
      });
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
            addUserTracks(payload.userTracks);
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
