(function (root) {
  if (typeof root.FilterActions === "undefined") {
    root.FilterActions = {};
  }

  root.FilterActions = {
    receiveFilter: function (filter) {
      root.AppDispatcher.dispatch({
        actionType: root.FilterParamsConstants.FILTER_UPDATED,
        filter: filter
      });
    }
  };

})(this);