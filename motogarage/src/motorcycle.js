import React from 'react';
import _ from 'lodash';

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

    let pctLeft = ((ev.pageX - parent.offsetLeft) / ev.target.width) * 100;
    let pctTop = ((ev.pageY - parent.offsetTop) / ev.target.height) * 100;

    /*
    let x = ev.pageX - parent.offsetLeft;
    let y = ev.pageY - parent.offsetTop;
    */

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
        this.state.points.map(function(point){
          return <span style={{
            position: 'absolute',
            left: `${point.x}%`,
            top: `${point.y}%`
          }}>POINT</span>
        })
      }
    </div>;
  }

}

export default Motorcycle;
