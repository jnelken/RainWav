var TrackForm = React.createClass({

  getInitialState: function() {
    return {
      title: "",
      genre: "",
      description: "",
      imageUrl: "",
      imageFile: null,
      trackUrl: "",
      trackFile: null,
    };
  },

  componentDidMount: function () {
    TrackStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ track: TrackStore.show() });
    this.history.pushState(null, "#/tracks/" + this.state.track.id);
  },

  componentWillUnmount: function () {
    TrackStore.removeChangeListener(this._onChange);
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var title = this.state.title;
    var genre = this.state.genre;
    var description = this.state.description;
    var trackFile = this.state.trackFile;
    var imageFile = this.state.imageFile;
    var userId = CurrentUserStore.currentUser().id;

    var formData = new FormData();
    formData.append("track[title]", title);
    formData.append("track[genre]", genre);
    formData.append("track[description]", description);
    formData.append("track[track]", trackFile);
    if (imageFile) { formData.append("track[image]", imageFile); }
    formData.append("track[user_id]", userId);

  TracksUtil.createTrack(formData, this._resetForm);
  },


  _resetForm: function() {
    this.setState({
      title: "",
      trackUrl: "",
      trackFile: null,
      imageUrl: "",
      imageFile: null });
  },

  render: function () {

    return (
      <section className="track-form modal group is-active">
        <article className="m-odal-content">
          <span
            className="modal-close"
            onClick={this.props.closeOut}>&times;
          </span>
            <h2>Upload</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Update image
              <input type="file" onChange={this.changeImageFile} />
            </label>
            <label>Choose file to upload
              <input type="file" onChange={this.changeTrackFile} />
            </label>
            <label>Title*
              <input type="text" onChange={this.changeTitle} />
            </label>
            <label>Genre*
              <select onChange={this.changeGenre} >
                {GenreStore.all().map(function (genre) {
                  return <option>{genre.genre}</option>;
                })}
              </select>
            </label>
            <label>Description
              <input type="textarea" onChange={this.changeDescription} />
            </label>

            <button>Upload</button>
            <button className="cancel" onClick={this.props.closeOut}>Cancel</button>
          </form>
        </article>
        <div className="modal-screen" onClick={this.props.closeOut}></div>
      </section>
    );
  },

  changeTitle: function(e) {
    this.setState({ title: e.currentTarget.value });
  },

  changeGenre: function(e) {
    this.setState({ title: e.currentTarget.value });
  },

  changeDescription: function(e) {
    this.setState({ title: e.currentTarget.value });
  },

  changeTrackFile: function(e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    var that = this;

    reader.onloadend = function() {
      that.setState({ trackUrl: reader.result, trackFile: file });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ trackUrl: "", trackFile: null });
    }
  },

  changeImageFile: function(e) {
  var reader = new FileReader();
  var file = e.currentTarget.files[0];
  var that = this;

  reader.onloadend = function() {
    that.setState({ imageUrl: reader.result, imageFile: file });
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    this.setState({ imageUrl: "", imageFile: null });
  }
},

});
