(function (root) {
  if (typeof root.ItemActions === "undefined") {
    root.ItemActions = {};
  }

  root.ItemActions = {
    receiveItem: function (item) {
      if (!AppDispatcher.isDispatching()) {
        root.AppDispatcher.dispatch({
          actionType: root.ItemConstants.BENCH_HOVER,
          item: item
        })
      }
    }
  };

})(this);