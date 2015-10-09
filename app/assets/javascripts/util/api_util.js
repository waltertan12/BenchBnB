/* global $ */
(function (root) {
  "use strict";
  if (typeof root.ApiUtil === "undefined") {
    root.ApiUtil = {};
  }

  root.ApiUtil = {
    fetchBenches: function () {
      $.ajax({
        url: "/api/benches",
        type: "GET",
        dataType: "json",
        success: function (benches) {
          console.log("///// API_UTIL FETCH_BENCHES //////");
          console.log(benches);
          root.ApiActions.receiveBenches(benches);
        }
      });
    }
  };
})(this);