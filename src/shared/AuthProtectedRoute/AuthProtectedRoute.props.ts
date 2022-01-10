import {RouteProps} from "react-router-dom";

export type AuthProtectedRouteProps = RouteProps & {
	redirectTo: string;
}