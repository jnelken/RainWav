var CommentBar = React.createClass({

  getInitialState: function () {
    return ({
      repost: { status:"Repost" }
    });
  },

  componentDidMount: function () {
    RepostStore.addChangeListener(this._getRepost);
  },

  _getRepost: function () {
    // debugger
    this.setState({repost: RepostStore.show(this.props.track.id)});
  },

  componentWillUnmount: function () {
    RepostStore.removeChangeListener(this._getRepost);
  },

  handleRepost: function () {
    if (this.state.repost.status === "Repost") {
      RepostUtil.createRepost(CurrentUserStore.currentUser().id, this.props.track.id);
    } else {
      RepostUtil.unRepost(this.state.repost.id);
    }
  },

  render: function () {
    // var repost = this.state.repost;
    // var repostStatus = repost.status ? "Repost" : repost.status;

    return (
        <div className="comment-bar flex-container">
          <div className="playcount">
            <img src={assets.plays} />
            {this.props.plays}
          </div>
          <button className="repost" onClick={this.handleRepost}>
            <img src={assets.repost} />
             {this.state.repost.status}
          </button>
        </div>
    );
  }
});
