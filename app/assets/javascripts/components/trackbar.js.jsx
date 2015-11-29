var Trackbar = React.createClass({

  getInitialState: function () {
    return ({
      reposted: "false"
    });
  },

  componentDidMount: function () {
    RepostStore.addChangeListener(this._getRepost);
  },

  _getRepost: function () {
    // debugger
    this.setState({reposted: RepostStore.show(this.props.track.id)});
  },

  componentWillUnmount: function () {
    RepostStore.removeChangeListener(this._getRepost);
  },

  render: function () {
    // var repost = this.state.repost;
    // var reposted = repost.status ? "Repost" : repost.status;

          // <button className="repost" onClick={this.handleRepost}>
          //   <img src={assets.repost} />
          //    {this.state.repoststatus}
          // </button>
          // <button className="repost" onClick={this.handleTrash}>
          //   <img src={assets.trash} />
          //   {this.success}
          // </button>
    return (
        <div className="comment-bar flex-container">
          <div className="playcount">
            <img src={assets.plays} />
            {this.props.plays}
          </div>
        </div>
    );
  },

  handleRepost: function () {
    if (this.state.reposted === "Repost") {
      RepostUtil.createRepost(CurrentUserStore.currentUser().id, this.props.track.id);
    } else {
      RepostUtil.unRepost(this.state.repost.id);
    }
  },

  handleTrash: function () {
    TracksUtil.deleteTrack(this.props.track.id, this.success);
  },

  success: function () {
    return <p class="stats">Track deleted!</p>;
  }
});
