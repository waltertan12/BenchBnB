(function (root) {
  if (typeof root.FilterParams === "undefined") {
    root.FilterParams = {};
  }

  root.FilterParams = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return ({filter: this.props.filter});
    },
    componentDidMount: function () {
      root.FilterParamsStore.addChangeListener(this._onChange);
    },
    _onChange: function () {
      // root.FilterActions.receiveFilter(this.state.filter);
      // this.setState({filter: root.FilterParamsStore.all()});
      // root.ApiUtil.fetchBenches();
      // this.props.history.pushState(null, "/", this.state.filter);
    },
    updateMin: function (e) {
      this.setState({
        filter: {
          min: e.target.value,
          max: this.state.filter.max
        }
      });
      root.FilterActions.receiveFilter(this.state.filter);
    },
    updateMax: function (e) {
      this.setState({
        filter: {
          min: this.state.filter.min,
          max: e.target.value
        }
      });
      root.FilterActions.receiveFilter(this.state.filter);
    },
    render: function () {
      return (
        <form onSubmit={this.onSubmit}>
          <label>Mininum Seating</label>
          <input type="text" 
                 onChange={this.updateMin} 
                 value={this.state.filter.min}
                 className="form-control"/>

          <br/>
          <label>Maximum Seating</label>
          <br/>
          <input type="text" 
                 onChange={this.updateMax} 
                 value={this.state.filter.max}
                 className="form-control"/>
        </form>
      );
    }
  });
})(this);