import React from 'react';
import _ from 'lodash';
import ModPoint from './mod-point';
import { Button } from 'react-bootstrap';

// Note this is hard-coded in css:
const MOD_POINT_WIDTH = 25;

class Motorcycle extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      points: [],
      mode_add: false
    };

    _.bindAll(this, 'onClick');
  }

  onClick(ev){
    if (!this.state.mode_add) return;

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
    return <div>

      <Button disabled={this.state.mode_add}
        onClick={()=>this.setState({mode_add: true})}>Add</Button>
      {
        this.state.mode_add ? <Button
          onClick={()=>this.setState({mode_add: false})}>Cancel</Button>
          : null
      }

      <div style={{position: 'relative'}}>
        <img alt="motorcycle" src="/noun_869250_cc.svg" onClick={this.onClick} />
        {
          this.state.points.map((point, index) => (
            <ModPoint key={index} left={point.x} top={point.y} />
          ))
        }
      </div>
    </div>
  }

}

export default Motorcycle;
