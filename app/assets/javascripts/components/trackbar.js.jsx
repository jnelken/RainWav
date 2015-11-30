var Trackbar = React.createClass({

  getInitialState: function () {
    return ({ repost: RepostStore.show(this.props.track.id) });
  },

  componentDidMount: function () {
    RepostStore.addChangeListener(this._setRepost);
  },

  _setRepost: function () {
    this.setState({repost: RepostStore.show(this.props.track.id)});
  },

  componentWillUnmount: function () {
    RepostStore.removeChangeListener(this._setRepost);
  },

  render: function () {
    var hideMe = "";
    var reposted = !!this.state.repost;
    var status = reposted ? "Reposted" : "Repost";

    if (this.props.track.user.id === CurrentUserStore.currentUser().id) {
      hideMe = "hide";
    }


          // <button className="trackbar-button" onClick={this.handleTrash}>
          //   <img src={assets.trash} />
          //   {this.success}
          // </button>

    return (
        <div className="comment-bar flex-container">

          <button className={"trackbar-button " + hideMe} onClick={this.handleRepost}>
            <img src={assets.repost} />
            {status}
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
      RepostUtil.createRepost(CurrentUserStore.currentUser().id, this.props.track.id);
    }
  },

  // handleTrash: function () {
  //   TracksUtil.deleteTrack(this.props.track.id, this.success);
  // },

  success: function () {
    return <p class="stats">Track deleted!</p>;
  }
});
