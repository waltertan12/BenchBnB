/* global $ */
(function (root) {
  "use strict";
  if (typeof root.ApiUtil === "undefined") {
    root.ApiUtil = {};
  }

  root.ApiUtil = {
    fetchBenches: function (bounds) {
      $.ajax({
        url: "/api/benches",
        type: "GET",
        data: {bounds: bounds},
        dataType: "json",
        success: function (benches) {
          root.ApiActions.receiveBenches(benches);
        }
      });
    }
  };
})(this);