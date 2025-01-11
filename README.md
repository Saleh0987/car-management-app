# Car Management Application

A React-based application to manage a list of cars with features such as adding, editing, deleting, searching, and sorting cars. The application also uses **localStorage** to persist data, ensuring that cars are saved even after a page refresh.

---

## Features

- **Add New Cars**: Add car details such as model, price, color, manufacture date, and an optional image.
- **Edit Cars**: Update the details of existing cars.
- **Delete Cars**: Remove selected cars from the list.
- **Search Cars**: Search cars by model name in real time.
- **Bulk Actions**: Select multiple cars to delete them in one action.
- **Data Persistence**: Cars are saved in **localStorage** to retain data across page reloads.

---

## Tech Stack

### Frontend
- **React**: Component-based UI development.
- **Material-UI (MUI)**: Pre-designed UI components for a modern look.
- **React-Redux**: State management for managing car data efficiently.
- **React Hot Toast**: Notifications for user feedback.

### Utilities
- **uuid**: Generate unique IDs for each car.
- **localStorage**: Persist data locally in the browser.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Saleh0987/car-management-app.git
   cd car-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   ---

   ## Live Link

- https://car-management23.vercel.app/
