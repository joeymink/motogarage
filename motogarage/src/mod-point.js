import _ from 'lodash';
import React from 'react';
import { Button, OverlayTrigger, Popover, Glyphicon, Row, Col }
  from 'react-bootstrap';
import NewModForm from './new-mod-form';
import NewTodoForm from './new-todo-form';

require('./mod-point.css');

class ModPoint extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      current_activity: null,
      mods: [],
      todos: []
    };

    _.bindAll(this, 'renderPopover', 'onClickNewMod', 'onClickNewTodo',
      'handleNewMod', 'handleNewTodo');
  }

  onClickNewMod(){
    this.setState({current_activity: 'new_mod'});
  }

  onClickNewTodo(){
    this.setState({current_activity: 'new_todo'});
  }

  handleNewMod(mod){
    // TODO: submit new mod via API
    let mods = _.cloneDeep(this.state.mods);
    mods.push(mod);
    this.setState({
      mods: mods,
      current_activity: null
    });
  }

  handleNewTodo(todo){
    // TODO: submit new todo via API
  }

  renderNewModPopover(){
    return <Popover id={`${this.props.id}_popover`}>
      <NewModForm onComplete={this.handleNewMod} />
    </Popover>;
  }

  renderNewTodoPopover(){
    return <Popover id={`${this.props.id}_popover`}>
      <NewTodoForm onComplete={this.handleNewTodo} />
    </Popover>;
  }

  renderPopover(){
    switch(this.state.current_activity){
      case 'new_mod': return this.renderNewModPopover();
      case 'new_todo': return this.renderNewTodoPopover();
      default: break;
    }

    return <Popover id={`${this.props.id}_popover`}>
      <Row>
        <Col xs={12}>
          <ul className="list-unstyled">
            {
              this.state.mods.map((m, i)=>( <li key={i}>{m.make} {m.name}</li> ))
            }
            <li>
              <Button bsStyle="link" onClick={this.onClickNewMod}>
                <Glyphicon glyph="plus" /> New Mod
              </Button>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ul className="list-unstyled">
            {
              this.state.todos.map((t)=>( <li>{t.desc}</li> ))
            }
            <li>
              <Button bsStyle="link" onClick={this.onClickNewTodo}>
                <Glyphicon glyph="plus" /> To Do
              </Button>
            </li>
          </ul>
        </Col>
      </Row>
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
