(function (root) {
  if (typeof root.ItemActions === "undefined") {
    root.ItemActions = {};
  }

  root.ItemActions = {
    receiveItem: function (item) {
      root.AppDispatcher.dispatch({
        actionType: root.ItemConstants.BENCH_HOVER,
        item: item
      });
    }
  };

})(this);