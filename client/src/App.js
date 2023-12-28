import { Fragment, useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Main from "./Pages/Main"
import NotFound from "./Pages/NotFound"
import Confession from "./Pages/Confession";
import Team from "./Pages/Team";
import impDocs from "./Pages/Impdocs";
import Resources from "./Pages/Resources";


const App = () => {
	const dispatch = useDispatch();
	const location = useLocation();

	return (
		<Fragment>
			
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/imp-docs" component={impDocs}/>
				<Route path="/resources" component={Resources}/>
				<Route path="/confession" component={Confession}/>
				<Route path="/team" component={Team}/>
				<Route path="/not-found" component={NotFound} />
				<Redirect to="/not-found" />
			</Switch>
		</Fragment>
	);
};

export default App;
