import Dropdown from './components/Dropdown.js';
import { steps } from './data/steps';

function App() {
  return (
    <main className='main'>
      {steps.map(({ title, subtitle, description }, index) => (
        <Dropdown key={index} index={index + 1} title={title} subtitle={subtitle} description={description}></Dropdown>
      ))}
    </main>

  );
}

export default App;
