
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

// <Joke 
//     setup="Why don't pirates travel on mountain roads?" 
//     punchline="Scurvy." 
//     isPun={true}
// />
// <Joke 
//     setup="Why do bees stay in the hive in the winter?" 
//     punchline="Swarm." 
//     isPun={true}
// />
// <Joke 
//     setup="What's the best thing about Switzerland?" 
//     punchline="I don't know, but the flag is a big plus!" 
//     isPun={false}
// />