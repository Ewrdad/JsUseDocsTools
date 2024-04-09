import { useLocation } from "react-router-dom";
/**
 * @alias Debug
 * @description A page that displays the debug information
 * @param {Object} AppState The current app state
 */
export const Debug = ({ AppState }) => {
  const location = useLocation();

  return (
    <div className="p-4">
      <h1>Debug</h1>
      <div className="p-4">
        <h3>Address: {location.pathname}</h3>
        <h2>App State</h2>
        <pre>{JSON.stringify(AppState, null, 2)}</pre>
      </div>
    </div>
  );
};
