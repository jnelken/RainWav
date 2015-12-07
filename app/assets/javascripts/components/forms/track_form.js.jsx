var TrackForm = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return {
      title: "",
      genre_id: "",
      description: "",
      imageUrl: "",
      imageFile: null,
      trackUrl: "",
      trackFile: null,
      newTrack: ""
    };
  },

  componentDidMount: function() {
    TrackStore.addChangeListener(this._onChange);
    GenreUtil.fetchGenres();
  },

  _onChange: function() {
    this.setState({track: TrackStore.show()});
    this.history.pushState(null, "#/tracks/" + this.state.track.id);
  },

  componentWillUnmount: function() {
    TrackStore.removeChangeListener(this._onChange);
  },

  handleSubmit: function(e) {
    e.preventDefault();

    this.setState({newTrack: "uploaded"});

    var title = this.state.title;
    var genre_id = this.state.genre_id;
    var description = this.state.description;
    var trackFile = this.state.trackFile;
    var imageFile = this.state.imageFile;
    var userId = CUserStore.cUser().id;

    var newTrackData = new FormData();
    newTrackData.append("track[title]", title);
    newTrackData.append("track[genre_id]", genre_id);
    newTrackData.append("track[description]", description);
    newTrackData.append("track[audio]", trackFile);
    if (imageFile) {
      newTrackData.append("track[image]", imageFile);
    }
    newTrackData.append("track[user_id]", userId);

    TracksUtil.createTrack(newTrackData, this._resetForm);
  },

  _resetForm: function() {
    this.setState({
      title: "",
      trackUrl: "",
      trackFile: null,
      imageUrl: "",
      imageFile: null,
      newTrack: ""
    });
    this.props.closeOut();
    forceUpdate();
  },

  render: function() {
    return (
      <section className="track-form modal group is-active">
        <article className="m-odal-content">
          <img className={"spinner-track-form" + this.state.newTrack} src={assets.spinner}/>
          <h2>Upload</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Update image
              <input type="file" onChange={this.changeImageFile}/>
            </label>
            <label>Choose file to upload
              <input type="file" onChange={this.changeTrackFile}/>
            </label>
            <label>Title*
              <input type="text" onChange={this.changeTitle}/>
            </label>
            <label>Genre*
              <select onChange={this.changeGenre}>
                <option>Select a genre:</option>
                {GenreStore.all().map(function(genre) {
                  return <option key={genre.id} value={genre.id}>{genre.genre}</option>;
                })}
              </select>
            </label>
            <label>Description
              <input type="textarea" onChange={this.changeDescription}/>
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
    this.setState({title: e.currentTarget.value});
  },

  changeGenre: function(e) {
    this.setState({genre_id: e.currentTarget.value});
  },

  changeDescription: function(e) {
    this.setState({description: e.currentTarget.value});
  },

  changeTrackFile: function(e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    var that = this;

    reader.onloadend = function() {
      that.setState({trackUrl: reader.result, trackFile: file});
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({trackUrl: "", trackFile: null});
    }
  },

  changeImageFile: function(e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    var that = this;

    reader.onloadend = function() {
      that.setState({imageUrl: reader.result, imageFile: file});
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({imageUrl: "", imageFile: null});
    }
  }
});
