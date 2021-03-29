import fruits from './foods'
import { choice, remove } from './helpers'


function App() {
  console.log(fruits);
  let fruit = choice(fruits)
  console.log(fruit);
  let test = remove(fruits, fruit)
  console.log(test);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
