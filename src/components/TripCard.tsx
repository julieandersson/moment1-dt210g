// importerar cssfil för specifika stilar för resekorten

import '../css/TripCard.css';

// skapar interface som bestämmer vilka props (egenskapr) tripcard-komponenten tar emot
interface TripCardsProps {
    country: string, // landets namn
    city: string, //stadens namn
    days: number, // antal dagar för resan
    visited: boolean; // om platsen har besökts eller inte
}

// komponent för resekort på webbplatsen med reseinformation
// tar emot props från interfacet  
function TripCard({country, city, days, visited}: TripCardsProps) {
  return (
    // korten med all information om en resa, inline css på några delar
    <section style={{backgroundColor: "#dddddd", padding: "25px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1)" }}>
    
    {/* visar land, stad, antal dagar och om platsen är besökt */}
    <h2 style={{fontSize: "1.2em"}} className="trip-card-title">{country}</h2>
    <p>Stad: {city}</p>
    <p>Antal dagar: {days}</p>
    <p>Besökt: {visited ? "Ja" : "Nej"}</p>
  </section>
  )
}

// exporterar komponenten så att den kan avändas i andra filer, tex app.tsx
export default TripCard