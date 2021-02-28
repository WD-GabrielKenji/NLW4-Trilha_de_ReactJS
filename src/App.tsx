import { ExperienceBar } from './components/ExperienceBar' // Importando a componente "ExperienceBar"
import './styles/global.css'

function App() { 
  return ( 
    <div className="container"> 
      <ExperienceBar /> 
    </div> // <ExperienceBar/> é o linkamento dos celementos dentro do componente
  );
}

export default App;