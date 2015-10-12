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
    componentWillUnmount: function () {
      root.FilterParamsStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
      console.log("Search Filter is being updated with: ");
      console.log(root.FilterParamsStore.all());
      this.setState({filter: root.FilterParamsStore.all()});
    },
    render: function () {
      return (
        <div>
          <div className="map-filter">
            <Map filter={this.state.filter}/>
            <Index filter={this.state.filter} />
          </div>
          <FilterParams filter={this.state.filter}/>
        </div>
      );
    }
  });
})(this);