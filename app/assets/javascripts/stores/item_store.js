(function (root) {
  if (typeof root.ItemStore === "undefined") {
    root.ItemStore = {};
  }

  var _item = null,
      resetItems = function (item) {
        _item = item;
      },
      CHANGE_EVENT = "CHANGE_EVENT";

  root.ItemStore = $.extend({}, EventEmitter.prototype,{
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },
    all: function () {
      return _item;
    },
    dispatcherID: AppDispatcher.register(function (payload) {
      if(payload.actionType === ItemConstants.BENCH_HOVER) {
        resetItems(payload.item);
        root.ItemStore.emit(CHANGE_EVENT);
      }
    })
  });

})(this);