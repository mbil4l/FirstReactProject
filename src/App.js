import React from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBar from './SearchBar';

class App extends React.Component {
    
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    OnSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
        
    //console.log(filteredRobots);    
    }

    render() {
    const filteredRobots = this.state.robots.filter(robot =>  {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    
    return (
    <div className='tc'>
        <h1> Robots </h1>
        <SearchBar searchChange={this.OnSearchChange}/>
        <CardList robots={filteredRobots}/>
    </div>)  
}}

export default App;



  