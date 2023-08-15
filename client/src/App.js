import { Fragment, useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Main from "./Pages/Main"
import NotFound from "./Pages/NotFound"


const App = () => {
	const dispatch = useDispatch();
	const location = useLocation();

	return (
		<Fragment>
			
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/not-found" component={NotFound} />
				<Redirect to="/not-found" />
			</Switch>
		</Fragment>
	);
};

export default App;
