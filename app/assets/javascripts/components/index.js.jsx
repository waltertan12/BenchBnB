(function (root) {
  if (typeof root.Index === "undefined") {
    root.Index = {};
  };

  root.Index = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return ({benches: root.BenchStore.all()});
    },
    componentDidMount: function () {
      root.BenchStore.addChangeListener(this._onChange);
      root.ItemStore.addChangeListener(this._onMouseOver);
    },
    componentWillUnmount: function () {
      root.BenchStore.removeChangeListener(this._onChange);
      root.ItemStore.removeChangeListener(this._onMouseOver);
    },
    _onChange: function () {
      this.setState({benches: root.BenchStore.all()});
    },
    _onMouseOver: function (item, e) {
      root.ItemUtil.fetchItem(item);
    },
    directToShow: function (bench) {
      console.log("Directing to bench show...");

      this.history.pushState(null, "benches/" + bench.id, this.props.filter);
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
                  <li className="bench-list-item">
                    <div className="bench-list-item-text"
                      onMouseOver={this._onMouseOver.bind(null, bench)} 
                      onClick={this.directToShow.bind(null, bench)}>
                      <strong>{bench.description}</strong><br/>
                      <strong>Seating:</strong> {bench.seating}<br/>
                      <strong>Rating: </strong> {bench.average_rating}
                    </div>
                    <img className="bench-list-item-image"
                         src={bench.image_url}
                         height="50"
                         width="50"/>
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