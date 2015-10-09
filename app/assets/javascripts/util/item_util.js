/* global $ */
(function (root) {
  "use strict";
  if (typeof root.ItemUtil === "undefined") {
    root.ItemUtil = {};
  }

  root.ItemUtil = {
    fetchItem: function (bench) {
      root.ItemActions.receiveItem(bench);
    }
  };
})(this);