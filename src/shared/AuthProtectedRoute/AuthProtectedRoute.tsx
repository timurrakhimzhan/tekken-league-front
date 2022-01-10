import React from "react";
import {Redirect, Route, RouteProps} from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import {AuthProtectedRouteProps} from "./AuthProtectedRoute.props";

const AuthProtectedRoute: React.FC<AuthProtectedRouteProps> = (props) => {
	const {isLoggedIn} = useAuth();
	if(isLoggedIn) {
		return <Route {...props} />
	}
	return <Redirect to={props.redirectTo} />
}

export default AuthProtectedRoute;