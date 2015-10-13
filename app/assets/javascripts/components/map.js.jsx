(function (root) {
  if (typeof root.Map === "undefined") {
    root.Map = {};
  }

  root.Map = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return {markers: []};
    },
    createIdleListener: function () {
      var bounds,
          newFilter,
          ne,
          sw;
      this.map.addListener('idle', function () {
        console.log("IDLE");
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
        };

        newFilter = {
          bounds: bounds,
          max: this.props.filter.max,
          min: this.props.filter.min
        };

        console.log("Map Component New Filter");
        console.log(newFilter);
        root.FilterActions.receiveFilter(newFilter);
        ApiUtil.fetchBenches(newFilter);
      }.bind(this));
    },
    createClickListener: function () {
      this.map.addListener('click', function (e) {
        var lat = e.latLng.lat();
        var lng = e.latLng.lng();

        var query = {lat: lat, lng: lng};
        this.history.pushState(null, "benches/new", query);
      }.bind(this));
    },
    getLocation: function () {
      var center = {lat: 37.7758, lng: -122.435};
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Found location!");
        center.lat = position.coords.latitude;
        center.lng = position.coords.longitude;
      })
      return center;
    },
    componentDidMount: function(){
      var mapOptions, 
          mapBounds,
          map = React.findDOMNode(this.refs.google_map);
      
      if (typeof this.props.bench === "undefined") {
        mapOptions = {
          center: this.getLocation(),
          zoom: 13 
        };

        this.map = new google.maps.Map(map, mapOptions);

        this.createIdleListener();
        this.createClickListener();

        root.BenchStore.addChangeListener(this._onChange);
        root.ItemStore.addChangeListener(this.toggleSingleMarkerBounce);
      } else {
        var bench = this.props.bench;

        mapOptions = {
          center: {
            lat: parseFloat(bench.lat), 
            lng: parseFloat(bench.lng)
          },
          zoom: 17,
          draggable: false
        }

        this.map = new google.maps.Map(map, mapOptions);
        var marker = new google.maps.Marker({
            benchId: bench.id, 
            position: mapOptions.center,
            map: this.map,
            description: bench.description
        });
      }
    },
    componentWillUnmount: function () {
      root.BenchStore.removeChangeListener(this._onChange);
      root.ItemStore.removeChangeListener(this.toggleSingleMarkerBounce);
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
    directToShow: function (bench) {
      this.history.pushState(null, "benches/" + bench.id, this.props.filter);
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
        marker.addListener('click', this.directToShow.bind(null, bench));
        newMarkers.push(marker);

      }.bind(this));

      this.setState({markers: newMarkers});
    },
    render: function () {
      return (
        <div className="map" ref={"google_map"}></div>
      );
    }
  });
})(this);