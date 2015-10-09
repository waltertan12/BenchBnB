(function (root) {
  if (typeof root.Search === "undefined") {
    root.Search = {};
  }

  root.Search = React.createClass({
    render: function () {
      return (
        <div>
          <Map />
          <Index />
        </div>
      );
    }
  });
})(this);