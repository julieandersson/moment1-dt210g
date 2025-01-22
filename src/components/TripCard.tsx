interface TripCardsProps {
    country: string,
    city: string,
    days: number,
    visited: boolean;
}

function TripCard({country, city, days, visited}: TripCardsProps) {
  return (
    <section style={{backgroundColor: "#ffd5dc", padding: "20px", marginTop: "2em", borderRadius: "25px"}}>
    <h2 style={{fontSize: "1.2em"}}>{country}</h2>
    <p style={{fontSize: "1em"}}>Stad: {city}</p>
    <p>Antal dagar: {days}</p>
    <p>Besökt: {visited ? "Ja" : "Nej"}</p>
  </section>
  )
}

export default TripCard