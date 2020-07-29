import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import Detalhes from "./pages/Detalhes";

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/detalhes" component={Detalhes} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
