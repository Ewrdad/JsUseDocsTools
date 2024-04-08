import { Grid, Paper } from "@mui/material";
import { MainFiles } from "./MainFiles/MainFiles";
/**
 * @alias ProjectOverview
 * @description A page that displays an overview of a project
 * @param {Object} AppState The current app state
 * @param {Function} setAppState The function that sets the app state
 * @returns The ProjectOverview page
 */
export const ProjectOverview = ({ AppState, setAppState }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-5 bg-slate-200">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 className="text-4xl font-bold">Project Overview</h1>
        </Grid>
        <Grid item xs={12}>
          <p className="text-lg">This is the overview of the project</p>
        </Grid>

        <Grid item xs={12} md={8} xl={8}>
          <MainFiles />
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <h2 className="text-3xl font-bold">Project Name</h2>
          <p className="text-lg">The name of the project</p>
        </Grid>
      </Grid>
    </div>
  );
};
