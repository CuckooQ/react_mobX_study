import React,{Component} from 'react'
import '../App.css';
import Menu from  "./Menu";
import Preview from  "./Preview";
import Notice from  "./Notice";

// Application
class App extends Component {
  render(){
    return (
      <div className="App">
        <Menu/>
        <Preview/>
        <Notice/>
      </div>
    );
  }
}

export default App;
