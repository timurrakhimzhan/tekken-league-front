import React from "react";

export type Route = {
	key: string,
	label: string,
	path: string,
	unAuthRequired: false
	authRequired: false
	Component: React.FC,
	exact: boolean;
} | {
	key: string,
	label: string,
	path: string,
	unAuthRequired: false,
	authRequired: true,
	redirectTo: string,
	Component: React.FC,
	exact: boolean;
} | {
	key: string,
	label: string,
	path: string,
	unAuthRequired: true,
	authRequired: false,
	redirectTo: string,
	Component: React.FC,
	exact: boolean;
}