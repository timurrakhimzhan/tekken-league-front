import {useEffect, useState} from "react";

type UseMediaQuery =  {
	minWidth?: number;
	maxWidth?: number;
}

const useMediaQuery = ({maxWidth, minWidth}: UseMediaQuery): boolean => {
	// const windowWidth = window.innerWidth;
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const handleWindowResize = () => {
		setWindowWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		}
	}, [])
	if(maxWidth && minWidth) {
		return windowWidth <= maxWidth && windowWidth > minWidth;
	}
	if(maxWidth) {
		return windowWidth <= maxWidth
	}
	if(minWidth) {
		return windowWidth > minWidth;
	}
	return false;
}

export const useDesktopInfo = () => {
	const isSmallDesktop = useMediaQuery({minWidth: 1000, maxWidth: 1280});
	const isBigDesktop = useMediaQuery({minWidth: 1280});
	return {
		isSmallDesktop,
		isBigDesktop
	}
}

export const useDeviceInfo = () => {
	const isMobile = useMediaQuery({maxWidth: 750});
	const isTablet = useMediaQuery({minWidth: 750, maxWidth: 1000})
	const isDesktop = useMediaQuery({minWidth: 1000});
	return {
		isMobile,
		isTablet,
		isDesktop
	}
}

export default useMediaQuery;