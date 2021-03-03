// eslint-disable-next-line
import React, { Component } from 'react';
import { Grid } from 'react-mdl';

class Home extends Component {
    render() {
    return (
        <div style={{width:'100%', margin:'auto', height: '100%'}}>
            <Grid className="home-grid" style={{height:'100%'}}>
                <div className="banner">
                    <h1><strong>Hello, Welcome to My Portfolio!!</strong></h1>
                     <h3><bold>I'm a Full-Stack Developer </bold> </h3>
                    <h5>HTML/CSS | Bootstrap | JavaScript | React </h5>

                 </div>


            </Grid>
        </div>
    );
    };
};

export default Home;