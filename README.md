**Mentora Mobile App**



* About the Project



This is a full-stack mobile app prototype for Mentora’s platform. 



It demonstrates:



Login as Parent or Mentor

Parent Dashboard with student management

Mentor Dashboard to manage lessons

Students view for demo purposes



Real-time interaction using backend API



**The project uses:**



Frontend: React Native with Expo



Backend: Node.js + Express



Database: MongoDB 





**Folder Structure**



mentora-project/

├─ mentora-backend/       # Node.js backend

│  ├─ routes/

│  ├─ models/

│  ├─ controllers/

│  ├─ server.js

│  └─ package.json

├─ mentora-mobile/        # React Native frontend

│  ├─ app/

│  ├─ assets/

│  ├─ package.json

│  └─ App.js

└─ README.md


**Backend Setup:**



1.Go to backend folder:  **cd mentora-backend**



2.Install dependencies:  **npm install**



3.Create .env file for environment variables (replace with your MongoDB URI or API keys):



PORT=5000

MONGO\_URI



4.Start backend server:  **npm run dev**



5.Backend runs on     :  **http://localhost:5000**






**Frontend Setup (Mobile App)**



1.Go to frontend folder: **cd mentora-mobile**



2.Install dependencies:  **npm install**



3.Configure backend URL in the frontend if needed (config.js or api.js):  **export const API\_URL = "http://localhost:5000";**



4.Start the Expo app  :  **npm start**



5.Open the app:



**Mobile:** Scan QR code with Expo Go app


**Web:** Press w in the terminal





**Navigation**



* Home → Login as Parent → Parent Dashboard → Students



* Home → Login as Mentor → Mentor Dashboard → Lessons







