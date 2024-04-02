import Card from './components/Card'
import './App.css'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind CSS</h1>
      <Card username="Nancy" btnText="click me"/>
      <Card username="Princy" />  
    </>
  )
}

export default App
