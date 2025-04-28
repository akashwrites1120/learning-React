import React, { useState } from "react";

const NotificationCount = () => {
  return (
    <div style={{ background: "#d3e0a8", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px" }}>
      <ToggleMessage />
      <ToggleMessage />
      <ToggleMessage />
    </div>
  );
};

const ToggleMessage = () => {
  let [notificationCount, setNotificationCount] = useState(0);

  function increment() {
    setNotificationCount(notificationCount + 1);
  }

  function decrement() {
    setNotificationCount(notificationCount - 1);
  }

  return (
    <div>
      <button onClick={increment}>Increase Count</button>{notificationCount}
      <button onClick={decrement}>Decrese Count</button>
    </div>
  );
};

export default NotificationCount;
