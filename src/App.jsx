
import './App.css'
import Counter from './countary';
import Team from './Team';
import Use from './Use';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert ('button clicked');
  }
   const handleClick2 = () =>{
    alert ('button 2 clicked')
   }

   const addToFive = (num) => {
    alert(num+5);
   }
  return (
    <>
      <h3>React core concept 2</h3>

      <Friends></Friends>

      <Use></Use>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2
      </button>
    {/* vejalaiya haha */}
      <button onClick={() => addToFive(5)}>Four
      </button>
    </>
  )
}

export default App
