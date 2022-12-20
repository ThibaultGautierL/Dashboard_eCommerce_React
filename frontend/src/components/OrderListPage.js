import React from "react";
import orders from "../datas/Orders";
import ListOrders from "./OrderList";
import '../styles/OrderListPage.css'




//Fonction faisant appel à la classe Liste De commande (OrderList) qui permet d'afficher un tableau des commandes
function OrderListPage (props) {


    return (
        //Affiche les titres dy tableau
        // <div className="order_informations">
          <table className="order_informations_table">
            <tr className="order_informations_columns">
              <td><p className="order_informations_columns_type">Fulfillment</p></td>
              <td><p className="order_informations_columns_type">ID Order</p></td>
              <td><p className="order_informations_columns_type">First Name</p></td>
              <td><p className="order_informations_columns_type">Price</p></td> 
              <td><p className="order_informations_columns_type">Items</p></td>
              <td><p className="order_informations_columns_type">Location</p></td>
            </tr>

            
            {orders.map(({index, ...order}) => // On va mapper notre tableau, et chaque Type (Id, FirstName..) va renvoyer un composant ListOrder Modulable
              <ListOrders key={index} {...order} dataNumber = {props.dataNumber} isNeedAllOrders={props.isNeedAllOrders}/>
            )}
          </table>
        // </div>
    )

}

export default OrderListPage;