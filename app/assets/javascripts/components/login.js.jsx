var Login = React.createClass({

  // handleSubmit: function (e) {
  //   var credentials = e.currentTarget.seralizeJSON();
  //   CurrentUserStore.addChangeHandler();
  //   ApiUtil.createSession(credentials);
  // },

  mixins: [ReactRouter.History],

handleSubmit: function (e) {
    e.preventDefault();
    debugger
    var credentials = $(e.currentTarget).serializeJSON()
    ApiUtil.login(credentials, function () {
      this.history.pushState(null, "#");
    }.bind(this));
  },

  render: function () {

        // <div className="form-tabs group">
        //   <a href="<%= new_session_url %>">
        //     <h2>Sign in</h2>
        //   </a>
        //   <a href="<%= new_user_url %>">
        //     <h2>Create account</h2>
        //   </a>
        // </div>

    return (
      <div className="login">


        <div className="user-form">
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
            // {auth.token}
