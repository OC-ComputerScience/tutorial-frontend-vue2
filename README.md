# Tutorial Frontend in Vue 2

This application allows users to create and maintain a list of tutorials that can have multiple lessons within. Please visit https://github.com/OC-ComputerScience/tutorial-backend for the backend repository.

#### Please note:
- This project utilizes **Google Authentication** to allow users to log in.
- You will need to provide a **Client ID from Google** for this project to run locally.

## Project Setup
1. Clone the project into your **XAMPP/xamppfiles/htdocs** directory.
```
git clone https://github.com/OC-ComputerScience/tutorial-frontend-vue2.git
```

2. Install the project.
```
npm install
```

3. Configure Apache to point to Node for API requests.
    - In XAMPP, find the Edit/Configure button for Apache.
    - Edit the conf file, labeled httpd.conf. 
    - It may warn you when opening it but open it anyway.
    - Add the following line as the last line:
    
    ```
    ProxyPass /tutorial http://localhost:3100/tutorial 
    ```

    - Find the following line and remove the # at the front of the line.
    
    ```
    LoadModule proxy_http_module modules/mod_proxy_http.so
    LoadModule proxy_http2_module modules/mod_proxy_http2.so
    ```
    
    - Save the file and exit XAMPP.

4. In order to make the Google authentication work, have a project registered with the **Google Developer console**.
    - https://console.developers.google.com/
    - Enable **Google+ API** and **Google Analytics API**.
    - Enable an **OAuth consent screen**.
    - Create an **OAuth client ID**.
    - Save your **Client ID** and **Client Secret** in a safe place.

4. Add a local **.env** file and make sure the **client ID** is the one you have registered with Google.
    - VUE_APP_CLIENT_ID = '**your-google-client-id**'
    - VUE_APP_CLIENT_URL = 'http://localhost:8081'
    - VUE_APP_API_URL = 'https://accounts.google.com/gsi/client'

5. Compile and run the project locally.
```
npm run serve
```

6. (Optional) Compile the project for production.
```
npm run build
```

7. (Optional) Lint and fix the project files.
```
npm run lint
```
