import React from "react";
import { Cog } from "lucide-react";

/**
 * @alias set
 * @description Mannually alter variables in AppState
 * @param {Object} AppState The current app state
 * @param {Function} setAppState The function that sets the app state
 * @param {Array{strings}} Command The command to run
 *
 */
export const set = async (AppState, setAppState, Command) => {
  console.log("Set Command: ", Command);

  switch (Command[1].trim()) {
    case "App":
      setAppState((prev) => {
        return {
          ...prev,
          App: { ...prev.App, [Command[2]]: ParseCommandValue(Command[3]) },
        };
      });
      return true;
    case "Page":
      setAppState((prev) => {
        return {
          ...prev,
          Page: { ...prev.Page, [Command[2]]: ParseCommandValue(Command[3]) },
        };
      });
      return true;
    case "Terminal":
      setAppState((prev) => {
        return {
          ...prev,
          Terminal: {
            ...prev.Terminal,
            [Command[2]]: ParseCommandValue(Command[3]),
          },
        };
      });
      return true;
    default:
      console.log("error: Command not found");
      return false;
  }
};

/**
 * @alias ParseCommandValue
 * @description Convert a string to a boolean or integer for use in the set command
 * @param {String} Value The value to convert
 * @returns The converted value
 */
export const ParseCommandValue = (Value) => {
  if (Value === "true") {
    return true;
  } else if (Value === "false") {
    return false;
  } else if (!isNaN(Value)) {
    return parseInt(Value);
  } else {
    return Value;
  }
};

/**
 * @alias setCommandList
 * @description  list of commands provided by set
 *
 */
export const setCommandList = {
  Base: {
    name: "set",
    description: "Mannually alter variables in AppState",
    icon: <Cog className="w-4 h-4 mr-2" />,
  },
  All: {
    GroupName: "Core",
    GroupIcon: <Cog className="w-4 h-4 mr-2" />,
    Commands: [
      "set App DebugPannel true",
      "set App DebugPannel false",
      "set Page <Attribute> <Value>",
      "set Terminal <Attribute> <Value>",
      "set App <Attribute> <Value>",
    ],
  },
};
