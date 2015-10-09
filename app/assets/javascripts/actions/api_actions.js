(function (root) {
  if (typeof root.ApiActions === "undefined") {
    root.ApiActions = {};
  }

  root.ApiActions = {
    receiveBenches: function (benches) {
      root.AppDispatcher.dispatch({
        actionType: root.BenchConstants.BENCHES_RECEIVED,
        benches: benches
      });
    },
    createBench: function (bench) {
      root.AppDispatcher.dispatch({
        actionType: root.BenchConstants.BENCH_CREATED,
        bench: bench
      })
    }
  };

})(this);