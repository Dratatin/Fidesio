import Dropdown from './components/Dropdown.js';
import Partenaires from './components/Bandeau.js';
import Articles from './components/Articles.js';
import { steps } from './data/steps';
import { partenaires } from './data/partenaires';
import { articles } from './data/articles';

function App() {
  return (
    <main className='main'>
      <section>
        {steps.map(({ title, subtitle, description }, index) => (
          <Dropdown key={index} index={index + 1} title={title} subtitle={subtitle} description={description}></Dropdown>
        ))}
      </section>
      <Partenaires items={partenaires}></Partenaires>
      <Articles items={articles}></Articles>
    </main>
  );
}

export default App;
