import React from 'react';
import { Row } from 'react-bootstrap';
import agent1 from '../../../img/agent1.jpg';
import agent2 from '../../../img/agent2.png';
import agent3 from '../../../img/agent3.jpg';
import agent4 from '../../../img/agent4.png';
import agent5 from '../../../img/agent5.jpg';
import Agent from './Agent/Agent';

const allAgents=[
    {
        name:"Dollar Young",
        brand:"Pepsi",
        img: agent1,
        id:'101'
    },
    {
        name:"Chals Millar",
        brand:"Igloo",
        img: agent2,
        id:'102'
    },
    {
        name:"David Yarn",
        brand:"Polar",
        img: agent3,
        id:'103'
    },
    {
        name:"Tomas Adison",
        brand:"Coca cola",
        img: agent4,
        id:'104'
    },
    {
        name:"Jhon Marlons",
        brand:"Bellissimo",
        img: agent5,
        id:'105'
    },
]

const Agents = () => {
    
    return (
        <div className='container p-5 mt-5' >
            <h2 className='text-center color-dark' >Our Supplier <span className="main-color fw-bold">Agents</span></h2>
            <Row xs={1} md={3} className="g-5 py-5">
                {
                    allAgents.map(agent => <Agent
                        key={agent.id}
                        agent={agent}

                    ></Agent>)
                }
            </Row>
        </div>
    );
};

export default Agents;