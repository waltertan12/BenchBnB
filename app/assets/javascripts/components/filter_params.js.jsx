(function (root) {
  if (typeof root.FilterParams === "undefined") {
    root.FilterParams = {};
  }

  root.FilterParams = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return ({filter: this.props.filter});
    },
    updateMin: function (e) {
      var newFilter = {
        bounds: this.state.filter.bounds,
        min: parseInt(e.target.value),
        max: this.state.filter.max
      };

      this.setState({filter: newFilter});
      root.FilterActions.receiveFilter(newFilter);
    },
    updateMax: function (e) {
      var newFilter = {
        bounds: this.state.filter.bounds,
        min: this.state.filter.min,
        max: parseInt(e.target.value)
      };

      this.setState({filter: newFilter});
      root.FilterActions.receiveFilter(newFilter);
    },
    render: function () {
      return (
        <div className="filter-form">
        <h3>Find the right bench for you</h3>
          <br/>
          <form onSubmit={this.onSubmit} className="row">
            <div className="col-md-3 col-md-offset-3">
              <label >Mininum Seating</label>
              <input type="number" 
                     onChange={this.updateMin} 
                     value={this.state.filter.min}
                     className="form-control min-max-form"/>

              <br/>
            </div>
            <div className="col-md-3">
              <label>Maximum Seating</label>
              <br/>
              <input type="number" 
                     onChange={this.updateMax} 
                     value={this.state.filter.max}
                     className="form-control min-max-form"/>
            </div>
          </form>
        </div>
      );
    }
  });
})(this);