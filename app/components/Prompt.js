var React = require('react');
var transparentBg = require('../styles/index').transparentBg;

var Prompt = React.createClass({
  render: function () {
    return (
      <div>
				<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
					<h1>{this.props.header}</h1>
				
					<form onSubmit = {this.props.onSubmitUser}>
						<div className="form-group">
							<input className="form-control"
							   placeholder="Github username"
							   type="text"
							   onChange={this.props.onUpdateUser}
							   value={this.props.username}

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

module.exports = Prompt;