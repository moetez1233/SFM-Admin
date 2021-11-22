import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NavSide from "../../components/NavSide";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./staiqTest.scss";
import { Line } from 'react-chartjs-2';
const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of registration',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
export default function StatiqTest() {
  return (
    <div>
      <NavSide> </NavSide>
      <div >
      <Container>
  <Row>
    <Col xs={1} sm={1} md={1} lg={1} xxl={1}></Col>
    <Col xs={12} sm={11} md={11} lg={11} xxl={11} >

    <div className='header'>
      <h5 className='title'>Statique inscription</h5>
    </div>
    <Line data={data} options={options} className="LigneChart" />
    </Col>
   
  </Row>
</Container>


      </div>
    </div>
  );
}
