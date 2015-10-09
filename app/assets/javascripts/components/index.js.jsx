(function (root) {
  if (typeof root.Index === "undefined") {
    root.Index = {};
  };

  root.Index = React.createClass({
    getInitialState: function () {
      return ({benches: root.BenchStore.all()});
    },
    componentDidMount: function () {
      root.BenchStore.addChangeListener(this._onChange);
      ApiUtil.fetchBenches();
    },
    _onChange: function () {
      this.setState({benches: root.BenchStore.all()});
    },
    render: function () {
      return <div>{this.state.benches}</div>;
    }
  });
})(this);