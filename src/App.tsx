import React, { Component } from 'react';
import './App.css';

interface monsters {
  name: string;
  id: string;
}
interface State {
  monstersObj: monsters[];
  search: string;
}
interface Props {}
class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      monstersObj: [],
      search: '',
    };
  }
  async componentDidMount?(): Promise<any> {
    let result: Response = await fetch('http://jsonplaceholder.typicode.com/users');
    let users = await result.json();
    this.setState({ monstersObj: users });
    console.log(this.state.monstersObj);
  }

  render() {
    return (
      <div className="App">
        {this.state.monstersObj.map((monster: monsters) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
