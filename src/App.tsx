import './App.css'
import TripCard from './components/TripCard'

function App() {

  return (
    <>
    <section>
    <h1>Resor</h1>
    <TripCard country={"USA"} city={"New York"} days={"7"} />
    <TripCard />
    <TripCard />
    </section>
    </>
  )
}

export default App
