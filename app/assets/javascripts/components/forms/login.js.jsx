var Login = React.createClass({
  mixins: [ReactRouter.History],

  handleSubmit: function (e) {
      e.preventDefault();

      var credentials = $(e.currentTarget).serializeJSON();
        SessionUtil.login(credentials, function () {
          this.history.pushState(null, "#");
        }.bind(this));
    },

    handleAutofill: function (e) {
      e.preventDefault();

      var credentials = { user: {
          username: "Dew",
          email: "dew@rainwav.com",
          password: "abc123"
        }};
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

        <form className="user-form group" onSubmit={this.handleSubmit}>

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

          <button onClick={this.handleAutofill}>Demo</button>
          <button>Sign In</button>
        </form>
      </div>
    );
  }
});
