import React , {useState, useReducer ,type MouseEvent} from "react"
import PomodoroTimer from "./components/PomodoroTime"
import { Button } from "./components/button"

export interface TimeReducerAction{
  type : 'decrement' | 'reset';
  value? : number
}

 const TimeReducer = (currentTime : number , action : TimeReducerAction) : number =>{
    switch(action.type){
      case "reset":
        return action.value || 1500
      case "decrement":
        return currentTime - 1      
    }
  }

function App() {
  const [isRuning , setIsRuning] = useState<boolean>(false)
  const [isWorking , setIsWorking] = useState<boolean>(false)
  const [isResting , setIsResting] = useState<boolean>(false)
  const [pomodoroTime , setPomodoroTime] = useReducer(TimeReducer , 1500)
  const [content , setContent] = useState<string>("Começar")

  const handlerResting = ()=>{
    setIsWorking(false)
    setPomodoroTime({type : "reset" , "value" : 400})
    setContent("Você está Descansando")
  }

  const startWorking = ()=>{
    setIsWorking(true)
    setIsRuning(true)
    setPomodoroTime({type : "reset"})
    setContent("Você está trabalhando")
  }
  
  const handlerPause = (e : MouseEvent )=>{
    setIsRuning(prev=>!prev)
    const element = e.target as HTMLElement
    if(!isRuning) element.textContent = "Pausar" 
    else element.textContent = "Voltar"
  }

  return (
    <main className="card">
      <h2 className="card-title">
        {content}
      </h2>
      <PomodoroTimer 
        time={pomodoroTime}
        setTimeFunc={(setPomodoroTime)}
        runing={isRuning}
      />
      <div className="button-container">
        <Button onClick={startWorking}
        >
          Trabalhar
        </Button>
        <Button onClick={handlerResting}>
          Descansar
        </Button>
        <Button 
          onClick={(e)=>handlerPause(e)}>
          Pausar
        </Button>
      </div>
    </main>
  )
}

export default App
