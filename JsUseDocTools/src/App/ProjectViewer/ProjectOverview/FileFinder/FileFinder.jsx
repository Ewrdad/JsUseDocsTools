import { Paper } from "@mui/material/index";
import { ScrollArea } from "../../../../shadcn/components/ui/scroll-area";
import {
  ResizablePanel,
  ResizablePanelGroup,
  ResizableHandle,
} from "@/shadcn/components/ui/resizable";

/**
 * MARK: File Finder
 * @description A component to find a starting file in a project to do exploration
 * @returns The FileFinder component
 */
export const FileFinder = () => {
  return (
    <Paper className="w-full">
      <ResizablePanelGroup direction="vertical" className="min-h-96">
        <h1 className="p-2 font-bold">From Package.json</h1>
        <ResizablePanel defaultSize={3}>
          <ScrollArea className="w-full h-full p-4 border rounded-md">
            <p> Main: fdfd/dsads</p>
            <p>directories.lib : asdasd</p>
            <p>directories.bin : asdasd</p>
            <p>directories.man : asdasd</p>
            <p>directories.test : asdasd</p>
            <p>directories.example : asdasd</p>
            <p>directories.doc : asdasd</p>
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <h1 className="p-2 font-bold">From root</h1>
        <ResizablePanel defaultSize={3}>
          <ScrollArea className="w-full h-full p-4 border rounded-md">
            <p>./src</p>
            <p>./lib</p>
            <p>./bin</p>
            <p>package.json </p>
            <p>README.md </p>
            <p>index.js </p>
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <h1 className="p-2 font-bold">From Misc</h1>

        <ResizablePanel defaultSize={3}>
          <ScrollArea className="w-full h-full p-4 border rounded-md">
            <p>./src</p>
            <p>./lib</p>
            <p>./bin</p>
            <p>package.json </p>
            <p>README.md </p>
            <p>index.js </p>
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </Paper>
  );
};
