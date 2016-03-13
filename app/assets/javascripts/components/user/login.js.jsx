var Login = React.createClass({
  mixins: [ReactRouter.History],

  handleLogin: function (e) {
    e.preventDefault();

    var credentials = $(e.currentTarget).serializeJSON();
    this.sendCredentials(credentials);
  },

  handleDemo: function (e) {
    e.preventDefault();
    var credentials = { user: {
        username: "Dew",
        email: "dew@rainwav.com",
        password: "abc123"
      }};
    this.sendCredentials(credentials);
  },

  sendCredentials: function (credentials) {
    SessionUtil.login(credentials, function () {
      this.history.pushState(null, "#");
    }.bind(this));
  },

  render: function () {
    return (
      <div className="user-form-page group">

        <div className="form-tabs group">
          <a className="selected" href="#/login">
            <h2>Sign in</h2>
          </a>

          <a href="#/createaccount">
            <h2>Create account</h2>
          </a>
        </div>

        <form className="user-form group" onSubmit={this.handleLogin}>

          <label className="email">
            <p>Your email address</p>
            <input type="email" name="user[email]" />
          </label>

          <div className="password-fields">
            <label className="long-password">
              <p>Your password</p>
              <input type="password" name="user[password]" />
            </label>
          </div>

          <button onClick={this.handleDemo}>Demo</button>
          <button>Sign In</button>
        </form>
      </div>
    );
  }
});
