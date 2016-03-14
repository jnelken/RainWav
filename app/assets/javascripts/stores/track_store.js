(function (root) {

  var CHANGE_EVENT = 'change';
  var _tracks = [];
  var _track;
  var users = {};
  var _nowPlaying;

  var resetTracks = function (tracks) {
    users = {};
    tracks.forEach(function (track) {
      users[track.user_id] = true;
    });
    _tracks = tracks;
  };

  var addUserTracks = function (userTracks) {
    userTracks.forEach(function (track) {
      if ( _tracks.indexOf(track) === -1) {
        _tracks.push(track);
      }
    });
  };

  var setTrack = function (track) {
    _track = track;
    resetTracks(
      _tracks.filter(function (t) {
        return t.id != track.id;
      })
    );
    _tracks.push(track);
  };

  var removeTrack = function (track) {
    _tracks = _tracks.filter(function (t) {
      return t.id !== track.id;
    });
  };

  var setPlaying = function (wave) {
    _nowPlaying && _nowPlaying.pause();
    _nowPlaying = wave;
  };

  root.TrackStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _tracks.slice(0);
    },

    feed: function () {
      if (_tracks.length > 0 && typeof CUserStore.cUser().followees !== "undefined") {

        var followedUsersIds = CUserStore.cUser().followees.map(function (follow) {
          return follow.following_id;
        });

        return _tracks.filter(function (track) {
          // show if the user is following the artist
          return followedUsersIds.indexOf(track.user_id) != -1;
        }).sort(function (a, b) {return a.created_at < b.created_at;});
      }
    },

    userTracks: function (userId) {
      if (!userId) return [];
      return _tracks.filter(function (track) {
        return track.user_id === parseInt(userId);
      }).sort(function (a, b) {return a.created_at < b.created_at;});
    },

    show: function () {
      return _track;
    },

    nowPlaying: function () {
      return _nowPlaying;
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
          break;

        case TrackConstants.USER_TRACKS_RECEIVED:
          addUserTracks(payload.userTracks);
          break;

        case TrackConstants.TRACK_RECEIVED:
          setTrack(payload.track);
          break;

        case TrackConstants.TRACK_REMOVED:
          removeTrack(payload.track);
          break;

        case "playing":
          setPlaying(payload.wave);
          break;
      }
      TrackStore.emit(CHANGE_EVENT);
    })

  });

})(this);
