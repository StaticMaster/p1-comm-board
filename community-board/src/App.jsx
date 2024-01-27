import './App.css';
import Games from './Games/Games';

const App = () => {

  return (
    <div className="App">
        <div className='main-title'>
        <h1>The Gaming Network</h1>
        <h2>This is where you get all your esports information depending on what game, gaming esports, and new game reveals.</h2>
        </div>  
        <Games/>  
    </div>
  )
}

export default App