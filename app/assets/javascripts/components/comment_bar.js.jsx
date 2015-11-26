var CommentBar = React.createClass({

  handleRepost: function () {
    RepostUtil.createRepost(CurrentUserStore.currentUser().id, this.props.track.id);
  },

  render: function () {
    return (
        <div className="comment-bar flex-container">
          <div className="playcount">
            <img src={assets.plays} />
            {this.props.plays}
          </div>
          <button className="repost" onClick={this.handleRepost}>
            <img src={assets.repost} />
             Repost
          </button>
        </div>
    );
  }
});
          // <div className="cover" styles={"background-image: url(" + user.cover + ")"}>
          // </div>
