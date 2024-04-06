import { Button } from "../../shadcn/components/ui/button";
import { Input } from "../../shadcn/components/ui/input";
import { Grid } from "@mui/material";
import { FolderOpen, MoveRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/**
 * @alias DefaultPage
 * @description The default page for the app for when no project or file is set
 * @param {Object} AppState The current app state
 * @param {Function} setAppState The function that sets the app state
 * @returns The default page
 */
export const DefaultPage = ({ AppState, setAppState }) => {
  const navigate = useNavigate();
  const [ProjectDir, setProjectDir] = useState("");

  const loadProject = async () => {
    setAppState(prev => {
      return {
        ...prev,
        App: {
          ...prev.App,
          ProjectDir: ProjectDir,
        },
      };
    })
    navigate("/proj");
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-slate-200">
      <h1 className="text-4xl font-bold">Welcome to JsUseDoc Tools</h1>
      <p className="text-lg">Please select a project or file to get started</p>
      <Grid container>
        <Grid item xs={3.5}>
          {" "}
        </Grid>
        <Grid item xs={4}>
          <Input placeholder="File Address..." value={ProjectDir} onChange={(event)=> {setProjectDir(event.target.value)}} />
        </Grid>
        <Grid item xs={2}>
          <Button className="bg-slate-600">
            <FolderOpen />
            Open
          </Button>
          <Button
            className=""
            onClick={() => {
              loadProject();
            }}
          >
            <MoveRight />
            GOTO
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
