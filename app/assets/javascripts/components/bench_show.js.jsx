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
    componentDidMount: function () {

    },
    componentWillUnmount: function () {

    },
    setNewState: function () {
      var newBench = this.getStateFromStore();
      this.setState(newBench);
    },
    _onClick: function () {
      this.history.pushState(null, "/");
    },
    upload: function () {
      var newImageURL = "",
          updatedBench = this.state.bench;

      cloudinary.openUploadWidget(
        {
          cloud_name: "q32rnq9jfaskfaskfasf",
          cropping: 'server',
          upload_preset: "f0qeyyhf",
          theme: "minimal"
        }, 
        function(error, result) {
          if (error) {
            console.log(error, result);
          } else {
            newImageURL = result[0].secure_url;
            updatedBench.image_url = newImageURL;
            document.getElementById("bench-image").src = newImageURL;
            this.setState({bench: updatedBench});

            root.ApiUtil.updateImageUrl(
              this.state.bench, 
              result[0].secure_url
            );

          }

        }.bind(this)
      )
    },
    render: function () {
      console.log(this);
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
              <img id="bench-image" className="bench-show-image"
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