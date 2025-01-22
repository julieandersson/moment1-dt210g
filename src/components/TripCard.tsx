import '../css/TripCard.css';

interface TripCardsProps {
    country: string,
    city: string,
    days: number,
    visited: boolean;
}

function TripCard({country, city, days, visited}: TripCardsProps) {
  return (
    <section style={{backgroundColor: "#dddddd", padding: "25px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1)" }}>
    <h2 style={{fontSize: "1.2em"}} className="trip-card-title">{country}</h2>
    <p>Stad: {city}</p>
    <p>Antal dagar: {days}</p>
    <p>Besökt: {visited ? "Ja" : "Nej"}</p>
  </section>
  )
}

export default TripCard