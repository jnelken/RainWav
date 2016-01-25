var Trackbar = React.createClass({

  getInitialState: function () {
    return ({ repost: RepostStore.show(this.props.track.id) });
  },

  componentDidMount: function () {
    RepostStore.addChangeListener(this._setRepost);
  },

  componentWillUnmount: function () {
    RepostStore.removeChangeListener(this._setRepost);
  },

  _setRepost: function () {
    this.setState({repost: RepostStore.show(this.props.track.id)});
  },

  render: function () {
    var cUser = CUserStore.cUser();
    var repostButton = "";
    var trashButton = "hide";
    
    if (this.props.track.user_id === cUser.id) {
      repostButton = "hide";
      trashButton = "";
    }

    return (
        <div className="comment-bar flex-container">

          <button className={"trackbar-button " + trashButton} onClick={this.handleTrash}>
            <img src={assets.trash} />
            {this.success}
          </button>

          <button className={"trackbar-button " + repostButton} onClick={this.handleRepost}>
            <img src={assets.repost} />
            {!!this.state.repost ? "Reposted" : "Repost"}
          </button>

          <div className="playcount">
            <img src={assets.plays} />
            {this.props.plays}
          </div>

        </div>
    );
  },

  handleRepost: function () {
    if (this.state.repost) {
      RepostUtil.unRepost(this.state.repost.id);
    } else {
      RepostUtil.createRepost(CUserStore.cUser().id, this.props.track.id);
    }
  },

  handleTrash: function () {
    var confirmed = confirm("Are you sure you want to delete " + this.props.track.title + "?");
    if (confirmed) {
      TracksUtil.deleteTrack(this.props.track.id);
    }
  },

});
