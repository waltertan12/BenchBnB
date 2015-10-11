(function (root) {
  if (typeof root.BenchForm === "undefined") {
    root.BenchForm = {};
  }

  root.BenchForm = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return ({
        description: "",
        lat: this.props.location.query.lat,
        lng: this.props.location.query.lng,
        seating: ""
      })
    },
    _onSubmit: function (e) {
      e.preventDefault();
      root.ApiUtil.createBench({bench: this.state});
      this.history.push(null, "/")
    },
    updateDescription: function (e) {
      this.setState({description: e.target.value});
    },
    updateLat: function (e) {
      this.setState({lat: parseFloat(e.target.value)});
    },
    updateLong: function (e) {
      this.setState({lng: parseFloat(e.target.value)});
    },
    updateSeating: function (e) {
      this.setState({seating: parseFloat(e.target.value)});
    },
    render: function () {
      return (
        <form onSubmit={this._onSubmit}>
          <label>Description</label>
          <br/>
          <input type="text" 
                 onChange={this.updateDescription} 
                 value={this.state.description}
                 className="form-control"/>

          <br/>
          <label>Latitude</label>
          <br/>
          <input type="text" 
                 onChange={this.updateLat} 
                 value={this.state.lat}
                 className="form-control"/>
          <br/>
          <label>Longitude</label>
          <br/>
          <input type="text" 
                 onChange={this.updateLong} 
                 value={this.state.lng}
                 className="form-control"/>
          <br/>
          <label>Seating</label>
          <br/>
          <input type="text" 
                 onChange={this.updateSeating} 
                 value={this.state.seating}
                 className="form-control"/>
          <br/>
          <input className="btn btn-primary"
                 type="submit" value="Submit"/>
        </form>
      );
    }
  });
})(this);