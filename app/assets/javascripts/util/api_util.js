/* global $ */
(function (root) {
  "use strict";
  if (typeof root.ApiUtil === "undefined") {
    root.ApiUtil = {};
  }

  root.ApiUtil = {
    fetchBenches: function (filter) {
      $.ajax({
        url: "/api/benches",
        type: "GET",
        data: {filter: filter},
        dataType: "json",
        success: function (benches) {
          root.ApiActions.receiveBenches(benches);
        },
        error: function (err) {
          console.log(err.responseText);
        }
      });
    },
    fetchSingleBench: function (benchId) {
      $.ajax({
        
      })
    },
    createBench: function (bench) {
      $.ajax({
        url: "/api/benches",
        type: "POST",
        data: bench,
        dataType: "json",
        success: function (bench) {
          root.ApiActions.createBench(bench);
        }
      });
    }
  };
})(this);