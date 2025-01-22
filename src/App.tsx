import './App.css'
import TripCard from './components/TripCard'

function App() {
  return (
    <>
      <section>
        <h1>Resor</h1>
        <TripCard country="USA" city="Miami" days={10} visited={true} />
        <TripCard country="Thailand" city="Phuket" days={21} visited={true} />
        <TripCard country="Madagaskar" city="Antananarivo" days={30} visited={false} />
        <TripCard country="Japan" city="Tokyo" days={14} visited={true} />
        <TripCard country="Frankrike" city="Paris" days={7} visited={true} />
        <TripCard country="Australien" city="Sydney" days={30} visited={false} />
      </section>
    </>
  )
}

export default App
