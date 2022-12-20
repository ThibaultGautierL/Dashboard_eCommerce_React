import React from "react"
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import orders from "../datas/Orders"
import '../styles/Graphic.css'


function GraphicLineChart (props) {

    //Si on doit pas afficher toutes les commandes 
    if(!(props.isNeedAllOrders)){
    var tempOrders = [];
    function empty() {
        //empty your array
        tempOrders = [];
    }
    empty();

    //On va créer un tableau temp pour acceuillir les commandes spécifique au jour séléctionné 
    for (let index = 0; index < orders.length; index++) {
        if(orders[index].Date === props.dataNumber){
            tempOrders.push(orders[index])
        }
        
    }

    return (
        <div>
            <h4>Total Sales</h4>
                <LineChart className="line_graph" width={600} height={300} data={tempOrders}>
                <Line type="monotone" dataKey="Price" stroke="#00C49F" strokeWidth={3} />
                <CartesianGrid stroke="lightgrey" strokeDasharray="3 3"/>
                <XAxis 
                    dataKey={'Time'}  
                    name='Time'  
                    unit='h' 
                    // datakey="Time" 
                    ticks={[0,3,6,9,12,15,18,21]} 
                    domain={[0, 23]}  
                    type="number"  
                />
                <YAxis unit='€' />
                <Tooltip/>
                <Legend/> 
                </LineChart>
        </div>
    )
    }

    //Si on doit afficher toutes les commandes
    else {
        return (
            <div>
                <h4>Total Sales</h4>
                    <LineChart className="line_graph" width={600} height={300} data={orders}>
                    <Line type="monotone" dataKey="Price" stroke="#00C49F" strokeWidth={3} />
                    <CartesianGrid stroke="lightgrey" strokeDasharray="3 3"/>
                    <XAxis 
                        dataKey={'Date'}  
                        name='Date'  
                        unit='Day' 
                        // datakey="Time" 
                        ticks={[1,2,3,4,5]} 
                        domain={[1, 5]}  
                        type="number"  
                    />
                    <YAxis unit='€' />
                    <Tooltip/>
                    <Legend/> 
                    </LineChart>
            </div>
        )
    }
}

export default GraphicLineChart