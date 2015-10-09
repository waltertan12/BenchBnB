(function (root) {
  if (typeof root.BenchStore === "undefined") {
    root.BenchStore = {};
  }

  var _benches = [],
      resetBenches = function (benches) {
        _benches = benches;
      },
      updateBenches = function (benches) {
        _benches = benches;
      },
      CHANGE_EVENT = "CHANGE";

  root.BenchStore = $.extend({}, EventEmitter.prototype,{
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },
    all: function () {
      return _benches.slice();
    },
    dispatcherID: AppDispatcher.register(function (payload) {
      if(payload.actionType === BenchConstants.BENCHES_RECEIVED) {
        resetBenches(payload.benches);
        root.BenchStore.emit(CHANGE_EVENT);
      }
    })
  });

})(this);