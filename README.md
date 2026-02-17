PROJECT
CREATING CRUD FUNCTION ON BACKEND USING NODE.JS


NOTES: 
*Use ES Module Syntax
*export default - import function from '';
*export const function - import {create} from;

STEP 1:
CREATE YOUR PROJECT FILE

- mkdir project_name && cd project_name

STEP 2:
INITIALIZE YOUR PROJECT

- npm init -y

STEP 3:
INSTALL DEPENDENCIES

- npm install express dotenv mysql2 body-parser
- npm install --save-dev nodemon

STEP 4
CREATE YOUR (MODELS, VIEW, CONTROLLER, CONFIG) STRUCTURE FILES 

```bash
📂 project-name
├── ⚙️ config --- #For database connection 
├── 🎮 controllers --- #For application logic
├── 🗄️ models --- #For data logic
├── 🛣️ routes --- #Handles http / url requests
├── 🚀 server.js
├── 📦 package-lock.json
├── 📦 package.json
└── 📝 README.md
```

STEP 5:
CREATE FILES THAT YOU WILL USE FOR YOUR CRUD FUNCTION

```bash
📂 project-name
├── ⚙️ config --- #CREATE db.js 
├── 🎮 controllers --- #CREATE crudController.js
├── 🗄️ models --- #CREATE crudModel.js
├── 🛣️ routes --- #CREATE crudRoutes.js
├── 🚀 server.js
├── 📦 package-lock.json
├── 📦 package.json
└── 📝 README.md
```