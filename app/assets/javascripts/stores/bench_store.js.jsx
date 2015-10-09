(function (root) {
  if (typeof root.BenchStore === "undefined") {
    root.BenchStore = {};
  }

  var _benches = [],
      resetBenches = function (benches) {
        _benches = benches;
      };
  root.BenchStore = $.extend({}, EventEmitter.prototype,{
    all: function () {
      return _benches.slice();
    },
    dispatcherID: AppDispatcher.register(function (payload) {
      if(payload.actionType === BenchConstants.BENCHES_RECEIVED) {
        resetBenches(payload.benches);
      }
    })
  });

})(this);