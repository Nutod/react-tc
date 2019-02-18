import React, { Component } from "react";
import { Grommet } from "grommet";
import Layout from "./container/Layout";

class App extends Component {
	render() {
		return (
			<Grommet>
				<p>App Working</p>
				<Layout />
			</Grommet>
		);
	}
}

export default App;
