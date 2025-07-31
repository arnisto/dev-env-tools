import { useMemo } from "react";
import { useDevTools } from "../DevToolsProvider";

interface DevToolsModalProps {
  onClose: () => void;
  views?: string[];
  envs?: string[];
  tags?: string[];
}

export const DevToolsModal: React.FC<DevToolsModalProps> = ({
  onClose,
  views = ["Admin View", "Client View", "Guest View"],
  envs = ["development", "preproduction"],
  tags = [
    "Admin",
    "Client",
    "Guest",
    "In Progress",
    "Completed",
    "Api Calls Needed",
    "All Tags",
    "No Tags",
  ],
}) => {
  const { view, setView, environment, setEnvironment, tag, setTag } =
    useDevTools();

  // 🧠 Dynamic description based on current selections
  const previewText = useMemo(() => {
    return `Interface components related to "${view}" in "${environment}" environment are now active and will be rendered conditionally.`;
  }, [view, environment]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          background: "#ffffff",
          color: "#333",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
          width: "400px",
          maxWidth: "90%",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>Dev Tools Configuration</h2>
        <p style={{ fontSize: "14px", marginBottom: "20px" }}>
          Use this modal to toggle active views and environments. Your changes
          will reflect instantly across the app.
        </p>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "4px" }}>View:</label>
          <select
            value={view}
            onChange={(e) => setView(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              color: "#333",
            }}
          >
            {views.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "4px" }}>
            Environment:
          </label>
          <select
            value={environment}
            onChange={(e) => setEnvironment(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              color: "#333",
            }}
          >
            {envs.map((env) => (
              <option key={env}>{env}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "4px" }}>Tag:</label>
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              color: "#333",
            }}
          >
            {tags.map((t) => (
              <option
                key={t}
                style={{
                  color:
                    t === "Admin" ? "red" : t === "Client" ? "blue" : "green",
                }}
              >
                {t}
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            backgroundColor: "#f1f1f1",
            padding: "12px",
            borderRadius: "6px",
            fontSize: "13px",
            color: "#555",
            marginTop: "10px",
          }}
        >
          <strong>Preview:</strong> {previewText}
        </div>

        <button
          onClick={onClose}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "6px",
            background: "#e0e0e0",
            color: "#333",
            border: "none",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
