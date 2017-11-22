import React from 'react';
import { Button } from 'react-bootstrap';

class ViewSelector extends React.Component{
  render(){
    let fn = this.props.onViewChange
    return <div>
      {
        ['left', 'right'].map(
          (name)=>
            (<Button key={name} onClick={ ()=>{ fn(name) } } >{name}</Button>)
        )
      }
    </div>;
  }
}

export default ViewSelector;
