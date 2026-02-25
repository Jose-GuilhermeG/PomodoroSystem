import PomodoroTimer from "./components/PomodoroTime"
import { Button } from "./components/button"

function App() {
  return (
    <main className="card">
      <h2 className="card-title">
        Você esta trabalhando
      </h2>
      <PomodoroTimer defaultPomodoroTime={1500}/>
      <div className="button-container">
        <Button>
          Começar
        </Button>
        <Button>
          Pausar
        </Button>
      </div>
    </main>
  )
}

export default App
