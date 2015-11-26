GenreUtil = {
  fetchGenres: function () {
    $.ajax({
      url: 'api/genres',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.receiveAllGenres(data);
      }
    });
  },
};
