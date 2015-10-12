(function (root) {
  if (typeof root.ReviewIndex === "undefined") {
    root.ReviewIndex = {};
  };

  root.ReviewIndex = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return ({reviews: this.props.reviews});
    },
    componentDidMount: function () {
      root.ReviewActions.reviewsReceived(this.props.reviews)
      root.ReviewStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
      root.ReviewStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
      this.setState({reviews: root.ReviewStore.all()});
    },
    render: function () {
      var reviewContent;
      var reviews = this.state.reviews;
      console.log(reviews);
      if (reviews.length === 0 ) {
        reviewContent = <h1>No reviews...</h1>;
      } else {
        reviewContent = (
          <ul>
            {
              reviews.map( function (review) {
                return (
                  <div className="review-index-item">
                    <hr/>
                    <li>
                      Rating: {review.rating}<br/>
                      {review.body}
                    </li>
                  </div>
                );
              })
            }
          </ul>
        );
      }
    
      return (
        <div className="review-index">
          <h1 className="review-header">
            See what people are saying about this bench!
          </h1>
          {reviewContent}
        </div>
      );
    }
  });
})(this);