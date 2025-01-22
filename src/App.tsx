import './App.css'
import TripCard from './components/TripCard'

function App() {

  const tripArr = [
    {
      country: "USA",
      city: "Miami",
      days: 10,
      visited: true,
    },
    {
      country: "Thailand",
      city: "Phuket",
      days: 21,
      visited: true,
    },
    {
      country: "Madagaskar",
      city: "Antananarivo",
      days: 30,
      visited: false,
    },
    {
      country: "Japan",
      city: "Tokyo",
      days: 14,
      visited: true,
    },
    {
      country: "Frankrike",
      city: "Paris",
      days: 7,
      visited: true,
    },
    {
      country: "Australien",
      city: "Sydney",
      days: 30,
      visited: false,
    },
  ]
  
  return (
    <>
      <section>
        <h1>Resor</h1>
            {tripArr.map((trip, index) => (
              <TripCard country={trip.country} city={trip.city} days={trip.days} visited={trip.visited}/>
            ))}
      </section>
    </>
  )
}

export default App
