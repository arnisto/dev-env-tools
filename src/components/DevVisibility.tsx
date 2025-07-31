import React from "react";
import { useDevTools } from "../DevToolsProvider";

// Define the props for the DevVisibility component
interface DevVisibilityProps {
  allowedViews?: string[];
  allowedEnvs?: string[];
  allowedTags?: string[];
  children: React.ReactNode;
}

// Define the DevVisibility component
export const DevVisibility: React.FC<DevVisibilityProps> = ({
  allowedViews,
  allowedEnvs,
  allowedTags,
  children,
}) => {
  // Use the useDevTools hook to get the current view, environment, and tag
  const { view, environment, tag } = useDevTools();

  // Check if the view, environment, and tag are allowed
  const isVisible =
    (!allowedViews || allowedViews.includes(view)) &&
    (!allowedEnvs || allowedEnvs.includes(environment)) &&
    (!allowedTags || allowedTags.includes(tag));

  // If the view, environment, and tag are not allowed, return null
  if (!isVisible) return null;

  // Otherwise, return the children
  return <>{children}</>;
};

{
  /* <DevVisibility allowedViews={["Admin View"]} allowedEnvs={["development"]}>
  <AdminDebugPanel />
</DevVisibility>

<DevVisibility allowedTags={["Api Calls Needed", "In Progress"]}>
  <ComponentNeedingApiMock />
</DevVisibility> */
}
