import './ServiceTicketCard.css';

function ServiceTicketCard({service}) {
  return (
    <div className='serviceCardContainer'>
        <h3>{service?.service_desc}</h3>
        <hr/>
        <p><b>VIN: </b>{service?.VIN}</p>
        <p><b>Price: </b>${service?.price}</p>
    </div>
  )
}

export default ServiceTicketCard