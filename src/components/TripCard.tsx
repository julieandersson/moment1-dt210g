interface TripCardsProps {
    country: string,
    city: string,
    days: string
}

function TripCard({country, city, days}: TripCardsProps) {
  return (
    <section style={{backgroundColor: "pink", padding: "20px", marginTop: "2em", borderRadius: "25px"}}>
    <h2>{country}</h2>
    <p>Stad: {city}</p>
    <p>Antal dagar: {days}</p>
  </section>
  )
}

export default TripCard