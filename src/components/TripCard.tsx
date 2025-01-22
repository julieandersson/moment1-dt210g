

function TripCard(props: any) {
  return (
    <section style={{backgroundColor: "pink", padding: "20px", marginTop: "2em", borderRadius: "25px"}}>
    <h2>{props.country}</h2>
    <p>Stad: {props.city}</p>
    <p>Antal dagar: {props.days}</p>
  </section>
  )
}

export default TripCard