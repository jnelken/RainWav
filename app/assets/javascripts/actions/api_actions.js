ApiActions = {
  receiveAllTracks: function (tracks) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.TRACKS_RECEIVED,
      tracks: tracks
    });
  },

  receiveUserTracks: function (userTracks) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.USER_TRACKS_RECEIVED,
      userTracks: userTracks
    });
  },

  receiveTrack: function (track) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.TRACK_RECEIVED,
      track: track
    });
  },

  receiveAllUsers: function (users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  },

  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },

  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: CurrentUserConstants.RECEIVE_CURRENT_USER,
      currentUser: currentUser
    });
  }
};
