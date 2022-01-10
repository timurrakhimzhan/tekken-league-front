import {RouteProps} from "react-router-dom";

export type UnAuthProtectedRouteProps = RouteProps & {
	redirectTo: string;
}