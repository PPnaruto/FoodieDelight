
# Steps to run the Project :

1. Start project by `npm start` command

2. Need to install JSON server since there is no backend, I have used JSON data to assume and implement features
     I.   `npm install json-server`
     II.  start npm server by running command `npx json-server data.json --port 8080`

     Note: data.json is the file name and since I've configure API's with 8080 port, need to run jon-server on 8080 to fetch the data.

3. You will redirected to the login page where you have to login with the credencials
        email :    `pratik.patil@thinkbridge.com`
        password : `Thinkbridge`
    This credentials we should validate from fetching data from backend but for now I am validating using JSON only.


# Features implemented

1. All routes are authenticated. Unless and until admin login, he/she is not able to access other routes/pages.
2. Add Restro, Edit and Delete particular restro (CRUD Operations) has been handled properly.
3. Since application scope was not much complex, `useContext` has been used for the state management. (Other option is `redux` for   complex structure project).
4. API calls has been handle asynchronously without full-reload.
5. Responsivness has implemented.
6. Have kept CSS bare minimum since figma was not been provided for the referenece, mostly focused on functionality.
7. React-Bootstrap has been used in the project.

# Other features could which could be add later

1. Search functionality with Debouncing.
2. Pagination
3. Proper Beatiful CSS.
4. Could add extra details in the forms while registering restro like restro logo, rating, it's field (Indian, Italian, fast food, cafe ) to add image of particualar food on the restro card.
5. After clicking on card instead of showing form filled with data, we can show particularly organized page for that one restro with all the data.



