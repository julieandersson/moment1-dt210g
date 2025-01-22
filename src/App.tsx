import './App.css'
import TripCard from './components/TripCard'

function App() {

  return (
    <>
    <section>
    <h1>Resor</h1>
    <TripCard country={"USA"} city={"Miami"} days={"10"} />
    <TripCard country={"Thailand"} city={"Phuket"} days={"21"} />
    <TripCard country={"Madagaskar"} city={"Antananarivo"} days={"30"} />
    <TripCard country={"Japan"} city={"Tokyo"} days={"14"} />
    <TripCard country={"Frankrike"} city={"Paris"} days={"7"} />
    <TripCard country={"Australien"} city={"Sydney"} days={"30"} />
    </section>
    </>
  )
}

export default App
