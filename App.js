import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Nada Gharbi",
        bio: "Web Developer from San nada.",
        imgSrc: "\image.jpg",
        profession: "Software Engineer"
      },
      shows: false,
      timeSinceMount: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Person Profile</h1>
          <button  onClick={this.toggleShow}>
            {shows ? 'Hide Profile' : 'Show Profile'}
          </button>
          {shows && (
            <div>
              <h2>{person.fullName}</h2>
              <p>{person.bio}</p>
              <img src={person.imgSrc} alt="Profile" />
              <p>{person.profession}</p>
            </div>
          )}
          <div>
            Time since component mounted: {timeSinceMount} seconds
          </div>
        </header>
      </div>
    );
  }
}

export default App;