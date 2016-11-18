var USER_DATA = {
	name:'nikhil',
	imageUrl:'https://avatars2.githubusercontent.com/u/5569829?v=3&s=460',
	username:'ponugon'
}
var React = require('react');
var ReactDOM = require('react-dom');

var Name = React.createClass({
  render: function () {
    return (
      <div><h1>{this.props.name}</h1>
 
      </div>
    )
  }
});

var Image = React.createClass({
  render: function () {
    return (
      <div>
      	
      	<img src={this.props.imageUrl}/>
      	
      </div>
    )
  }
});

var Link = React.createClass({
	changeUrl: function(){
		window.location.replace(this.props.href)
	},
	render: function(){
		return(
				<div style={{color:'brown',cursor:'pointer'}} onClick ={this.changeUrl}>
					Hello mate {this.props.children}
				</div>
			)
	}
})

var Username = React.createClass({
  render: function () {
    return (
      <div>
      	<h3> <Link href={'https://www.github.com/'+ this.props.username}>
      			{this.props.username}
      		</Link>
      	</h3>
      </div>
    )
  }
});


var Avatar = React.createClass({
  render: function () {
    return (
      <div>
      	<Name name={this.props.user.name}/>
      	<Image imageUrl={this.props.user.imageUrl}/>
      	<Username username={this.props.user.username}/>
      </div>
    )
  }
});

ReactDOM.render(<Avatar user={USER_DATA}/>, document.getElementById('app'));