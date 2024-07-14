import { Paper } from "@mui/material/index";
import { ScrollArea } from "../../../../shadcn/components/ui/scroll-area";

/**
 * MARK: File Finder
 * @description A component to find a starting file in a project to do exploration
 * @returns The FileFinder component
 */
export const FileFinder = () => {
  return (
    <Paper>
      <h1>From Package.json</h1>
      <ScrollArea className="h-[200px] w-full rounded-md border p-4">
        <p> Main: fdfd/dsads</p>
        <p>directories.lib : asdasd</p>
        <p>directories.bin : asdasd</p>
        <p>directories.man : asdasd</p>
        <p>directories.test : asdasd</p>
        <p>directories.example : asdasd</p>
        <p>directories.doc : asdasd</p>
      </ScrollArea>

      <br />
      <h1>From root</h1>
      <ScrollArea className="h-[200px] w-full rounded-md border p-4">
        <p>./src</p>
        <p>./lib</p>
        <p>./bin</p>
        <p>package.json </p>
        <p>README.md </p>
        <p>index.js </p>
      </ScrollArea>
    </Paper>
  );
};
