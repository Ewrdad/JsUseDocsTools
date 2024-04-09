import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "/src/shadcn/lib/utils";
import { Dialog, DialogContent } from "/src/shadcn/components/ui/dialog";

/**
 * @alias Command
 * @description A component to wrap and identify a generic command section
 * @param className - The tailwind styling overides for the command section.
 * @example<Command className="top-0 object-top border rounded-lg shadow-md "> ..... </Command>
 *
 *
 * @shadcnui
 */
const Command = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

/**
 * @alias CommandDialog
 * @description A dialog box to input commands similar to MacOS search
 *
 * @shadcnui
 * */
const CommandDialog = ({ children, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogContent className="p-0 overflow-hidden shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

/**
 * @alias CommandInput
 * @description A input box for the command component
 * @param className - The tailwind styling overides for the input box.
 * @param value - The value of the input box
 * @param onChangeCapture - The function to be called when the input is changed
 * @param onKeyDown - The function to be called when a key is pressed
 * @example <CommandInput
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
 *
* @shadcnui
 */
const CommandInput = React.forwardRef(({ className, ...props }, ref) => (
  <div className="flex items-center px-3 border-b" cmdk-input-wrapper="">
    <Search className="w-4 h-4 mr-2 opacity-50 shrink-0" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

/**
 * @alias CommandList
 * @description A wrapper for the list of commands
 * @example <CommandList className="h-full overflow-y-scroll bg-slate-400`">
            <CommandEmpty className="items-center justify-center h-full mb-auto overflow-clip ">
              <div className="self-center h-full ">No results found.</div>
            </CommandEmpty>
            <CommandGroup heading="Base">
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
            
            </CommandGroup>
            </CommandList>
 *
 *
 *
 * @shadcnui
 */
const CommandList = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("h-full overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

/**
 * @alias CommandEmpty
 * @description A component to display when no results are found
 * @example <CommandEmpty className="items-center justify-center h-full mb-auto overflow-clip ">
            <div className="self-center h-full ">No results found.</div>
          </CommandEmpty>
 * @param className - The tailwind styling overides for the empty component.
  * @shadcnui
 */
const CommandEmpty = React.forwardRef((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-sm text-center"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

/**
 * @alias CommandGroup
 * @description A component to group commands into one section
 * @param heading - The heading of the group
 * @example <CommandGroup heading="Base">
 <CommandItem key={command.name}>
    {command.icon}
    <span>{command.name}</span>
    <CommandShortcut>{command.description}</CommandShortcut>
  </CommandItem>
</CommandGroup>
 *
 * @shadcnui
 */
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

/**
 * @alias CommandSeparator
 * @description A component to separate command groups/commands, looks like a line break generally
 * @example <CommandSeparator />
 *
 * @shadcnui
 *
 */
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
