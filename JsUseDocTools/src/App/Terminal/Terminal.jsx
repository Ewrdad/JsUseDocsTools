import Grid from "@mui/material/Grid";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/shadcn/components/ui/command";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../shadcn/components/ui/button";

import { GetCommandList, CommandHandle } from "./Commands/Commands";

/**
 * @alias Terminal
 * @description A terminal component and all its related state to control the react app
 * @returns The terminal box and related
 */
export const Terminal = ({ AppState, setAppState }) => {
  const Input = useRef(null);
  const [AppCommandList, setAppCommandList] = useState({
    Base: [],
    All: [],
  });
  const [CurrentCommand, setCurrentCommand] = useState("");
  const [CommandSuccess, setCommandSuccess] = useState(true);

  useEffect(() => {
    setAppCommandList({ Base: [], All: [] });
    GetCommandList(AppCommandList, setAppCommandList);

    const down = (e) => {
      if (e.key === "c" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        Input.current.focus();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const executeCommand = async () => {
    console.log("Command entered: ", CurrentCommand);
    const lastResult = await CommandHandle(
      AppState,
      setAppState,
      CurrentCommand,
    );
    if (lastResult) {
      setCurrentCommand("");
      setCommandSuccess(true);
    } else {
      setCommandSuccess(false);
    }
    Input.current.focus();
  };

  return (
    <Grid container>
      <Command className="top-0 object-top border rounded-lg shadow-md ">
        <Grid item xs={12} className="h-1">
          <CommandInput
            autoFocus
            ref={Input}
            placeholder="Enter a command ... [CTRL + C]"
            className={CommandSuccess ? "bg-white top-0 " : "bg-red-400 top-0"}
            value={CurrentCommand}
            onChangeCapture={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                executeCommand();
              }
            }}
          />
          <br className="h-6" />
        </Grid>
        <Grid item xs={12}>
          <Button
            className="w-full bg-green-700"
            onClick={() => {
              executeCommand();
            }}
          >
            Submit or hit "Enter"
          </Button>
        </Grid>
        <Grid item xs={12}>
          <CommandList className="h-full overflow-y-scroll bg-slate-400`">
            <CommandEmpty className="items-center justify-center h-full mb-auto overflow-clip ">
              <div className="self-center h-full ">No results found.</div>
            </CommandEmpty>
            <CommandGroup heading="Base">
              {AppCommandList.Base.map((command) => (
                <div
                  onClick={() => {
                    setCurrentCommand(command.name);
                  }}
                >
                  <CommandItem key={command.name}>
                    {command.icon}
                    <span>{command.name}</span>
                    <CommandShortcut>{command.description}</CommandShortcut>
                  </CommandItem>
                </div>
              ))}
            </CommandGroup>
            <CommandSeparator />
            {AppCommandList.All.map((group) => {
              return (
                <CommandGroup
                  key={group.GroupName}
                  heading={group.GroupName}
                  icon={group.GroupIcon}
                >
                  {group.Commands.map((command) => (
                    <div
                      onClick={() => {
                        setCurrentCommand(command);
                      }}
                    >
                      <CommandItem key={command}>
                        {group.GroupIcon}
                        <span>{command}</span>
                      </CommandItem>
                    </div>
                  ))}
                </CommandGroup>
              );
            })}
          </CommandList>
        </Grid>
      </Command>
    </Grid>
  );
};
