(function (root) {
  if (typeof root.ReviewStore === "undefined") {
    root.ReviewStore = {};
  }

  var _reviews = [],
      resetReviews = function (reviews) {
        _reviews = reviews;
      },
      addReview = function (review) {
        _reviews.push(review);
      },
      CHANGE_EVENT = "CHANGE";

  root.ReviewStore = $.extend({}, EventEmitter.prototype,{
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },
    all: function () {
      return _reviews.slice();
    },
    findReview: function (reviewId) {
      for (var i = 0; i < _reviews.length; i++) {
        if (_reviews[i].id === reviewId) {
          return _reviews[i]
        };
      };
    },
    dispatcherID: AppDispatcher.register(function (payload) {
      if(payload.actionType === ReviewConstants.REVIEW_CREATED) {
        addReview(payload.review);
        root.ReviewStore.emit(CHANGE_EVENT);
      }

      if(payload.actionType === ReviewConstants.REVIEWS_RECEIVED) {
        resetReviews(payload.reviews);
        root.ReviewStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);