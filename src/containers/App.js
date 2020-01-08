import React from 'react';
import { robots } from '../robots';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';

class App extends React.Component {
    
    constructor() {
        super();
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
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot =>  {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (!robots.length){
        return <h1 className='title grow tc shadow-5 f-headline'>Loading</h1>
    }
    return (
    <div className='tc'>
        <h1 className='title grow shadow-5 f-headline'> Robots </h1>
        <SearchBar searchChange={this.OnSearchChange}/>
        <Scroll>
            <CardList robots={filteredRobots}/>
        </Scroll>
    </div>)  
}}

export default App;



  