import { Paper, Typography } from "@mui/material";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shadcn/components/ui/tabs";
import { useState } from "react";

/**
 * @alias MainFiles
 * @description Displays the main files of the app such as readme.md, App.js or App.jsx etc
 * @returns Main Files Commponnetn
 *
 */
export const MainFiles = () => {
  /**
   * @alias Files
   * @description List of key files to be displayed
   *
   * TODO: Switch to use query
   * TODO: Link to a function on backend to get the files
   */
  const [Files, setFiles] = useState([
    {
      name: "App.js",
      path: "src/App.js",
      content: "THis Is a main app .js \n with multiple lines of code",
    },
    {
      name: "readme.md",
      path: "readme.md",
      content: "THis Is a main app .js \n with multiple lines of code",
    },
  ]);

  return (
    <Paper>
      <Tabs defaultValue={Files[0].name} className="w-[400px]">
        <TabsList>
          {Files.map((file, index) => (
            <TabsTrigger value={file.name}>{file.name}</TabsTrigger>
          ))}
        </TabsList>

        {Files.map((file, index) => (
          <TabsContent value={file.name}>
            <p>{file.path}</p>
            <p>{file.content}</p>
          </TabsContent>
        ))}
      </Tabs>
    </Paper>
  );
};
