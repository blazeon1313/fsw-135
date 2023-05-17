# FSW-135 CAPSTONE CLIMATE ACTION 101

## DESCRIPTION

For theis app I created a login screen, a way to post climate issues, and to have those issues listed on the page. I included a navbar to navigate the site. Once logged in the user can post issues and have their issues listed on their profile page.

## Libraries and tools used

- React
- Express JS
- Node
- Axios
- Morgan
- Nodemon
- HTML
- CSS
- JSONWEBTOKEN
- dotenv
- Mongoose (MongoDb)
- VS Code for coding the project
- Postman for testing the backend
- Chrome Browser for testing the fronted

## Folders/Files

**Folder: Client (React files)**
    - package.json
    - src>index.js
    - src>App.js
    - src>App.css
    - src>components>Auth.js
    - src>components>AuthForm.js
    - src>components>Issues.js
    - src>components>IssuesForm.js
    - src>components>IssuesList.js
    - src>components>Navbar.js
    - src>components>Profile.js
    - src>components>ProtectedRoute.js
    - src>components>Public.js
    - src>context>UserProvider.js

**Folder: Server (Express files) (Mongoose for database)**
    - server.js
    - models>comment.js
    - models>issue.js
    - models>user.js
    - routes>authRouter.js
    - routes>commentRouter.js
    - routes>issueRouter.js

## Challenges

Some of the challenges that I had with this project were getting mongodb connected. Once that was figured out I was ble to start the fronted of the project. The frontend side was a challenge all in its own with adding a login parameter to the app. 

The next challenge is getting the issues to show up properly when they are added to the database. This challenge is still ongoing as the course is coming to completion. 