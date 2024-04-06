import React, { useEffect, useState } from "react";
import { Terminal } from "./Terminal/Terminal";
import { Button } from "@/shadcn/components/ui/button";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/shadcn/components/ui/resizable";
import { DefaultPage } from "./DefaultPage/DefaultPage";
import { ProjectOverview } from "./ProjectViewer/ProjectOverview/ProjectOverview";
import { Debug } from "./Debug/Debug";
/**
 * @alias App
 * @description Main entry point of the render process for viewing
 *
 */
export const App = () => {
  const [AppStateRaw, setAppStateRaw] = useState({
    App: {},
    Page: {},
    Terminal: {},
  });

  /**
   * @alias AppState
   * @description The state of the app
   */
  const AppState = AppStateRaw;
  /**
   * @alias setAppState
   * @description The function to set the state of the app
   */
  const setAppState = setAppStateRaw;

  console.log("Rendered App");

  return (
    <HashRouter>
      <div>
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-screen border rounded-lg"
        >
          <ResizablePanel defaultSize={3}>
            <div className="relative top-0 items-start">
              <Terminal AppState={AppState} setAppState={setAppState} />
              <br />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <Routes>
              <Route
                path="/proj"
                element={
                  <ProjectOverview
                    AppState={AppState}
                    setAppState={setAppState}
                  />
                }
              />

              <Route
                path="*"
                element={
                  <DefaultPage AppState={AppState} setAppState={setAppState} />
                }
              />
            </Routes>
          </ResizablePanel>
          {AppState.App && AppState.App.DebugPannel && (
            <>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={15}>
                <Debug AppState={AppState} />
              </ResizablePanel>
            </>
          )}
        </ResizablePanelGroup>
      </div>
    </HashRouter>
  );
};
