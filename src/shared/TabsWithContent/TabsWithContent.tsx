import React, {useEffect, useState} from "react"
import {WrapperStyled } from "./styled"
import TabsContext from "./TabsContext";
import {TabsWithContentProps} from "./TabsWithContent.props";

export const TabsWithContent: React.FC<TabsWithContentProps> = (
    {
        tabIndex: _tabIndex, setTabIndex: _setTabIndex,
        items, children
    }) => {
    const [tabIndex, setTabIndex] = useState(_tabIndex || 0);

    return <TabsContext.Provider value={{
                tabIndex: _tabIndex ?? tabIndex,
                setTabIndex: _setTabIndex ?? setTabIndex,
                items
            }}
        >
            <WrapperStyled>
                {children}
            </WrapperStyled>
        </TabsContext.Provider>
}
