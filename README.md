# Project Instructions

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Setting up the API

### Step 1: Signup for an API key

For the MeaningCloud API: You can find the API [here](https://www.meaningcloud.com/developer/sentiment-analysis). Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK, so you can skip ahead to step 4 in the instructions.



### Step 2: Environment Variables
-  Use npm or yarn to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file
- Create a new ```.env``` file in the root of your project
- Go to your .gitignore file and add ```.env```
- Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
- Add this code to the very top of your server/index.js file:
 
```javascript
const dotenv = require("dotenv");
dotenv.config();


const API_KEY = process.env.API_KEY;
```

### Step 3: Using the API
Read the documentation of the [MeaningCloud API](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc) . 


## Building and start the project

### Step 1: Install dependencies

```bash
// Using nodejs 14
npm install
```

### Step 2: Build the project
```bash
// To build the project with production config
npm run build-prod	

// To build the project with dev config
npm run build-dev
```



### Step 3: Start the project
```bash
// To start the project, using the below command
npm start

// Or using node-mon for dev environment with below command
npm run dev
```

Open browser at http://localhost:8081/

API end-point: http://localhost:8080/


