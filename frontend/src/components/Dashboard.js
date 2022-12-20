import React, { Component } from "react";
import KPIIndicator from "./KPIIndicator";
import orders from "../datas/Orders";
import "../styles/Dashboard.css"
import GraphicLineChart from "./GraphicLineChart";
import GraphicPieChart from "./GraphicPieChart";
import OrderListPage from "./OrderListPage"
import logo from '../assets/logo.png'

class Dashboard  extends Component{
    
    //On créé un state avec 2 variables  : 1) La date de début de notre commerce / 2) Les informations qui paramètrent une date (récupérées Via l'API)
    state = { dateNumber : '2022-12-01', 
              DateLog : {
                "Number": 1,
              }, 
              isNeedAllOrders : false,
    }




    //methode pour changer isNeedAllOrder (permet de savoir si on doit affiche rou non toutes les commandes)
    doWeNeedAllOrder = () => this.setState ({isNeedAllOrders : !this.state.isNeedAllOrders})




     //Methode pour calculer le chiffre d'affaire total
    getTurnOver = () => {
        var turnOver = 0
        orders.forEach((order) => {
            //permet de calculer le chiffre d'affaire du jour séléctionné seulement si on veut afficher qu'une seule journée (sinon on calcul le total)
            if(!this.state.isNeedAllOrders){
                if(order.Date===this.state.DateLog.Number){
                turnOver+= order.Price
                 }
           } if(this.state.isNeedAllOrders) {
                turnOver+= order.Price
           }
        } )
        //envoie un résultat avec 2 chiffres après la virugle
        return turnOver.toFixed(2);
    }


    
    ////Methode pour  calculer le nombre de commandes
    getOrderNumber = () => {
        var orderNumber = 0
        orders.forEach((order) => {
            //permet de calculer le nombre de commande du jour séléctionné seulement si on veut afficher qu'une seule journée (sinon on calcul le total)
            if(!this.state.isNeedAllOrders){
                if(order.Date===this.state.DateLog.Number){
                    orderNumber++
                }
            }   if(this.state.isNeedAllOrders) {
                orderNumber++
           }
        } )
        return orderNumber
    }

     ////Methode pour calculer la valeur moyenne de commande
    getAverageOrderValue = () => {
        var averageOrder = 0
        //permet d'éviter de retourner NaN si on a fait aucune vente ce jour précis. 
        if(this.getTurnOver() !==0 ){
            averageOrder = this.getTurnOver()/this.getOrderNumber()
        }
        //envoie un résultat avec 2 chiffres après la virugle
        return averageOrder.toFixed(2)
    }
 

    //Methode pour determiner si on a une montée de notre API
    componentDidMount() {
        //On fetch là où on doit récupérer la date 
         fetch(`http://localhost:3001/orders/${this.state.dateNumber}T00:00:00.000Z`)
        .then((response) => {
            return response.json()
        })            
        .then((result) => {
            this.setState ({DateLog : result})
        })
    }

    //Methode permettant d'update les datas en fonction de la date 
    _updateOrders = () => {
        if(this.state.isNeedAllOrders){
            this.doWeNeedAllOrder()
        }
        this.componentDidMount()

    }

    //methode permettant d'update la date
    _updateDate = ( event ) => {
        this.setState ({dateNumber : event.target.value})
    }


    //Render de notre classe Dashboard 
    render = () => {
        const { dateNumber } = this.state
        return (
            <div>
                {/* TOP SCREEN */}
                <div className="top-screen">
                    <div className="header">
                        <img src={ logo } alt='Logo' className="header_logo"/>
                    </div>
                    <div align='center'>
                        <p>Select a Date :</p>
                        <input type="date" className="calendar" value={dateNumber} min="2022-12-01" max="2022-12-05" onChange={this._updateDate} id="calender"/>
                        <input type="submit" className="button_1" value="Update the Date" onClick={this._updateOrders}/> 
                        <input type="submit" className="button_2" value="Resume all the week" onClick={this.doWeNeedAllOrder}/> 
                    </div>
                </div>

                {/* AFFICHAGE DES NOMBRES KPI */}
                <div className="main_dashboard_numbers">
                    <div className="information_total_Sales">
                    <h4 className="information_total_text">Total Sales :</h4>
                    <p className="information_total_value"><KPIIndicator value={this.getTurnOver()}/>€</p>
                    </div>
    
                    <div className="information_total_Orders">
                    <h4 className="information_total_text">Total Orders :</h4>
                    <p className="information_total_value"><KPIIndicator value={this.getOrderNumber()}/></p>
                    </div>
    
                    <div className="information_average_Cart">
                    <h4 className="information_total_text">Average Order :</h4>
                    <p className="information_total_value"><KPIIndicator value={this.getAverageOrderValue()}/>€</p>
                    </div>
                </div>

                {/* AFFICHAGE DES GRAPHS */}
                <div className="main_dashboard_graph">
                    <GraphicLineChart dataNumber={this.state.DateLog.Number} isNeedAllOrders={this.state.isNeedAllOrders}/>
                    <GraphicPieChart dateNumber={this.state.DateLog.Number} isNeedAllOrders={this.state.isNeedAllOrders}/>   
                </div>

                {/* AFFICHAGE DE LA LISTE DES COMMANDES */}
                <OrderListPage dataNumber={this.state.DateLog.Number} isNeedAllOrders={this.state.isNeedAllOrders}/> 
            </div>
        )
    
    }

}

export default Dashboard