var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var transparentBg = require('../styles/index').transparentBg;


var Home = React.createClass({
  render: function () {
    return (
      <div>
      	<div className='jumbotron col-md-12 text-center' style={transparentBg}>
      		<h1>GitHub battle</h1>
      		<p className='lead'>A fun game</p>
         	
      	<Link to='/playerOne'>
	      	<button className='btn btn-lg btn-success'>Continue</button>
      	</Link>
      	
      </div>
      </div>
    )
  }
});

module.exports = Home;