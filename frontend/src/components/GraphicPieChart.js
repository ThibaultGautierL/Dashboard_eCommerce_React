import React, { PureComponent } from "react"
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts"
import orders from "../datas/Orders"
import '../styles/Graphic.css'


class GraphicPieChart extends PureComponent{
   
    //On va créer un tableau pour accueillir les couleurs
    render = () => {
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
        var nmbrFrance = 0;
        var nmbrBelgium =0;
        var nmbrSuisse =0;
        var nmbrElse =0;

        //Si on doit afficher TOUTES les commandes 
        if(this.props.isNeedAllOrders){
            // ICI on compte le nombre de ventes en fonction du pays
            orders.forEach((order) => {
                //Si c'est vendu en france
                if (order.Country === 'France') {
                    nmbrFrance++
                }
                //Si c'est vendu en Belgique
                if (order.Country === 'Belgium') {
                    nmbrBelgium++
                }
                //Si c'est vendu en Suisse
                if (order.Country === 'Switzerland'){
                    nmbrSuisse++
                }
                //Si c'est vendu autre part
                if (order.Country !=='Switzerland' && order.Country !=='Belgium' && order.Country !=='France') {
                    nmbrElse++
                }
            })
            // On va créer un tableau 
            const tabCountry = [
                {name : 'France', nombre : nmbrFrance}, 
                {name : 'Belgium', nombre : nmbrBelgium}, 
                {name : 'Switzerland', nombre : nmbrSuisse}, 
                {name : 'Other', nombre : nmbrElse}
            ]

            return (
                <div>
                    <h4>Sales by country</h4>
                    <PieChart width={300} height={250} onMouseEnter={this.onPieEnter} className="pie_graph">
                        <Pie
                            data={tabCountry}
                            cx={120}
                            cy={100}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey='nombre'
                        >
                            {tabCountry.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip/>
                        <Legend align="left"/>
                    </PieChart>
                </div>
            )
        }

        //Si on doit afficher les commandes spécifique à une seule journée 
        else{
            orders.forEach((order) => {
                //Si c'est vendu en france et que ca correspond à la date voulue
                if (order.Country === 'France' && order.Date===this.props.dateNumber) {
                    nmbrFrance++
                }
                //Si c'est vendu en Belgique et que ca correspond à la date voulue
                if (order.Country === 'Belgium' && order.Date===this.props.dateNumber) {
                    nmbrBelgium++
                }
                //Si c'est vendu en Suisse et que ca correspond à la date voulue
                if (order.Country === 'Switzerland' && order.Date===this.props.dateNumber){
                    nmbrSuisse++
                }
                //Si c'est vendu autre part et que ca correspond à la date voulue
                if (order.Country !=='Switzerland' && order.Country !=='Belgium' && order.Country !=='France' && order.Date===this.props.dateNumber) {
                    nmbrElse++
                }
            } )
    
            //on met ces valeurs dans un tableau
            const tabCountry = [
                {name : 'France', nombre : nmbrFrance}, 
                {name : 'Belgium', nombre : nmbrBelgium}, 
                {name : 'Switzerland', nombre : nmbrSuisse}, 
                {name : 'Other', nombre : nmbrElse}
            ]
    
            return (
                <div>
                    <h4>Sales by country</h4>
                    <PieChart width={300} height={250} onMouseEnter={this.onPieEnter} className="pie_graph">
                        <Pie
                            data={tabCountry}
                            cx={120}
                            cy={100}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey='nombre'
                        >
                            {tabCountry.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip/>
                        <Legend align="left"/>
                    </PieChart>
                </div>
            )
        }
        
    }
}


export default GraphicPieChart





