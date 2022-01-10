import {ActiveIndicatorStyled, ActiveIndicatorWrapperStyled, TabStyled, TabsWrapperStyled} from "./styled";
import React, {useContext, useEffect, useLayoutEffect, useRef, useState} from "react";
import TabsContext from "./TabsContext";

const Tabs = () => {
    const context = useContext(TabsContext);
    if(!context) {
        return null;
    }
    const {setTabIndex, tabIndex, items} = context;
    const ref = useRef<HTMLDivElement>(null);
    const [tabWidth, setTabWidth] = useState(0);
    const [dimensions, setDimensions] = useState({
        width: 0,
        left: 0,
    });
    const observer = new ResizeObserver(() => {
        setTabWidth(width => ref.current?.clientWidth || width)
    });

    useLayoutEffect(() => {
        if(ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, [ref]);


    useEffect(() => {
        setDimensions((prev) => ({...prev, left: prev.width * tabIndex}))
    }, [tabIndex, setDimensions]);

    useEffect(() => {
        setDimensions({
            width: tabWidth,
            left: tabWidth * tabIndex,
        });
    }, [tabWidth]);

    return <TabsWrapperStyled>
        {
            items.map(({label}, i) => (
                <TabStyled key={label} ref={i === 0 ? ref : null} onClick={() => setTabIndex(i)} active={tabIndex === i}>
                    {label}
                </TabStyled>
            ))
        }
        <ActiveIndicatorWrapperStyled>
            <ActiveIndicatorStyled css={dimensions} />
        </ActiveIndicatorWrapperStyled>

    </TabsWrapperStyled>
}

export default Tabs;