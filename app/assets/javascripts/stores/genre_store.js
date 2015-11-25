(function (root) {

  var CHANGE_EVENT = 'change';
  var _genres = [];
  var _genre;

  var resetGenres = function (genres) {
    _genres = genres;
  };

  var setGenre = function (genre) {
    _genre = genre;
  };

  root.GenreStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _genres.slice(0);
    },

    show: function () {
      return _genre;
    },

    getGenre: function (genreId) {
      return _genres.filter(function (genre) {
        return genre.id === genreId;
      })[0];
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case GenreConstants.GENRES_RECEIVED:

          resetGenres(payload.genres);
          GenreStore.emit(CHANGE_EVENT);
          break;
        case GenreConstants.GENRE_RECEIVED:

          setGenre(payload.genre);
          GenreStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });
})(this);
