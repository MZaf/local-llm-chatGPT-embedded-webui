import './App.css';
import { Configuration, OpenAIApi } from 'openai';
import {useState} from 'react';

function App() {

  const config = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    })
    const openai = new OpenAIApi(config);
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)
    
    const handleChange = async() => {
      setLoading(true)
      try {
        const response = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: prompt,
          temperature: 0.5,
          max_token: 350
        })
        setResult(response.data.choice[0].text)
      }catch (error){
      console.log(error);
      }
      setLoading(false)
      }
    
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Embed ChatGPT <code></code> web UI Prompt and Generated results.
        </p>
        <a
          className="App-link"
          href="https://falconitech.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          See More Services provided By Falcon AI Technologies.
        </a>
      </header> */}
      <div>
        <textarea 
          value={ prompt}
          placeholder = "Ask any thing"
          onChange={(e)=>(setPrompt(e.target.value))}
          name="" id="" cols="30" rows="10">
        </textarea>
        <button onClick ={handleChange}>
          {loading ? 'Generating...' : 'Generated'}
        </button>
        <div> 
          <p>{result} </p> 
        </div>	
      </div> 

    </div>
  );
}

export default App;

