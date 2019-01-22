import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import { ArrowDownCircle } from 'react-feather';
import ScrollAnimation from 'react-animate-on-scroll';
import  AnimatedText  from './AnimatedText';
import StarsBackground from './StarsBackground';
import { Ground } from './Ground';
import "animate.css/animate.min.css";

class App extends Component {

  componentDidMount() {
    const elmnt = document.getElementById("app");
    elmnt.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }

  render() {
    return (
      <div>
      <div className="App" id="app">
          <StarsBackground starCount={100}/>
          <div className='introText'>
            <span className="nameTitle"><AnimatedText text="Jonathan Stein" fontSize="2" id="a"/></span>
            <br />
            <span className="subtitle"><AnimatedText text="Web developer" fontSize="1.3" delay={2000} id="b"/></span>
              <div className="seeMore">
                <div onClick={() => this.scrollToProject()}>
                  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" initiallyVisible={false}>
                  Explore Below
                  <p className="arrow">
                    <ArrowDownCircle />
                  </p>
                </ScrollAnimation>
                </div>
              </div>
          </div>
        <Ground />
      </div>
    </div>
    );
  }

  scrollToProject = () => {
    const elmnt = document.getElementById("projects");
    elmnt.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  }
}

export default App;