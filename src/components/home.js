// eslint-disable-next-line
import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

class Home extends Component {
    render() {
    return (
        <div style={{width:'100%', margin:'auto', height: '100%'}}>
            <Grid className="home-grid" style={{height:'100%'}}>
                <div className="banner">
                    <h1>Hello, Welcome to My Portfolio!!</h1>
                    <h3> I'm a Full-Stack Developer </h3>

                 </div>


            </Grid>
        </div>
    );
    };
};

export default Home;