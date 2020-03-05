import React, {Component} from 'react'

import {Line} from 'react-chartjs-2'


class Chart extends Component {
    constructor (props){
        super(props)
        this.state = {
            chartData: {
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford', 'Denver', 'SFO'],
                datasets:[
                    {
                        label: 'Population',
                        data: [
                            117594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072,
                            195072,
                            181045,
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                          ],
                    },
                ]
            }
        }
    }
   
static defaultProps = {
    displayTitle: true,
    displayLedgend: false,
    legendPosition: 'bottom' 
} 

    render (){
        return (
            <div className="chart">
             <Line
                data={this.state.chartData}
                
                options={{
                    title: {
                        display: this.props.displayTitle,
                        text: "My Graph",
                        fontSize: 25
                    },
                    legend:{
                        display: this.props.displayLedgend,
                        position: this.props.legendPosition
                    }
                 }}
                />
            </div> 
        )
    }
}

export default Chart