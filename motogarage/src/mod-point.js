import _ from 'lodash';
import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

require('./mod-point.css');

class ModPoint extends React.Component{
  constructor(props){
    super(props);

    _.bindAll(this, 'renderPopover');
  }

  renderPopover(){
    return <Popover>
      Add a <Button bsStyle="link">Mod</Button> or
      <Button bsStyle="link">TODO</Button>
    </Popover>;
  }

  render(){
      return <OverlayTrigger trigger="click" rootClose placement="bottom"
          overlay={this.renderPopover()}>
        <div className="mod-point" style={{
          position: 'absolute',
          left: `${this.props.left}%`,
          top: `${this.props.top}%`
        }} ref="target" />
      </OverlayTrigger>
  }
}

export default ModPoint;
