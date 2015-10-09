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
    }
  };

})(this);