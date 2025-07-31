import { useState } from "react";
import { useDevTools } from "../DevToolsProvider";
import { DevToolsModal } from "./DevToolsModal";

/**
 * DevToolsButton Component
 *
 * This component renders a button that toggles the display of a DevToolsModal.
 * The button is only visible in non-production environments.
 *
 * @returns {JSX.Element} The JSX for the DevToolsButton component.
 */
export const DevToolsButton: React.FC<{
  position?: "left" | "right";
  customStyles?: React.CSSProperties;
  views?: string[];
  envs?: string[];
  tags?: string[];
}> = ({ position = "right", customStyles, views, envs, tags }) => {
  const { view, environment, tag } = useDevTools();
  // State to control the visibility of the DevToolsModal
  const [open, setOpen] = useState(false);

  // If the current environment is production, do not render the button
  if (process.env.NODE_ENV === "production") return null;

  return (
    <>
      {/* Button to toggle the DevToolsModal */}
      <button
        style={{
          position: "fixed",
          bottom: 20,
          right: position === "right" ? 20 : undefined,
          left: position === "left" ? 20 : undefined,
          padding: "10px 16px",
          borderRadius: 8,
          background: "#222",
          color: "#fff",
          ...customStyles,
        }}
        onClick={() => setOpen(!open)} // Toggle the open state on button click
      >
        DevTools
        {` (${view || "No View"} - ${environment || "No Environment"} - ${
          tag || "No Tag"
        })`}
      </button>
      {/* Conditionally render the DevToolsModal if the open state is true */}
      {open && (
        <DevToolsModal
          onClose={() => setOpen(false)}
          views={views}
          envs={envs}
          tags={tags}
        />
      )}
    </>
  );
};
