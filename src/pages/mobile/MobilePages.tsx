import PageWrapper from "../../shared/PageWrapper";
import ROUTES from "./routing";
import React from "react";
import RoutesRenderer from "../../shared/RoutesRenderer";
import NavTab from "./NavTab";

const MobilePages = () => {
	return <>
		<PageWrapper>
			<RoutesRenderer routes={ROUTES} />
		</PageWrapper>
		<NavTab />
	</>
}

export default MobilePages;