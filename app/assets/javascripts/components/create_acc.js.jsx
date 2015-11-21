var CreateAcc = React.createClass({
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
      <div className="login">
        <div className="user-form">
              <form onSubmit={this.handleSubmit}>
                <label className="username">
                  <p>Choose a username (optional)</p>
                  <input type="text" name="user[username]" />
                </label>
                <div className="email">
                  <label>
                    <p>What's your email address?</p>
                    <input type="email" name="user[email]" />
                  </label>
                </div>

                <div className="password-fields">
                  <label className="choose-password">
                    <p>Choose a password</p>
                    <input type="password" name="user[password]" />
                  </label>
                </div>

                <div className="password-fields">
                  <label className="retype-password">
                  <p>Re-type password</p>
                    <input type="password" name="user[retype_password]" />
                  </label>
                </div>

                <div className="button">
                  <button>Create Account</button>
                </div>
              </form>
            <div>
          </div>
        </div>
      </div>

    );
  }
});
            // s{auth.token};
