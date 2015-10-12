(function (root) {
  if (typeof root.BenchShow === "undefined") {
    root.BenchShow = {};
  }

  root.BenchShow = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return this.getStateFromStore();
    },
    getStateFromStore: function () {
      var benchId = parseInt(this.props.params.benchId);
      var bench = root.BenchStore.findBench(benchId);
      return {bench: bench}
    },
    setNewState: function () {
      var newBench = this.getStateFromStore();
      this.setState(newBench);
    },
    _onClick: function () {
      this.history.pushState(null, "/");
    },
    upload: function () {
      cloudinary.openUploadWidget(
        {
          cloud_name: "q32rnq9jfaskfaskfasf",
          cropping: 'server',
          upload_preset: "f0qeyyhf",
          theme: "minimal"
        }, 
        function(error, result) { 
          console.log(error, result);
          console.log(result[0].secure_url);
          root.ApiUtil.updateImageUrl(
            this.state.bench, 
            result[0].secure_url
          );
        }.bind(this)
      )
    },
    render: function () {
      this.props.params.benchId;
      return (
        <div>
          <div className="single-bench">
            <Map bench={this.state.bench}
                 filter={this.props.filter}/>
            <div className="bench-show">
              <h1>{this.state.bench.description}</h1>
              <h3>Seating: {this.state.bench.seating}</h3>
              <h3>Rating: {this.state.bench.average_rating}</h3>
              <h3>Location</h3>
              <ul>
                <li>Latitude: {this.state.bench.lat}</li>
                <li>Longitude: {this.state.bench.lng}</li>
              </ul>
              <h3>Photo</h3>
              <img className="bench-show-image"
                   src={this.state.bench.image_url} 
                   height="225"
                   widht="225"/>
              <br/>
              <button className="btn btn-success"
                      onClick={this.upload}>Upload a new image!</button>
              <br/><br/>
              <button id={'upload'}
                      className="btn btn-primary"
                      onClick={this._onClick}>Return
              </button>
            </div>
          </div>
          <ReviewForm bench={this.state.bench}/>
          <ReviewIndex reviews={this.state.bench.reviews}/>
        </div>
      );
    }
  });
})(this);