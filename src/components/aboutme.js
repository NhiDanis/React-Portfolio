// eslint-disable-next-line
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import myImage from '../image/IMG_0877.jpg';


class About extends Component {
    render() {
    return (
        <div style={{width:'100%', height: '100%'}}>
            
            <Grid col ={6} className="about-grid" style={{height:'100%'}}>
                
                <Cell col={3} >
                    <h2>Nhi Danis</h2>
                    <img style={{height: '350px', width:'300px'}} src={myImage} alt="jpg" />

                </Cell>

                <Cell className="content" col={3}>
                    <h3>About Me</h3>
                    <p> My name is Nhi Danis. I'm Vietnamese, I have been in the US more than 6 years.</p> 
                    <p> I have lived in Santa Barbara since I came to the US, and I know how lucky I am to live in a beautiful town. In here, I started my education and created a family! </p>
                    <p> I'm currently studying coding at UC Berkeley extension coding bootcamp. I love to bring the beauty of technology from the moderm world to people. Hopefully, I can make the world become better with what I learn.</p>
                    
                </Cell>

            </Grid>

            
        </div>
    );
    };
};

export default About;
