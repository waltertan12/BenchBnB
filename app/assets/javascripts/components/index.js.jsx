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
    },
    _onChange: function () {
      this.setState({benches: root.BenchStore.all()});
    },
    render: function () {
      console.log(this.state.benches);
      return (
        <ul>
          {
            this.state.benches.map( function (bench) {
              return(
                <li>{bench.description}</li>
              );
            })
          }
        </ul>
      );
    }
  });
})(this);

// return (
//                 <li>{bench.description}</li>
//               );