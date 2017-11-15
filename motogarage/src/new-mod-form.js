import _ from 'lodash';
import React from 'react';
import { FormControl, Button } from 'react-bootstrap';

class NewModForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name: null,
      make: null
    };

    _.bindAll(this, 'onComplete');
  }

  onComplete(){
    this.props.onComplete({
      name: this.state.name,
      make: this.state.make
    });
  }

  render(){
    return <div>
      <FormControl type="text" placeholder="clip ons, rear sets, etc."
        onChange={ (e)=>{ this.setState({name:e.target.value}) } } />
      made by <FormControl type="text" placeholder="Company XYZ"
        onChange={ (e)=>{ this.setState({make:e.target.value}) } }/>
        <br />
        <Button onClick={this.onComplete}>Done</Button>
    </div>;
  }
}

export default NewModForm;
