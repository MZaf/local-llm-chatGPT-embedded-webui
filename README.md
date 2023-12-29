# ChatGPT-embeded-webui App
ChatGPT API access from your webUI, using React, JavaScript, Embedding ChatGPT API Access in your own website using OpenAi API_KEY. 

Model used `text-davinci-003` 

## Steps
```
git clone https://github.com/MZaf/local-llm-chatGPT-embedded-webui.git
cd chatGPT-embeded-webui
npm install openai
```
### Create .env file for OpenAI API_KEY

- Get API key from https://platform.openai.com/account/api-keys after signup on OpenAI 
- Generate and copy OpenAI API KEY
- In React App project folder add `.env file` and add variable `REACT_APP_OPENAI_API_KEY= <insert your OpenAI API_KEY>`

You can rename the `.env-example` file to `.env` and add your `OpenAI API KEY`

```
npm install
npm start
```
In Browser, open http://localhost:3000/  
Enter your prompt instruction.

Hit Generate Button to get ChatGPT response via API.
