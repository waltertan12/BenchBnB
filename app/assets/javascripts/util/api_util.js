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
    },
    createReview: function (review) {
      $.ajax({
        url: "/api/reviews",
        type: "POST",
        data: review,
        dataType: "json",
        success: function (review) {
          root.ApiActions.createReview(review);
        }
      });
    }
  };
})(this);