import React , {useState} from "react"
import PomodoroTimer from "./components/PomodoroTime"
import { Button } from "./components/button"

function App() {
  const [isRuning , setIsRuning] = useState<boolean>(false)

  return (
    <main className="card">
      <h2 className="card-title">
        Você esta trabalhando
      </h2>
      <PomodoroTimer 
        PomodoroTime={1500}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
        runing={isRuning}
      />
      <div className="button-container">
        <Button onClick={e=>{
          const element = e.target as HTMLButtonElement
          if(!isRuning) element.innerText = "pausar"
          else element.innerText = "Voltar"
          setIsRuning(prevs=>!prevs)
        }}>
          Começar
        </Button>
        <Button>
          Reset
        </Button>
      </div>
    </main>
  )
}

export default App
