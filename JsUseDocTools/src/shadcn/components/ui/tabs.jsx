import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "/src/shadcn/lib/utils";

const Tabs = TabsPrimitive.Root;

/**
 * @alias TabsList
 * @description A list of tabs to select between
 *
 * @example <TabsList>
              <TabsTrigger value={file.name}>{file.name}</TabsTrigger>
          </TabsList>
 * @shadcnui
 */
const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

/**
 * @alias TabsTrigger
 * @description The component/button for sleecting a tab
 * @param {string} value The value of the tab used to identify the tab selected
 * @example <TabsTrigger value={file.name}>{file.name}</TabsTrigger>
 * @shadcnui
 */
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

/**
 * @alias TabsContent
 * @description The content of the tab selected
 * @param {string} value The value of the tab used to identify the tab selected
 * @example <TabsContent value={file.name}> <p>{file.path}</p> <p>{file.content}</p> </TabsContent>
 *
 * @shadcnui
 */
const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
