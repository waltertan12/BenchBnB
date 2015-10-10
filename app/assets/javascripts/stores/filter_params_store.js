(function (root) {
  if (typeof root.FilterParamsStore === "undefined") {
    root.FilterParamsStore = {};
  }

  var _filter = {max: 99999999, min: 0},
      resetFilter = function (filter) {
        _filter = filter;
      },
      CHANGE_EVENT = "CHANGE_EVENT";

  root.FilterParamsStore = $.extend({}, EventEmitter.prototype,{
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },
    all: function () {
      return _filter;
    },
    dispatcherID: AppDispatcher.register(function (payload) {
      if(payload.actionType === FilterParamsConstants.FILTER_UPDATED) {
        resetFilter(payload.filter);
        root.FilterParamsStore.emit(CHANGE_EVENT);
      }
    })
  });

})(this);