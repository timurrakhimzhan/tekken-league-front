import React from "react";

export type TabsWithContentProps = {
    items: Array<{
        label: string;
        Component: React.FC;
    }>;
    tabIndex?: number | null;
    setTabIndex?: ((i: number) => void) | null;
}