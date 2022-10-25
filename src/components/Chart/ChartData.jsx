import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Fade from 'react-reveal/Fade';
import './chart.scss'

Chart.register(...registerables);
ChartJS.register(ArcElement, Tooltip, Legend);


const ChartData = (props) => {
    const data = props.words
    const labels = data.map(val => val.word);
    const state = {
        labels,
        datasets: [
          {
            label: "Count",
            data: data.map(val => val.count),
            borderColor: 'rgb(4, 59, 92)',
            backgroundColor: 'white',
          }
        ]
      } 
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            display: false,
          },
          title: {
            display: false,
            text: 'Most Common Words',
          },
        },
        scales: {
          yAxes:{
              ticks:{
                  beginAtZero: true,
                  color: 'white',
                  fontSize:30,
                  family: "'Montserrat', sans-serif",
                  font: {
                    size: 20,
                    family: "'Montserrat', sans-serif",
                  }
              }
          },
          xAxes: {
              ticks:{
                  beginAtZero: true,
                  color: 'white',
                  fontSize:30,
                  family: "'Montserrat', sans-serif",
                  font: {
                    size: 20,
                    family: "'Montserrat', sans-serif",
                  }
              }
          },
      }
      };
    return (
      <Fade>
        <div className='chartMain'>
          <Line
            data={state}
            options={options}
            height="300px"
            width="500px"
            className='chart-data'
          />
        </div>
      </Fade>
      
    );
}
export default ChartData