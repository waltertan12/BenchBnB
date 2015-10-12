var root = document.getElementById("content");
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <div className="jumbotron">
            <div className="header-words">
              <h1>Bench BnB</h1>
              <h3>Wow</h3>
              <h3>Such Bench</h3>
              <h3>Very BnB</h3>
            </div>
            <img src="/assets/doge.png" className="doge"/>
          </div>
        </header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" className="clearfix" component={App}>
    <Route path="benches/new" component={BenchForm}/>
    <Route path="benches/:benchId" component={BenchShow}/>
    <IndexRoute component={Search}/>
  </Route>
);

$(document).ready( function () {
  React.render(
    <Router>{routes}</Router>,
    document.getElementById("content")
  );
});