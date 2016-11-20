var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles/index').transparentBg;

	// functional stateless components
  function Prompt(props) {
    return (
      <div>
				<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
					<h1>{props.header}</h1>
				
					<form onSubmit = {props.onSubmitUser}>
						<div className="form-group">
							<input className="form-control"
							   placeholder="Github username"
							   type="text"
							   onChange={props.onUpdateUser}
							   value={props.username}

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
  
};

Prompt.propTypes= {
		header:PropTypes.string.isRequired,
		onSubmitUser: PropTypes.func.isRequired,
		onUpdateUser: PropTypes.func.isRequired,
		username: PropTypes.string.isRequired
	};

module.exports = Prompt;