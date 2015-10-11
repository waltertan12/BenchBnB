(function (root) {
  if (typeof root.Search === "undefined") {
    root.Search = {};
  }

  root.Search = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return ({filter: root.FilterParamsStore.all()});
    },
    componentDidMount: function () {
      root.FilterParamsStore.addChangeListener(this._onChange);
    },
    _onChange: function () {
      this.setState({filter: root.FilterParamsStore.all()});
    },
    updateFilter: function () {
      this.setState({filter: root.FilterParamsStore.all()});
    },
    render: function () {
      return (
        <div>
          <Map filter={this.state.filter}/>
          <FilterParams filter={this.state.filter}/>
          <Index />
        </div>
      );
    }
  });
})(this);