# Tutorial Frontend in Vue 2

This application allows users to create and maintain a list of tutorials that can have multiple lessons within. Please visit https://github.com/OC-ComputerScience/tutorial-backend for the backend repository.

#### Please note:
- This project utilizes **Google Authentication** to allow users to log in.
- You will need to provide a **Client ID from Google** for this project to run locally.

## Project Setup
1. Clone the project.
```
git clone https://github.com/OC-ComputerScience/tutorial-frontend-vue2.git
```

1. Install the project.
```
npm install
```

2. Make sure you have a project registered with the **Google Developer console**.
    - https://console.developers.google.com/
    - Enable **Google+ API** and **Google Analytics API**.
    - Enable an **OAuth consent screen**.
    - Create an **OAuth client ID**.
    - Save your **Client ID** and **Client Secret** in a safe place.

3. Add a local **.env** file and make sure the **client ID** is the one you have registered with Google.
    - VUE_APP_CLIENT_ID = '**your-google-client-id**'
    - VUE_APP_CLIENT_URL = 'http://localhost:8081'
    - VUE_APP_API_URL = 'https://accounts.google.com/gsi/client'

4. Compile and run the project locally.
```
npm run serve
```

5. (Optional) Compile the project for production.
```
npm run build
```

6. (Optional) Lint and fix the project files.
```
npm run lint
```
