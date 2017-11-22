import React from 'react';
import _ from 'lodash';
import ModPoint from './mod-point';
import ViewSelector from './view-selector'
import { Button, Row, Col } from 'react-bootstrap';
import model from './models';

// Note this is hard-coded in css:
const MOD_POINT_WIDTH = 25;

class Motorcycle extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      points: [],
      mode_add: false,
      view: 'left'
    };

    _.bindAll(this, 'onClick', 'onViewChange', 'getImageUrl');
  }

  onClick(ev){
    // If we're NOT currently in mod-point add mode:
    if (!this.state.mode_add) return;

    let points = _.cloneDeep(this.state.points);
    let parent = ev.target.parentElement;

    let pctLeft = ((ev.pageX - parent.offsetLeft - MOD_POINT_WIDTH/2)
      / ev.target.width) * 100;
    let pctTop = ((ev.pageY - parent.offsetTop - MOD_POINT_WIDTH/2)
      / ev.target.height) * 100;

    let newPoint = {
      id: Math.random(), // TODO: better unique id?
      view: this.state.view,
      x: pctLeft,
      y: pctTop
    };

    points.push(newPoint);
    model.addPoint(pctLeft, pctTop, this.state.view, newPoint.id);

    this.setState({
      points: points
    });
  }

  onViewChange(viewName){
    this.setState({
      view: viewName
    });
  }

  getImageUrl(){
    // TODO: add images to the model
    switch(this.state.view){
      case 'left': return '/noun_869250_cc_mirrored.png';
      case 'right': return '/noun_869250_cc.svg';
      default: throw new Error("invalid view in motorcycle state");
    }
  }

  render(){
    return <div>
      <Row>
        <Col xsOffset={4} xs={4}>
          <ViewSelector onViewChange={this.onViewChange} />
        </Col>

        <Col xs={4}>
          <Button disabled={this.state.mode_add}
            onClick={()=>this.setState({mode_add: true})}>Add</Button>
          {
            this.state.mode_add ? <Button
              onClick={()=>this.setState({mode_add: false})}>Cancel</Button>
              : null
          }

          <Button onClick={ ()=>{console.log(JSON.stringify(model))} } >
            Export
          </Button>
        </Col>
      </Row>

      <div style={{position: 'relative'}}>
        <img alt={`motorcycle_${this.state.view}`} src={this.getImageUrl()}
          onClick={this.onClick} />
        {
          _.filter(this.state.points, (p)=>(p.view === this.state.view))
            .map((point, index) => (
              <ModPoint key={index} left={point.x} top={point.y}
                id={point.id} view={this.state.view} />
            ))
        }
      </div>
    </div>
  }

}

export default Motorcycle;
