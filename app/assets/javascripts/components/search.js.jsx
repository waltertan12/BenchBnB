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
      // root.ApiUtil.fetchBenches();
      // this.props.history.pushState(null, "/", this.state.filter);
    },
    render: function () {
      return (
        <div>
          <Map filter={this.state.filter}/>
          <Index />
          <FilterParams filter={this.state.filter}/>
        </div>
      );
    }
  });
})(this);