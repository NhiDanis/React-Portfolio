// eslint-disable-next-line
import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import myImage from '../image/IMG_0877.jpg';


class About extends Component {
    render() {
    return (
        <div className="about-body" >
            <Grid className="about-grid">
                <Cell col={6}>
                    <img style={{height:'250px', width:'200px', paddingTop:'20px'}} src={myImage} />
                    <h2 style={{fontFamily:'Times'}}>Nhi Danis</h2>
                    <p> My name is Nhi Danis. I'm Vietnamese, I have been in the US more than 6 years. I have lived in Santa Barbara since I came to the US, and I know how lucky I am to live in a beautiful town. In here, I started my education and created a family! I'm currently studying coding at UC Berkeley extension coding bootcamp. I love to bring the beauty of technology from the moderm world to people. Hopefully, I can make the world become better with what I learn.</p>
                </Cell>

                <Cell col={6}>
                    <h3>Contact Me:</h3>
                    <p><strong>Location:</strong> Santa Barbara, CA </p>
                    <p><strong>Phone:</strong> (805)886-9590</p> 
                    <p><strong>Email:</strong> a.nhi1001@gmail.com</p>
                    <br/>

                </Cell>
                 
            </Grid>
        </div>
    );
    };
};

export default About;
