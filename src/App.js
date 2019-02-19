import React, { Component } from "react";
import { Grommet } from "grommet";
import Layout from "./container/Layout";
import { theme } from "./lib/theme";

class App extends Component {
	render() {
		return (
			<Grommet theme={theme}>
				<Layout />
			</Grommet>
		);
	}
}

export default App;
