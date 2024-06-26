import { debug } from "./Core/debug/debug";
import { set } from "./Core/set/set";
import { goto } from "./Core/goto/goto";

/**
 * @alias RunCommands
 * @description Central list of commands and how they get executed. Passed from terminal to individual functions
 * @param {Object} AppState The current state of the app
 * @param {Function} setAppState The function that sets the state of the app
 * @param {String} Command The command to run
 * @param {Function} navigate The function that navigates to a different page
 *
 */
export const CommandHandle = async (
  AppState,
  setAppState,
  Command,
  navigate,
) => {
  //Split Command into space array
  const CommandArray = Command.split(" ");
  console.log("CommandArray: ", CommandArray);
  //Switch what command run based on CommandArray[0]
  switch (CommandArray[0].toLocaleLowerCase()) {
    case "debug":
      //Run Debug Command

      return debug(AppState, setAppState, CommandArray);

    case "set":
      //Run Set Command
      return set(AppState, setAppState, CommandArray);

    case "goto":
      //Run Goto Command
      return goto(AppState, setAppState, CommandArray, navigate);
    default:
      //Run Default Command
      console.log("error: Command not found");
      return false;
  }
};

import { setCommandList as setCommands } from "./Core/set/set";
import { gotoCommandList } from "./Core/goto/goto";
import { Navigation, Bug } from "lucide-react";
/**
 * @alias GetCommandList
 * @description A function that returns the list of commands
 */
export const GetCommandList = (CommandList, setCommandList) => {
  /**
   * @alias PublishCommands
   * @description A sub function that publishes commands to the list of commands on ui
   * @param {Object} BaseCommand An object representing the core command
   * @param {Object} AllCommands An object representing all the commands possible
   */
  const PublishCommand = (BaseCommand, AllCommands) => {
    setCommandList((prev) => {
      return {
        Base: [...prev.Base, BaseCommand],
        All: [...prev.All, AllCommands],
      };
    });
  };

  PublishCommand(gotoCommandList.Base, gotoCommandList.All);
  PublishCommand(
    {
      name: "debug",
      description: "debugs the app",
      icon: <Bug className="w-4 h-4 mr-2" />,
    },
    {
      GroupName: "Debug",
      GroupIcon: <Bug className="w-4 h-4 mr-2" />,
      Commands: ["debug show", "debug hide", "debug debugger"],
    },
  );

  PublishCommand(setCommands.Base, setCommands.All);
  return "success";
};
