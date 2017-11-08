import _ from 'lodash';
import React from 'react';

require('./mod-point.css');

class ModPoint extends React.Component{
  constructor(props){
    super(props);

    _.bindAll(this, 'onClick');
  }

  onClick(){
    alert("you clicked a mod point!");
  }

  render(){
    return <div className="mod-point" style={{
      position: 'absolute',
      left: `${this.props.left}%`,
      top: `${this.props.top}%`
    }} onClick={this.onClick} />
  }
}

export default ModPoint;
