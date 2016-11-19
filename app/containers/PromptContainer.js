var React = require('react');

var PromptContainer = React.createClass({
	render:function(){
		return(<div>
				<div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
					<h1>{this.props.route.header}</h1>
				</div>
				
				<div className="col-sm-12">
					<form >
						<div className="form-group col-md-4 col-md-offset-4">
							<input className="form-control"
							   placeholder="Github username"
							   type="text" />
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