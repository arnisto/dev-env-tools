import React from "react";
import { useDevTools } from "../DevToolsProvider";

export const withDevVisibility = (
  Component: React.FC,
  options: { allowedViews?: string[]; allowedEnvs?: string[] }
) => {
  return () => {
    const { view, environment } = useDevTools();
    if (
      (options.allowedViews && !options.allowedViews.includes(view)) ||
      (options.allowedEnvs && !options.allowedEnvs.includes(environment))
    )
      return null;
    return <Component />;
  };
};
