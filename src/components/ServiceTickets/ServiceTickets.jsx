import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import './ServiceTickets.css'
import ServiceTicketCard from "../ServiceTicketCard/ServiceTicketCard";

function ServiceTickets() {

    const { getServiceTickets } = useAuth();

    const [serviceTickets, setServiceTickets] = useState([]);


    useEffect(() => {
        const getServiceTicketList = async () => {
            const serviceTicketsList = await getServiceTickets();
            console.log("service Ticket List:", serviceTicketsList)
            setServiceTickets(serviceTicketsList);
        }
        getServiceTicketList();
    }, []);

    return (
        <>
            {serviceTickets.length > 0 ? <>
                <h1 className="serviceTicketTitle">Service Tickets:</h1>
                <div className="serviceTicketContainer">
                    {serviceTickets.map(service => <ServiceTicketCard key={service.id} service={service} />)}
                </div>
            </> :
                <h1 className="noServiceTicketTitle">There is no service_tickets for you.</h1>}
        </>
    )
}

export default ServiceTickets