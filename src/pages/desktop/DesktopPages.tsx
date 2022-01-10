import Header from "./Header";
import PageWrapper from "../../shared/PageWrapper";
import ROUTES from "./routing";
import React from "react";
import RoutesRenderer from "../../shared/RoutesRenderer";

const DesktopPages = () => {
	return <>
		<Header/>
		<PageWrapper>
			<RoutesRenderer routes={ROUTES} />
		</PageWrapper>
	</>
}

export default DesktopPages;