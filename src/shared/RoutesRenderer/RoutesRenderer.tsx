import React from "react";
import {RoutesRendererProps} from "./RoutesRenderer.props";
import AuthProtectedRoute from "../AuthProtectedRoute";
import UnAuthProtectedRoute from "../UnAuthProtectedRoute";
import {Route, Switch} from "react-router-dom";

const RoutesRenderer: React.FC<RoutesRendererProps> = ({routes}) => {
	return <Switch>
		{
			routes.map((route) => {
				if(route.authRequired) {
					return <AuthProtectedRoute key={route.key} path={route.path} strict exact={route.exact} component={route.Component} redirectTo={route.redirectTo} />
				}
				if(route.unAuthRequired) {
					return <UnAuthProtectedRoute key={route.key} path={route.path} strict exact={route.exact} component={route.Component} redirectTo={route.redirectTo} />
				}
				return <Route key={route.key} path={route.path} exact={route.exact} strict component={route.Component} />
			})
		}
	</Switch>
}

export default RoutesRenderer;