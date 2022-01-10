import React, {createContext} from "react";

type TabsState = {
    tabIndex: number;
    setTabIndex: (index: number) => void;
    items: Array<{
        label: string;
        Component: React.FC
    }>;
};

const TabsContext = createContext<TabsState | null>(null);

export default TabsContext;
