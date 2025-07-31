import React, { createContext, useContext, useMemo, useState } from "react";

const DevToolsContext = createContext<any>(null);

export const DevToolsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [view, setView] = useState("Admin View");
  const [environment, setEnvironment] = useState("development");
  const [tags, setTags] = useState("All Tags");

  const contextValue = useMemo(
    () => ({
      view,
      setView,
      environment,
      setEnvironment,
      tags,
      setTags,
    }),
    [view, environment, tags]
  );

  return (
    <DevToolsContext.Provider value={contextValue}>
      {children}
    </DevToolsContext.Provider>
  );
};

// Export a custom hook called useDevTools that uses the useContext hook to access the DevToolsContext
/**
 * A custom hook that provides access to the DevTools context.
 * @returns {DevToolsContext} The current DevTools context value.
 */
export const useDevTools = () => useContext(DevToolsContext);
