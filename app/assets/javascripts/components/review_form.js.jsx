(function (root) {
  if (typeof root.ReviewForm === "undefined") {
    root.ReviewForm = {};
  }

  root.ReviewForm = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return ({
        body: "",
        rating: ""
      })
    },
    _onSubmit: function (e) {
      e.preventDefault();
      root.ApiUtil.createReview({
        review: {
          body: this.state.body,
          rating: parseInt(this.state.rating),
          bench_id: this.props.bench.id
        }
      });
    },
    updateBody: function (e) {
      this.setState({
        body: e.target.value,
        rating: this.state.rating
      });
    },
    updateRating: function (e) {
      this.setState({
        body: this.state.body, 
        rating: e.target.value
      })
    },
    render: function () {
      return (
        <div className="review-form">
          <h3>Write a review of this bench!</h3>
          <form onSubmit={this._onSubmit}>
            <label>Review</label>
            <br/>
            <textarea
                   rows="5"
                   onChange={this.updateBody} 
                   value={this.state.body}
                   className="form-control"/>
            <br/>
            <label>Rating</label>
            <em> (Please give a rating from 1 - 5)</em>
            <input type="number"
                   className="form-control"
                   value={this.state.rating}
                   onChange={this.updateRating} />
            <br/>

            <input className="btn btn-primary"
                   type="submit" value="Submit"/>
            &nbsp;
            <Link to="/" className="btn btn-danger">
              Cancel
            </Link>
          </form>
        </div>
      );
    }
  });
})(this);