import {ContentWrapperStyled} from "./styled";
import React, {useContext} from "react";
import TabsContext from "./TabsContext";

const TabsContent = () => {
    const context = useContext(TabsContext);
    if(!context) {
        return null;
    }
    const {items, tabIndex} = context;
    const {Component} = items[tabIndex]
    return <ContentWrapperStyled>
        {
            <Component />
        }
    </ContentWrapperStyled>
}

export default TabsContent;