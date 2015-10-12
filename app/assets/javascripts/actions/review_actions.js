(function (root) {
  if (typeof root.ReviewActions === "undefined") {
    root.ReviewActions = {};
  }

  root.ReviewActions = {
    reviewsReceived: function (reviews) {
      root.AppDispatcher.dispatch({
        actionType: root.ReviewConstants.REVIEWS_RECEIVED,
        reviews: reviews
      });
    }
  };

})(this);