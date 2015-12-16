var App = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({ currentUser: CUserStore.cUser() });
  },

  componentDidMount: function () {
    CUserStore.addChangeListener(this._setCurrentUser);

    SessionUtil.fetchCurrentUser();
    GenreUtil.fetchGenres();
    TracksUtil.fetchTracks();
  },

  _setCurrentUser: function () {
    this.setState({currentUser: CUserStore.cUser() });
  },

  componentWillUnmount: function () {
    CUserStore.removeChangeListener(this._setCurrentUser);
  },

  render: function () {
    return (
      <div id="app">
        <Nav cUser={this.state.currentUser} />
        <div id="viewport">
          {this.props.children}
        </div>
      </div>
    );
  }
});
