interface TripCardsProps {
    country: string,
    city: string,
    days: number,
    visited: boolean;
}

function TripCard({country, city, days, visited}: TripCardsProps) {
  return (
    <section style={{backgroundColor: "pink", padding: "20px", marginTop: "2em", borderRadius: "25px"}}>
    <h2>{country}</h2>
    <p>Stad: {city}</p>
    <p>Antal dagar: {days}</p>
    <p>Besökt: {visited ? "Ja" : "Nej"}</p>
  </section>
  )
}

export default TripCard