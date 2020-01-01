import React, { Component } from 'react';
import './App.css';

interface monsters {
  name: string;
  key: string
}
interface State {
  monstersObj: monsters[];
  search: string
}
interface Props {

}
class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      monstersObj: [],
      search: ""
    }
  }
     async componentDidMount?(): Promise<any> {
      let result: Response = await fetch("http://jsonplaceholder.typicode.com/users")
      let users = await result.json()
      this.setState({monstersObj:users})
   

  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">Typscript</header>
      </div>
    );
  }
}

export default App;
