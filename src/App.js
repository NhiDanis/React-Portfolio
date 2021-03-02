// eslint-disable-next-line
import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header" title="ND" scroll>
            <Navigation>
                <Link to="/about">About</Link >
                <Link to="/portfolio">Portfolio</Link >
                <Link to="/contact">Contact</Link >
                
                
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <Link to="/about">About</Link >
                <Link to="/portfolio">Portfolio</Link >
                <Link to="/contact">Contact</Link >
                
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
<Footer size="mega">
    <FooterSection type="middle" >
        <FooterLinkList>
            <a href="#">Copy&copy;</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
    </Layout>
</div>
  );
  };
}

export default App;
