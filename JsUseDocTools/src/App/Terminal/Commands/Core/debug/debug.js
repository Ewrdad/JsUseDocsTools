/**
 * @alias debug
 * @description Run the debug command elements
 * @param {Object} AppState The current app state
 * @param {Function} setAppState The function that sets the app state
 * @param {Array{strings}} Command The command to run
 */
export const debug = async (AppState, setAppState, Command) => {
  switch (Command[1]) {
    case "test":
      console.log("Debug Test Command");
      return true;
    case "show":
      setAppState((prev) => {
        return { ...prev, App: { ...prev.App, DebugPannel: true } };
      });
      return true;
    case "hide":
      setAppState((prev) => {
        return { ...prev, App: { ...prev.App, DebugPannel: false } };
      });
      return true;
    default:
      console.log("error: Command not found");
      return false;
  }
};
