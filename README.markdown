# 🛠️ DevTools Modal System

A flexible and extensible development configuration toolkit for React applications. This system empowers developers to toggle views, environments, and component tags dynamically through a sleek modal interface, with real-time feedback and conditional rendering capabilities.

## 📖 Purpose

The DevTools Modal System enhances the developer experience by:
- Enabling seamless switching between views (e.g., Admin, Client, Guest) and environments (e.g., development, preproduction).
- Attaching dynamic tags to components (e.g., "In Progress", "Completed").
- Conditionally rendering components based on the current configuration.
- Providing real-time feedback via a modal interface.
- Logging configuration changes for debugging and transparency.

---

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-org/devtools-modal
   cd devtools-modal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Wrap your app with the provider**:
   ```tsx
   import { DevToolsProvider } from './DevToolsProvider';

   const App = () => (
     <DevToolsProvider>
       <YourAppRoutes />
     </DevToolsProvider>
   );
   ```

---

## 🧩 Components

### `DevToolsModal.tsx`
A customizable modal for toggling views, environments, and tags.
- **Props**:
  ```ts
  interface DevToolsModalProps {
    onClose: () => void;
    views?: string[];
    envs?: string[];
    tags?: string[];
  }
  ```
- **Usage**:
  ```tsx
  <DevToolsModal onClose={closeModal} />
  ```

### `DevVisibility.tsx`
Conditionally renders children based on the selected view, environment, or tags.
- **Props**:
  ```ts
  interface DevVisibilityProps {
    allowedViews?: string[];
    allowedEnvs?: string[];
    allowedTags?: string[];
    children: React.ReactNode;
  }
  ```
- **Usage**:
  ```tsx
  <DevVisibility allowedViews={['Admin View']} allowedEnvs={['development']}>
    <AdminPanel />
  </DevVisibility>
  ```

### `withDevVisibility.tsx`
A higher-order component (HOC) for wrapping components with conditional visibility logic.
- **Usage**:
  ```tsx
  const ControlledComponent = withDevVisibility(MyComponent, {
    allowedViews: ['Client View'],
    allowedEnvs: ['preproduction'],
  });
  ```

### `RecentChangesFeed.tsx`
Displays a feed of recent configuration changes for debugging and tracking.
- **Usage**:
  Log changes programmatically:
  ```ts
  setChanges(prev => [
    ...prev,
    {
      timestamp: new Date().toLocaleTimeString(),
      description: `View changed to "${view}"`,
    },
  ]);
  ```

---

## ⚙️ Configuration

If no props are provided, `DevToolsModal` defaults to:
```ts
views = ['Admin View', 'Client View', 'Guest View'];
envs = ['development', 'preproduction'];
tags = [
  'Admin', 'Client', 'Guest', 'In Progress',
  'Completed', 'Api Calls Needed', 'All Tags', 'No Tags'
];
```

Customize by passing props:
```tsx
<DevToolsModal
  views={['Team', 'Manager']}
  envs={['staging', 'prod']}
  tags={['Beta', 'Stable']}
/>
```

---

## 🌍 Open Source & Contributions

This project is open source and welcomes contributions from the community!

### 🤝 How to Contribute

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/my-improvement
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add my improvement"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/my-improvement
   ```
5. Open a Pull Request with a clear description of your changes.

### 💡 Contribution Ideas
- Support for multi-select tags.
- Integration with context-aware routing.
- A visual component tree inspector.
- Enhanced `RecentChangesFeed` with time-based grouping or filtering.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, adapt, or extend it for your development needs.

---

Built with ❤️ for developers who value clean, efficient, and flexible debugging tools.