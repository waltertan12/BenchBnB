(function (root) {
  if (typeof root.Map === "undefined") {
    root.Map = {};
  }

  root.Map = React.createClass({
    componentDidMount: function(){
      root.BenchStore.addChangeListener(this._onChange);
      var map = React.findDOMNode(this.refs.google_map);
      
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13 
      };



      this.map = new google.maps.Map(map, mapOptions);
      this.map.addListener('idle', function () {
        ApiUtil.fetchBenches();
      });

      // this.map.addListener('center_changed', function () {
      //   ApiUtil.fetchBenches();
      // });
    },
    _onChange: function () {
      var map = this.map;
      var position;

      // Place markers
      root.BenchStore.all().map(function (bench) { 
        console.log(bench);
        position = {
          lat: parseFloat(bench.lat), 
          lng: parseFloat(bench.lng)
        }
        var marker = new google.maps.Marker({
                position: position,
                map: map,
                description: bench.description
        });
      });


    },
    render: function () {
      return (
        <div className="map" ref={"google_map"}>

        </div>
      );
    }
  });
})(this);