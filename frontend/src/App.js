import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
