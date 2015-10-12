(function (root) {
  if (typeof root.BenchShow === "undefined") {
    root.BenchShow = {};
  }

  root.BenchShow = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return this.getStateFromStore();
    },
    getStateFromStore: function () {
      var benchId = parseInt(this.props.params.benchId);
      var bench = root.BenchStore.findBench(benchId);
      return {bench: bench}
    },
    setNewState: function () {
      var newBench = this.getStateFromStore();
      this.setState(newBench);
    },
    _onClick: function () {
      this.history.pushState(null, "/");
    },
    render: function () {
      this.props.params.benchId;
      return (
        <div className="single-bench">
          <Map bench={this.state.bench}
               filter={this.props.filter}/>
          <div className="bench-show">
            <h1>{this.state.bench.description}</h1>
            <h3>Seating: {this.state.bench.seating}</h3>
            <button className="btn btn-primary"
                    onClick={this._onClick}>Return
            </button>
          </div>
        </div>
      );
    }
  });
})(this);