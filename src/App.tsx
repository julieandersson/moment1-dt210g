import './App.css' // importerar global cssfil
import TripCard from './components/TripCard' // importerar komponenten tripcard för att visa resor
import Header from './components/Header' // importerar komponenten header som visar headern med titel och banner
import Footer from './components/Footer' // importerar komponenten footer som visar footern med statisk text

// huvudkomponent, innehåller alla delar av webbplatsen
function App() {

  // skapar en array med obnjekt som visar resor, varje objekt innehåller information,
  // såsom land, stad, antal dagar och om platsen är besökt eller inte
  const tripArr = [
    {
      country: "USA",
      city: "Miami",
      days: 10,
      visited: true
    },
    {
      country: "Thailand",
      city: "Phuket",
      days: 21,
      visited: true
    },
    {
      country: "Madagaskar",
      city: "Antananarivo",
      days: 30,
      visited: false
    },
    {
      country: "Japan",
      city: "Tokyo",
      days: 14,
      visited: true
    },
    {
      country: "Frankrike",
      city: "Paris",
      days: 7,
      visited: true
    },
    {
      country: "Australien",
      city: "Sydney",
      days: 30,
      visited: false
    }
  ]
  
  return (
    <>
    {/* header-komponenten med titel skickad som en prop */}
    <Header title="Min reseöversikt"/>

    {/* huvudinnehållet, omslutet i main */}
    <main>
      {/* sektion med rubrik och lista över resor */}
      <section>
        <h1 style={{textAlign: "center", fontSize: "1.6em"}}>Resor</h1>
        <div className="trip-card-container">

          {/* renderar ett tripcard för varje objekt i tripArr med map-funktionen */}
            {tripArr.map((trip, index) => (
              <TripCard
              country={trip.country} // skickar landets namn som prop
              city={trip.city} // skickar stadens namn som prop
              days={trip.days} // skickar antal dagar som prop
              visited={trip.visited} // skickar boolean för besökt som prop
              key={index}/> // unik nyckel för varje komponent i listan
            ))}
          </div>
      </section>
    </main>

      {/* footer-komponent som visas längst ner på listan */}
      <Footer />
    </>
  )
}

// exporterar app-komponent
export default App
