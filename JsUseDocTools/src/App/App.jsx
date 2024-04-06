import React, { useEffect, useState } from "react";
import { Terminal } from "./Terminal/Terminal";
import { Button } from "@/shadcn/components/ui/button";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/shadcn/components/ui/resizable";
import { DefaultPage } from "./DefaultPage/DefaultPage";

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
    <div>
      <ResizablePanelGroup
        direction="vertical"
        className="min-h-screen border rounded-lg"
      >
        <ResizablePanel defaultSize={10}>
          <div className="relative top-0 items-start">
            <Terminal AppState={AppState} setAppState={setAppState} />
            <br />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <DefaultPage AppState={AppState} setAppState={setAppState} />
        </ResizablePanel>
        {AppState.App && AppState.App.DebugPannel && (
          <>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={15}>
              <h1 className="font-extrabold text-black">
                {JSON.stringify(AppState)} ttth
              </h1>
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>
    </div>
  );
};
