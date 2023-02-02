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

5. In order to make the **Cypress testing** work, get a **Refresh Token** for your Google application through the **Google Developers OAuth 2.0 Playground**.
    - https://developers.google.com/oauthplayground/
    - Click the gear button on the right.
    - Check **Use your own OAuth credentials**.
    - Configure the Playground to use your Google project's **client ID** and **client secret**.
    - On the left, find Google OAuth2 API v2 and check all three items.
        - https://www.googleapis.com/auth/userinfo.email
        - https://www.googleapis.com/auth/userinfo.profile
        - openid
    - Click **Authorize APIs**.
    - Click **Exchange authorization code for tokens**.
    - Save the generated **Refresh token** in a safe place.

6. Add a local **.env** file and make sure the **client ID** and **client secret** are the values you have registered with Google and that the **refresh token** is the value you generated through the OAuth 2.0 Playground.
    - VUE_APP_CLIENT_ID = '**your-google-client-id**'
    - VUE_APP_CLIENT_SECRET = '**your-google-client-secret**'
    - VUE_APP_REFRESH_TOKEN = '**your-google-refresh-token**'
    - VUE_APP_CLIENT_URL = 'http://localhost:8081'
    - VUE_APP_API_URL = 'https://accounts.google.com/gsi/client'

7. Compile and run the project locally.
```
npm run serve
```

8. Test your project.
    - Note that your frontend and backend must be running for testing to be successful.
```
npm run test
```

9. Test your project and watch the tests run with Cypress.
```
npm run test:open
```

10. (Optional) Compile the project for production.
```
npm run build
```

11. (Optional) Lint and fix the project files.
```
npm run lint
```
