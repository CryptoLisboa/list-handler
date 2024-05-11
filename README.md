## Bags Leaderboard App

### Description

This React Native + Expo project showcases a simple but efficient application that displays a leaderboard and allows for user profile lookups. Built with TypeScript, the app leverages the React Navigation stack for navigation between views and utilizes `react-query` for fetching and managing server state. The main focus is on performance, specifically targeting quick startup, low memory usage, and minimizing backend requests.

### Features

-   **Leaderboard Tab**: Displays a list of users fetched from an API, including profile pictures, usernames, and ranks.
-   **Profile Lookup Tab**: Allows users to search for profiles by username and view details including profile picture, username, and rank.

### Project Setup

#### Prerequisites

Ensure you have the following installed:

-   Node.js (v14 or newer)
-   npm (typically comes with Node.js)
-   Expo CLI:
-   npm install -g expo-cli

#### Installation

1. Clone the repository:

git clone https://github.com/CryptoLisboa/list-handler.git

2. Navigate to the project directory:
   cd list-handler

3. Install dependencies:
   npm install

#### Running the App

1. Start the project:
   expo start

2. Open the app in an iOS or Android simulator, or on a physical device using the Expo Go app by scanning the QR code displayed in the command line.

### Project Structure

-   `App.tsx`: The entry point of the application. Sets up the navigation stack and global providers.
-   `src/`: Contains the application source code.
-   `components/`: React components for the application views.
-   `services/`: Services for API requests.
-   `types/`: TypeScript types and interfaces for structured coding.

### API Endpoints

-   **GET Leaderboard**: `https://api.bags.fm/api/v1/user/get_user_leaderboard`
-   **GET User Detail**: `https://api.bags.fm/api/v1/user/:username`

### Best Practices

-   **Efficient Data Fetching**: The app uses `react-query` for data fetching and caching to minimize unnecessary network requests.
-   **Optimized List Rendering**: Utilizes `FlashList` from Shopify for efficient list rendering.

### Contributions

Contributions are welcome! Please open an issue to discuss proposed changes or open a pull request with your improvements.

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
