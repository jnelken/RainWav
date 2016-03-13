var CreateAcc = React.createClass({
  mixins: [ReactRouter.History],

  handleSubmit: function (e) {
      e.preventDefault();

      var credentials = $(e.currentTarget).serializeJSON();
        UserUtil.createUser(credentials, function () {
          this.history.pushState(null, "#");
        }.bind(this));
    },

  render: function () {
    return (
      <div className="user-form-page group">
        <div className="form-tabs group">

          <a href="#/login">
            <h2>Sign in</h2>
          </a>

          <a className="selected" href="#/createaccount">
            <h2>Create account</h2>
          </a>

        </div>

        <form className="user-form group" onSubmit={this.handleSubmit}>

          <label className="username">
            <p>Choose a username (optional)</p>
            <input type="text" name="user[username]" />
          </label>

          <label className="email">
            <p>What's your email address?</p>
            <input type="email" name="user[email]" />
          </label>

          <div className="password-fields group">
            <label className="choose-password">
              <p>Choose a password</p>
              <input type="password" name="user[password]" />
            </label>

            <label className="retype-password">
            <p>Re-type password</p>
              <input type="password" name="user[retype_password]" />
            </label>
          </div>

          <div className="button">
            <button>Create Account</button>
          </div>
        </form>
      </div>
    );
  }
});
