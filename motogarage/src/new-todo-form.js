import _ from 'lodash';
import React from 'react';
import { FormControl, Button } from 'react-bootstrap';

class NewTodoForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      desc: null
    };

    _.bindAll(this, 'onComplete');
  }

  onComplete(){
    this.props.onComplete({
      desc: this.state.desc
    });
  }

  render(){
    return <div>
      <FormControl type="text" placeholder="Describe your to do ..."
        onChange={ (e)=>{ this.setState({desc:e.target.value}) } } />
        <br />
        <Button onClick={this.onComplete}>Done</Button>
    </div>;
  }
}

export default NewTodoForm
