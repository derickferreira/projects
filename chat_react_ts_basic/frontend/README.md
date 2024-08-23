# React + TypeScript + Vite + WebSocket

## 🎨 Custom Project Icon

For this project, a custom pixel art icon was created using Piskel. This adds a unique touch to the application, showcasing a personalised design.

# 🗨️ Real-Time Chat Application

## 📖 Description

This project is a real-time chat application inspired by platforms like WhatsApp and Messenger. It utilises WebSockets for real-time communication, providing an instant chat experience between users.

## 🚀 Features

- **Real-Time Messaging:** Send and receive messages instantly using WebSockets.
- **User Authentication:** Simple login system.
- **Simple and Intuitive Interface:** User-friendly UI with easy navigation and use.

## 🛠️ Technologies Used

- **Frontend:**

  - React
  - TypeScript
  - Context API (for global state management)
  - React Router (for navigation)

- **Backend:**
  - Node.js
  - Express
  - WebSocket

## 📦 Project Structure

- **/components:** Contains reusable React components like the chat form and message list.
- **/context:** Manages global contexts, such as `UserContext` for user information and `WebSocketContext` for WebSocket connection.
- **/pages:** Contains application pages, such as the login page and chat page.
- **/websocket:** Handles WebSocket logic, including event handlers.
- **app.ts:** Configures the Express app, including middleware and routes.
- **server.ts:** Starts the HTTP server and sets up WebSocket.

### Prerequisites

- Node.js installed on your machine.

## 🤝 Contribution

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT Licence. See the LICENSE file for more details.
