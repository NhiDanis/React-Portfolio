// eslint-disable-next-line
import React, { Component } from 'react';
import Img1 from "../image/Yoda-Me-Astrology.png";
import Img2 from "../image/Eat-Da-Burger.jpg";
import Img3 from "../image/Employee-Directory.png";
import Img4 from "../image/Password-Gen.jpg";
import Img5 from "../image/uconnect.png";
import Img6 from "../image/Weather-Dashboard.jpg";
import { Cell, Grid, Card, CardTitle, CardActions } from 'react-mdl';



class Portfolio extends Component {
    render() {
    return (
        <div className="portfolio-body">
            
            <Grid className= "portfolio-grid">
                
                <Cell col={3}>
                <Card shadow={0} style={{width: '320px', margin: 'auto', height: '320px'}}>
                    <img src={Img1} />
                    <CardTitle style={{color: 'black', height: '100px'}}>Yoda-Me-Astrology</CardTitle>

                    <CardActions border>
                        <a href="https://nhidanis.github.io/Yoda_me_astrology/" rel="noreferrer" target="_blank"> Live Link</a>
                        <br />
                        <br />
                        <a href="https://github.com/NhiDanis/Yoda_me_astrology" rel="noreferrer" target="_blank">Repo Links</a>

                    </CardActions>  
                    
                </Card>
                </Cell>

                <Cell col={3}>
                <Card shadow={0} style={{width: '320px', margin: 'auto', height: '320px'}}>
                    <img src={Img2} />
                    <CardTitle style={{color: 'black', height: '100px'}}>Eat-Da-Burger</CardTitle>

                    <CardActions border>
                        <a href="https://da-burger-nd.herokuapp.com/" rel="noreferrer" target="_blank">Live Link</a>
                        <br />
                        <br />
                        <a href="https://github.com/NhiDanis/Eat-Da-Burger" rel="noreferrer" target="_blank"> Repo Link</a>

                    </CardActions>  
                    
                </Card>
                </Cell>

                <Cell col={3}>
                <Card shadow={0} style={{width: '320px', margin: 'auto', height: '320px'}}>
                    <img src={Img3} />
                    <CardTitle style={{color: 'black', height: '100px'}}>Employee-Directory</CardTitle>

                    <CardActions border>
                        <a href="https://employee-directory-29.herokuapp.com/" rel="noreferrer" target="_blank">Live Link</a>
                        <br />
                        <br />
                        <a href="https://github.com/NhiDanis/Employee-Directory" rel="noreferrer" target="_blank">Repo Link</a>

                    </CardActions>  
                    
                </Card>
                </Cell>
                
            </Grid>
            

            <Grid className= "portfolio-grid">
                <Cell col={3}>
                <Card shadow={0} style={{width: '320px',margin:'auto', height: '320px'}}>
                    <img src={Img4} />
                    <CardTitle style={{color: 'black', height: '100px'}}>Password-Generator</CardTitle>

                    <CardActions border>
                        <a href="https://nhidanis.github.io/Password-Generator/" rel="noreferrer" target="_blank">Live Link</a>
                        <br />
                        <br />
                        <a href="https://github.com/NhiDanis/Password-Generator" rel="noreferrer" target="_blank">Repo Link</a>

                    </CardActions>  
                    
                </Card>
                </Cell>

                <Cell col={3}>
                <Card shadow={0} style={{width: '320px', margin: 'auto', height: '320px'}}>
                    <img src={Img5} />
                    <CardTitle style={{color: 'black', height: '100px'}}>U-Connect</CardTitle>

                    <CardActions border>
                    <a href="https://uconnect-project2.herokuapp.com/" rel="noreferrer" target="_blank">Live Link</a>
                        <br />
                        <br />
                        <a href="https://github.com/NhiDanis/Project-2" rel="noreferrer" target="_blank">Repo Link</a>

                    </CardActions>  
                    
                </Card>
                </Cell>

                <Cell col={3}>
                <Card shadow={0} style={{width: '320px', margin: 'auto', height: '320px'}}>
                    <img src={Img6} />
                    <CardTitle style={{color: 'black', height: '100px'}}>Weather-Dashboard</CardTitle>

                    <CardActions border>
                        <a href="https://nhidanis.github.io/Weather-Dashboard/" rel="noreferrer" target="_blank">Live Link</a>
                        <br />
                        <br />
                        <a href="https://github.com/NhiDanis/Weather-Dashboard" rel="noreferrer" target="_blank">Repo Link</a>
  
                    </CardActions>  
                    
                </Card>
                </Cell>
                
            </Grid>
        </div>
    );
    };
}

export default Portfolio;
