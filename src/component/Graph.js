import { CChart } from "@coreui/react-chartjs";
import React from "react";
import "../App.css";

import CanvasJSReact from "../canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Graph({ dataX, dataY }) {
  // dataX.shift()
  // dataY.shift()

  // let cord =[];

  // (function(){
  //     return dataY.map((val,key)=>{
  //         cord = [...cord,{
  //             x: dataX[key],
  //             y: dataY[key]
  //         }]
  //     })

  // }())
  // cord.shift()
  // console.log(cord);

  // const options = {
  //     animationEnabled: true,
  //     exportEnabled: true,
  //     theme: "light2", // "light1", "dark1", "dark2"
  //     title:{
  //         text: dataY[0],
  //     },
  //     axisY: {
  //         title: dataY[0],
  //         suffix: "%"
  //     },
  //     axisX: {
  //         title: dataX[0],
  //         prefix: "W",
  //         interval: 2
  //     },
  //     data: [{
  //         type: "line",
  //         toolTipContent: "Week {x}: {y}%",
  //         dataPoints: []
  //     }]
  // }

  // if(dataNo == 0){
  //     return ("")
  // } else {
  return (
    <div className="homemain-graph">
      <CChart
        type="line"
        data={{
          labels: dataX,
          datasets: [
            {
              label: dataY[0],
              backgroundColor: "rgba(220, 220, 220, 0.2)",
              borderColor: "rgba(220, 220, 220, 1)",
              pointBackgroundColor: "rgba(220, 220, 220, 1)",
              pointBorderColor: "#fff",
              data: dataY,
            },
          ],
        }}
      />
    </div>
  );
  // }
}

export default Graph;
