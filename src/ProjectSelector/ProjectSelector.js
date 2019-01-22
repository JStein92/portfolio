import React, { Component } from 'react';
import anime from 'animejs'
import './ProjectSelector.css';
import Radium, { Style } from 'radium';
import {StyleRoot} from 'radium';

class ProjectSelector extends Component {

  render() {
    const initialSize = 2;
    const selectedSize = 3;
    const initialColor = '#edc63b';
    const newColor = '#ed883b';

    const selectProject = () => {
      this.props.selectProject(this.props.id);
    }

    const selectedAnim = Radium.keyframes({
      '0%': {fontSize: `${initialSize}em`},
      '30%': { fontSize: `${initialSize*.97}em`},
      '80%': { fontSize: `${selectedSize*1.05}em`},
      '100%': { fontSize: `${selectedSize}em`},
    });

    const deselectedAnim = Radium.keyframes({
      '0%': {fontSize: `${selectedSize}em`},
      '30%': {fontSize: `${selectedSize*1.05}em`},
      '80%': {fontSize: `${initialSize*.97}em`},
      '100%': {fontSize: `${initialSize}em`},
    });

    if (!this.props.currentlySelected) {
      var styles = {
        selector: {
          animation: `.5s ease`,
          animationName: deselectedAnim,
          color: `white`,
          fontSize: `${initialSize}em`,
          textShadow: `-1px 2px 1px #0006`,
          opacity: .8
        }
      };
    } else {
      var styles = {
        selector: {
          animation: `.5s ease`,
          animationName: selectedAnim,
          color: 'rgb(255, 209, 115)',
          opacity: 1,
          transition: '.2s',
          fontSize: `${selectedSize}em`,
          textShadow: `-1px 2px 1px #0000004d`
        }
      };
    }
    return (
      <div>
        <StyleRoot>
          <div className="selector" style={styles.selector}>{this.props.name}</div>
        </StyleRoot>
      </div>
    )
  }
}

export default Radium(ProjectSelector)