var Login = React.createClass({
  mixins: [ReactRouter.History],

  handleSubmit: function (e) {
      e.preventDefault();

      var credentials = $(e.currentTarget).serializeJSON();
        ApiUtil.login(credentials, function () {
          this.history.pushState(null, "#");
        }.bind(this));
    },

  render: function () {
    return (
      <div className="login group">


        <div className="form-tabs group">
          <a href="#/login">
            <h2>Sign in</h2>
          </a>

          <a href="#/createaccount">
            <h2>Create account</h2>
          </a>
        </div>
        <div className="user-form group">
          <form onSubmit={this.handleSubmit}>

            <label className="email">
              <p>Your email address</p>
            <input className="email-input" type="email" name="user[email]" />
            </label>

            <div className="password-fields">
              <label className="long-password">
                <p>Your password</p>
              <input className="long-password-input" type="password" name="user[password]" />
              </label>
            </div>

            <div className="button">
              <button>Sign In</button>
            </div>

          </form>
        </div>

      </div>
  );
  }

});
