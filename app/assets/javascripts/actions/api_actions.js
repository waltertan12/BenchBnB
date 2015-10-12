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
    },
    createReview: function (review) {
      root.AppDispatcher.dispatch({
        actionType: root.ReviewConstants.REVIEW_CREATED,
        review: review
      })
    },
    updateImageUrl: function (benches) {
      root.AppDispatcher.dispatch({
        actionType: root.ReviewConstants.BENCHES_RECEIVED,
        benches: benches
      })
    } 
  };

})(this);