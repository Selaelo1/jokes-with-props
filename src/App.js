
import './App.css';
import Joke from './components/Joke'
import jokesData from './components/jokesData';

export default function App() {
   const jokeElements = jokesData.map(joke => {
     return <Joke setup={joke.setup} punchline={joke.punchline} />
  })
  return (
    <div>
      {jokeElements}
    </div>
  )
}

