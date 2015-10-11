(function (root) {
  if (typeof root.Index === "undefined") {
    root.Index = {};
  };

  root.Index = React.createClass({
    getInitialState: function () {
      return ({benches: root.BenchStore.all()});
    },
    componentDidMount: function () {
      root.BenchStore.addChangeListener(this._onChange);
      root.ItemStore.addChangeListener(this._onMouseOver);
    },
    _onChange: function () {
      this.setState({benches: root.BenchStore.all()});
    },
    _onMouseOver: function (item, e) {
      root.ItemUtil.fetchItem(item);
    },
    render: function () {
      return (
        <div className="bench-index">
        <h2 className="bench-index-header">All Benches</h2>
        <ul>
          {this.state.benches.length === 0 ? <li>No benches found :(</li> : <li/>}
          {
            this.state.benches.map( function (bench) {
              return(
                <div>
                  <hr/>
                  <li className="bench-list-item"
                      onMouseOver={this._onMouseOver.bind(null, bench)} 
                      onClick={this._onMouseOver}>
                      <strong>{bench.description}</strong><br/>
                      <strong>Latitude:</strong> {bench.lat}<br/>
                      <strong>Longitude:</strong> {bench.lng}<br/>
                      <strong>Seating:</strong> {bench.seating}
                  </li>
                </div>
              );
            }.bind(this))
          }
        </ul>
        </div>
      );
    }
  });
})(this);