import React, {Component} from 'react';

import TechItem from './TechItem';

class TeachList extends Component {
  // valor da props como default
  // static defaultProps = { 
  //   tech: ''
  // }

  state = {
    newTech: '',
    techs: [
      'Node.JS',
      'ReactJS',
      'React Native'
    ]
  };

  handleInputChange = e => {
    this.setState({newTech: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t != tech)})
  }

  render() {
    return (
      //tag sem nome para não atrapalhar na estilização
      <form onSubmit={this.handleSubmit}> 
        <ul>
          {this.state.techs.map(tech => 
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)}
            />
          )}
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TeachList;