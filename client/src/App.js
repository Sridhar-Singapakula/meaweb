import { Fragment, useEffect, useState} from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Main from "./Pages/Main"
import NotFound from "./Pages/NotFound"
import Confession from "./Pages/Confession";
import Team from "./Pages/Team";
import impDocs from "./Pages/Impdocs";
import Resources from "./Pages/Resources";
import Feedback from "./Pages/feedback";
import Timetable from "./Pages/TimeTable";
import Loading from "./Pages/Loading/loading";


const App = () => {
	const dispatch = useDispatch();
	const location = useLocation();

	const [loading, setLoading] = useState(false);  
	useEffect(()=>{
	  setLoading(true)
	  setTimeout(()=>{
		setLoading(false)
	  }, 2000)
	},[])

	return (
		<Fragment>
		{
			loading?<Loading/>:

			<Switch>
				<Route exact path="/" component={Main} />
				<Route exact path="/imp-docs" component={impDocs}/>
				<Route path="/resources" component={Resources}/>
				<Route path="/confession" component={Confession}/>
				<Route path="/feedback" component={Feedback}/>
				<Route path="/team" component={Team}/>
				<Route path="/timetable" component={Timetable}/>
				<Route path="/not-found" component={NotFound} />
				<Redirect to="/not-found" />
			</Switch>
		}
		</Fragment>
	);
};

export default App;
