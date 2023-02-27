import './App.css';
import { useState } from "react";



function App() {
  return (
    <div>
      {Cats()}
    </div>
  );
}

const catURL = "https://aws.random.cat/meow"

function Cats() {
  const [cat, setCat] = useState("");

  async function handleCat(event) {
    event.preventDefault();
    try {
      const response = await fetch(catURL);

      if (response.ok) {
        const json = await response.json();
        setCat(json.file)
      }
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <h2>Fetching Cats</h2>
      <form onSubmit={handleCat}>
        <button>Get a cat</button>
      </form>
      <div class="cat-container">
      <img src={cat}></img>
      </div>
    </div>
  ); 
}

export default App;
