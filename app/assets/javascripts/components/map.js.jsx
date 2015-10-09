(function (root) {
  if (typeof root.Map === "undefined") {
    root.Map = {};
  }

  root.Map = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return {markers: []};
    },
    componentDidMount: function(){
      var mapOptions, 
          mapBounds,
          bounds,
          ne,
          sw
          map = React.findDOMNode(this.refs.google_map);
      
      mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13 
      };


      this.map = new google.maps.Map(map, mapOptions);

      this.map.addListener('idle', function () {
        
        mapBounds = this.map.getBounds();

        ne = mapBounds.getNorthEast();
        sw = mapBounds.getSouthWest();

        bounds = {
          "northEast": {
            "lat": ne.lat(),
            "lng": ne.lng()
          },
          "southWest": {
            "lat": sw.lat(),
            "lng": sw.lng()
          }
        }

        ApiUtil.fetchBenches(bounds);
      }.bind(this));

      this.map.addListener('click', function (e) {
        var lat = e.latLng.lat();
        var lng = e.latLng.lng();

        var query = {lat: lat, lng: lng};

        this.history.pushState(null, "benches/new", query);
      }.bind(this));

      root.BenchStore.addChangeListener(this._onChange);
      root.ItemStore.addChangeListener(this.toggleSingleMarkerBounce);

    },
    toggleSingleMarkerBounce: function () {
      var bench = root.ItemStore.all();
      var marker = this.findMarker(bench.id);
      this.toggleBounce(marker);
    },
    nullifyMarkers: function () {
      var oldMarkers = this.state.markers;
      for (var i = 0; i < oldMarkers.length; i++) {
        oldMarkers[i].setMap(null);
      }
    },
    findMarker: function (benchId) {
      for (var i = 0; i < this.state.markers.length; i++) {
        if (this.state.markers[i].benchId === benchId) {
          return this.state.markers[i];
        }
      };
    },
    toggleBounce: function(marker) {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    },
    _onChange: function () {
      var map = this.map,
          newMarkers = [],
          position;

      this.nullifyMarkers();

      root.BenchStore.all().map(function (bench) { 
        position = {
          lat: parseFloat(bench.lat), 
          lng: parseFloat(bench.lng)
        }

        var marker = new google.maps.Marker({
            benchId: bench.id, 
            position: position,
            map: map,
            description: bench.description
        });

        marker.addListener('click', this.toggleBounce.bind(null, marker));
        newMarkers.push(marker);

      }.bind(this));

      this.setState({markers: newMarkers});
    },

    render: function () {
      return (
        <div className="map" ref={"google_map"}>

        </div>
      );
    }
  });
})(this);