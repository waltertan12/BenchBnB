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
        bounds: this.state.bounds,
        min: parseInt(e.target.value),
        max: this.state.filter.max
      };

      this.setState({filter: newFilter});
      root.FilterActions.receiveFilter(newFilter);
    },
    updateMax: function (e) {
      var newFilter = {
        bounds: this.state.bounds,
        min: this.state.filter.min,
        max: parseInt(e.target.value)
      };

      this.setState({filter: newFilter});
      root.FilterActions.receiveFilter(newFilter);
    },
    render: function () {
      return (
        <form onSubmit={this.onSubmit}>
          <label>Mininum Seating</label>
          <input type="number" 
                 onChange={this.updateMin} 
                 value={this.state.filter.min}
                 className="form-control"/>

          <br/>
          <label>Maximum Seating</label>
          <br/>
          <input type="number" 
                 onChange={this.updateMax} 
                 value={this.state.filter.max}
                 className="form-control"/>
        </form>
      );
    }
  });
})(this);