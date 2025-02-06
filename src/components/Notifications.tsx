import React from "react";

const Notifications: React.FC = () => {
  const notifications = [
    { id: 1, message: "You received $20 in royalties!", type: "success" },
    { id: 2, message: "New asset added to the marketplace.", type: "info" },
  ];

  return (
    <div className="container">
      <h2 className="text-3xl font-bold mb-4">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className={`alert alert-${notification.type}`}>
            {notification.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
