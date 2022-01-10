import React from "react";
import {Redirect, Route, RouteProps} from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import {UnAuthProtectedRouteProps} from "./UnAuthProtectedRoute.props";

const UnAuthProtectedRoute: React.FC<UnAuthProtectedRouteProps> = (props) => {
	const {isLoggedIn} = useAuth();
	if(!isLoggedIn) {
		return <Route {...props} />
	}
	return <Redirect to={props.redirectTo} />
}

export default UnAuthProtectedRoute;