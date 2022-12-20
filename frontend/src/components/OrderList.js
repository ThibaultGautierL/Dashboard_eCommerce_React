import React, { Component } from 'react';
import '../styles/OrderList.css';

// On créé une class permettant de lire les donnée d'une seule commande 
class ListOrders extends Component {

    // Valeurs par défaut 
    static defaultProps = {
        Number: 'Unknown',
        FirstName:'Unknown',
        Country:'Unknown',
        Items:0,
        Price: 0,
        Date: 1,
    }
    
    // On donne un statut à la commande, pour savoir si elle a été traitée ou non
    state = {isFulFilled : false}


    //Fonction permettant de changer l'état de la fonction
    _updateIsFulFilled = () => this.setState({isFulFilled : !this.state.isFulFilled})

    //On renvoie un affichage de commande 
    render = () => {
        const {Number, FirstName, Country, Items,Price, Date} = this.props
        const {isFulFilled} = this.state

        if(this.props.isNeedAllOrders){
            return (
                //On continue d'écrire dans notre tableau de OrderListPage
                <tr  className="order_informations">
                    <td>     
                        {/* Bouton permettant d'indiquer si la commande a été traitée ou non  */}
                        <input 
                            className="order_informations_fulfilled" 
                            type="checkbox"                        
                            onClick={this._updateIsFulFilled}
                        />
                    </td>
                    {/* En fonction du statut de traitement de la commande, on va changer l'affichage des informations  */}
                    {isFulFilled ? <td><p className="order_informations_id-b">#{Number} </p></td> : <td><p className="order_informations_id-a">#{Number} </p></td>}
                    {isFulFilled ? <td><p className="order_informations_firstname-b"> {FirstName}</p></td> :  <td><p className="order_informations_firstname-a"> {FirstName}</p></td>}
                    {isFulFilled ? <td><p className="order_informations_price-b">{Price} €</p></td> : <td><p className="order_informations_price-a">{Price} €</p></td>}
                    {isFulFilled ? <td><p className="order_informations_items-b">{Items} Items</p></td> : <td><p className="order_informations_items-a">{Items} Items</p></td>}
                    {isFulFilled ? <td><p className="order_informations_country-b">{Country} </p></td> : <td><p className="order_informations_country-a">{Country} </p></td>}
                </tr>
                ) 
        }
        else {
        if(Date===this.props.dataNumber){
        return (
            //On continue d'écrire dans notre tableau de OrderListPage
            <tr  className="order_informations">
                <td>     
                    {/* Bouton permettant d'indiquer si la commande a été traitée ou non  */}
                    <input 
                        className="order_informations_fulfilled" 
                        type="checkbox"                        
                        onClick={this._updateIsFulFilled}
                    />
                </td>
                {/* En fonction du statut de traitement de la commande, on va changer l'affichage des informations  */}
                {isFulFilled ? <td><p className="order_informations_id-b">#{Number} </p></td> : <td><p className="order_informations_id-a">#{Number} </p></td>}
                {isFulFilled ? <td><p className="order_informations_firstname-b"> {FirstName}</p></td> :  <td><p className="order_informations_firstname-a"> {FirstName}</p></td>}
                {isFulFilled ? <td><p className="order_informations_price-b">{Price} €</p></td> : <td><p className="order_informations_price-a">{Price} €</p></td>}
                {isFulFilled ? <td><p className="order_informations_items-b">{Items} Items</p></td> : <td><p className="order_informations_items-a">{Items} Items</p></td>}
                {isFulFilled ? <td><p className="order_informations_country-b">{Country} </p></td> : <td><p className="order_informations_country-a">{Country} </p></td>}
            </tr>
            ) 
        } else return null
    }
        
    }
}



export default ListOrders;