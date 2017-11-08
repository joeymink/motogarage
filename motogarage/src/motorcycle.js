import React from 'react';
import _ from 'lodash';
import ModPoint from './mod-point';

// Note this is hard-coded in css:
const MOD_POINT_WIDTH = 25;

class Motorcycle extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      points: []
    };

    _.bindAll(this, 'onClick');
  }

  onClick(ev){
    let points = _.cloneDeep(this.state.points);
    let parent = ev.target.parentElement;

    let pctLeft = ((ev.pageX - parent.offsetLeft - MOD_POINT_WIDTH/2)
      / ev.target.width) * 100;
    let pctTop = ((ev.pageY - parent.offsetTop - MOD_POINT_WIDTH/2)
      / ev.target.height) * 100;

    let newPoint = {
      x: pctLeft,
      y: pctTop
    };

    points.push(newPoint);

    this.setState({
      points: points
    });
  }

  render(){
    return <div style={{position: 'relative'}}>
      <img alt="motorcycle" src="/noun_869250_cc.svg" onClick={this.onClick} />
      {
        this.state.points.map((point, index) => (
          <ModPoint key={index} left={point.x} top={point.y} />
        ))
      }
    </div>;
  }

}

export default Motorcycle;
