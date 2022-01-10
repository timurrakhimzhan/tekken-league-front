import React, { useState } from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {QueryClientProvider} from "react-query";
import queryClient from "./api/query-client";
import AxiosWizard from "./AxiosWizard";
import ToastersWizard from "./ToastersWizard";
import DesktopPages from "./pages/desktop";
import {useDeviceInfo} from "./hooks/use-media-query";
import TabletPages from "./pages/tablet";
import MobilePages from "./pages/mobile";
import Modals from "./Modals";

function App() {
  const {isDesktop, isTablet, isMobile} = useDeviceInfo();
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      {isDesktop && <DesktopPages />}
      {isTablet && <TabletPages />}
      {isMobile && <MobilePages />}
    </BrowserRouter>
    <AxiosWizard />
    <ToastersWizard />
    <Modals />
    </QueryClientProvider>
  )
}

export default App
