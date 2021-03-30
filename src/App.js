import fruits from './foods'
import { choice, remove } from './helpers'
import List from './components/List'


function App() {
  console.log(fruits);
  let fruit = choice(fruits)
  console.log(fruit);
  let test = remove(fruits, fruit)
  console.log(test);
  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
