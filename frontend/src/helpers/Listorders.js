//ON va chercher l'info dans le back pour récup les dates de ventes 

import axios from "axios";


export const getOneOrders = async (Date) => {
    const rest = await axios.get(`http://localhost:3001/orders/${Date}`);
    return rest.data; 
}

