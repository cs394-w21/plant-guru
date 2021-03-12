# PlantGuru
PlantGuru is an app that can help you find plants to live in your space. 
## You can...
1. Input your room’s attributes for a personalized list of plant recommendations
2. Search the PlantGuru database for plants
3. Create a list of “Favorites” for later reference
## Setup Instructions
1. Run ```npm install```
2. Setup your environment (Expo, React Native, and Node). Follow these [steps](https://courses.cs.northwestern.edu/394/intro-react-native-deploy.php)
3. Deploy the web app to a public host. Follow these [steps](https://courses.cs.northwestern.edu/394/intro-react-native-deploy.php)
4. [Add a Realtime Database to your firebase project, register your app with the project](https://courses.cs.northwestern.edu/394/intro-react-native-firebase.php). 
After registering your app, copy the firebase config shown on screen into **firebase.js**. 
5. Copy and paste the encrypted key returned by ```firebase login:ci``` to the **FIREBASE_DEPLOY_TOKEN** secret in the **Settings** tab of this repo.
6. Create a Google sheet with the plant data (sample shown below). Make sure that the sheet is viewable by anyone with the link. Follow these [instructions](https://sites.google.com/a/ccpsnet.net/googletraining/faq/FAQ-Drive/how-do-i-publish-a-sheet-to-the-web-and-what-does-that-mean) to publish your data sheet. Copy the document id from the link to the **dataKey** variable in the **plantData.js** file. 
If your link is docs.google.com/spreadsheets/d/abcd1234, your id is abcd1234. 
7. Done!
## Run Instructions
Run ```expo start``` on your terminal.
## Known bugs
After removing all your favorites, you will notice that the "Favorites" screen still shows the last plant as a favorite until you navigate to the home screen and come back. 
## Developers
This project/repo was built as a part of the Comp_Sci 394 course at Northwestern University by Rohith Jayaraman, Jeff Lau, Danny Oh, and Paulina Tarasul. 
