/**
 * @alias ProjectOverview
 * @description A page that displays an overview of a project
 * @param {Object} AppState The current app state
 * @param {Function} setAppState The function that sets the app state
 * @returns The ProjectOverview page
 */
export const ProjectOverview = ({ AppState, setAppState }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-slate-200">
      <h1 className="text-4xl font-bold">Project Overview</h1>
      <p className="text-lg">This is the overview of the project</p>
    </div>
  );
};
