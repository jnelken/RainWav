var Sidebar = React.createClass({

  render: function () {
    return (
      <div className="sidebar">
        <section className="stats">

          <div className="stats-header">
          <img src={assets.stats} />
          Statistics
          </div>
            <p className="plays">99 </p><p>Plays in total</p>
        </section>

      </div>
    );
  }
});
