import {useEffect, useState} from "react";
import axiosInstance from "./api/axios";
import {AxiosError} from "axios";
import store from "./store";
import useAuth from "./hooks/use-auth";
import API from "./api";
import {CustomAxiosError} from "./api/types";

const AxiosWizard = () => {
	const {refreshToken, accessToken} = useAuth();

	const silentLogin = async () => {
		if(!refreshToken) {
			delete axiosInstance.defaults.headers.authorization;
			return;
		}
		try {
			const {accessToken} = await API.authentication.actions.refreshToken({refreshToken});
			store.user.refreshAccessToken(accessToken);
		} catch(error) {
			const axiosError = error as CustomAxiosError;
			if(!axiosError.isAxiosError) {
				return
			}
			store.user.removeCredentials();
			delete axiosInstance.defaults.headers.authorization;
		}
	}

	const handleAxiosError = (error: AxiosError) => {
		const status = error.response?.status;
		if(status === 401 && store.user.accessToken && error.config.headers?.authorization) {
			silentLogin();
		}
		throw error;
	};


	useEffect(() => {
		const id = axiosInstance.interceptors.response.use(undefined, handleAxiosError);
		return () => axiosInstance.interceptors.response.eject(id);
	}, []);

	useEffect(() => {
		if(accessToken) {
			axiosInstance.defaults.headers.authorization = `Bearer ${accessToken}`;
			return;
		}
		delete axiosInstance.defaults.headers.authorization
	}, [accessToken])

	return null;
}

export default AxiosWizard;