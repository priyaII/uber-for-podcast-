var React = require("react");                //you can use import statements, like the one below
var ReactDom = require("react-dom");

import $ from 'jquery'



class Song extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = { //These are state variables
	        genres: []
	    };

	    //this.deleteItem = this.deleteItem.bind(this);
	}

	componentDidMount() {

	}

	render() {
		return(
					<div className="col-md-4">
						<div><img src={this.props.image}></img></div>
						<div>{this.props.name}</div>


					</div>
)
	}
}

module.exports = {
	Song: Song
}
