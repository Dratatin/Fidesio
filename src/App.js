import Dropdowns from './components/Dropdowns.js';
import Bandeau from './components/Bandeau.js';
import Articles from './components/Articles.js';
import { steps } from './data/steps';
import { partenaires } from './data/partenaires';
import { articles } from './data/articles';

function App() {
  return (
    <main className='main'>
      <Dropdowns items={steps}></Dropdowns>
      <Bandeau items={partenaires}></Bandeau>
      <Articles items={articles}></Articles>
    </main>
  );
}

export default App;
