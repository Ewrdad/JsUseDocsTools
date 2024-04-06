import { ChevronsRight } from "lucide-react";
import React from "react";
/**
 * @alias Goto
 * @description The goto command to move between pages
 * @param {Object} AppState The current app state
 * @param {Function} setAppState The function that sets the app state
 * @param {Array{strings}} Command The command to run
 * @returns Success status of the command
 */
export const goto = async (AppState, setAppState, Command, navigate) => {
  navigate(Command[1]);

  return true;
};

/**
 * @alias gotoCommandList
 * @description  list of commands provided by set
 *
 */
export const gotoCommandList = {
  Base: {
    name: "goto",
    description: "goto different page in app",
    icon: <ChevronsRight className="w-4 h-4 mr-2" />,
  },
  All: {
    GroupName: "Goto",
    GroupIcon: <ChevronsRight className="w-4 h-4 mr-2" />,
    Commands: ["goto /", "goto /proj", "goto /doc"],
  },
};
