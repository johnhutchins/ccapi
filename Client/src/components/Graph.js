import React, {Component} from 'react'

import {Line} from 'react-chartjs-2'



class Graph extends Component {
    constructor(){
        super()
        this.state = {
            dataPoints: {}, 
            elevationArr: [],
            distanceArr: []
        }
        
    };
 
    componentDidMount() {
        let dataPoints = null;
        let elevationArr = [];
        let distanceArr = [];
    
        function loadElevation(){
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = "https://cyclecycle-api.herokuapp.com/rides/1";
        //build URL to fix CORS issue
            fetch(proxyurl + url)
            .then((result)=> {
                return result.json()
            })
            .then((data)=> {
            //get datapoints from the JSON object 
                dataPoints = data.dataPoints
                console.log(dataPoints)
                console.log('Got Data Array')

            //Calculate lenght for the loop
                const len = dataPoints.length
                console.log("Array Lenght " + len)
            //Loop through the nested object and push to new array for heigh and distance for displaying in graph
                for(let i=0; i < len; i++){
                    elevationArr.push(dataPoints[i].elevation)
                    distanceArr.push(dataPoints[i].distance)
                }
                this.setState(elevationArr = this.state.elevationArr)
                console.log('New Arrays')
                // console.log(heightArr, distanceArr)
            })
            .catch(function(err){
                alert(err);
            });
           
          }
        //Call the load function
        loadElevation()
          
    }
    
    
    render () {


        console.log(this.elevationArr, this.distanceArr)

        return (

            // <Line
            //     data={null}
                
            //     options={{
            //         title: {
            //             display: '',
            //             text: "My Graph",
            //             fontSize: 12
            //         },
            //         legend:{
            //             display: false,
            //             position: 'right'
            //         }
            //      }}
            //     />,
            <h1>blank</h1>

            )
    }
}


export default Graph