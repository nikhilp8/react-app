var React = require('react');
var transparentBg = require('../styles/index').transparentBg;

var PromptContainer = React.createClass({


	getInitialState: function(){
		return {
			username: ''
		}
	},

	onUpdateUser: function(e) {
		this.setState({
			username: e.target.value
		});
	},

	onSubmitUser: function(e){
		e.preventDefault();	// and then setState
		var username = this.setState.username;
		this.setState({
			username: ''	// so that when backbutton is clicked will not get the previous username
		});
	}

	if(this.props.routeParams.playerOne){
		//goto battle
	}
	else{
		// goto player two
	}

	render:function(){

		return(<div>
				<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
					<h1>{this.props.route.header}</h1>
				
					<form onSubmit = {this.onSubmitUser}>
						<div className="form-group">
							<input className="form-control"
							   placeholder="Github username"
							   type="text"
							   onChange={this.onUpdateUser}
							   value={this.state.username}

							   />
						</div>
						<div className="form-group col-md-2 col-md-offset-5">
							<button className="btn btn-block btn-success"
									type="button">
								Continue
							</button>
						</div>
					</form>
					
				</div>
				</div>
			)
	}
});

module.exports = PromptContainer;