Recreated Website for React Test (Frontend and Backend Information)

I took liberties to change up the test and I used Nextjs for the frontend to demonstrate static generation with Nextjs for faster page loading. 

I also set up authentication with Magic and the ability to post data to a backend, set up with Strapi.io. 

I was given the task of recreating a certain layout for a sidebar which is a collapsable as well as a profile 'page' that models a mobile device. 

My goal was not only to model this but to also built a 'fullstack' application to demonstrate more than what was required of me. 

If desired, the app is in a state in which it could be deployed, frontend with Vercel and backend with Heroku (probably). 

Application Flow: 
- Simple landing page with button/link to go to login page
- Simple login page. Accepts an email, validates with Magic and once you navigate back to the app the 'profile' page is loaded. 
- Main Profile section. I recreated the image asked for using a combination of Material UI Icons and custom CSS. 
- The SideNavbar is a Material UI component that I altered to reflect the component in the test assets. 
- Once you fill out the Username and Phone number fields (the email is populated based off of the email entered when you logged in), you can post the data to the database. Sidenote: Strapi is awesome. It is a frontend for creating backends and I love it. 
- In the SideNavbar, you can click Logout and it logs you out of the app. 

Future Things I would Add/Finish Out: 
- Getting the user data. This is not super important with the incredibly small scale of the simple profile information and could be done relatively quickly. 
- A way to upload a new image file and change the image off of that file upload button. 



