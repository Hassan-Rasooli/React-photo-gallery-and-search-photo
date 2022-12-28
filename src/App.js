import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      monsters: [],
      searchField: '',
    };
  }
  componentDidMount() {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((res) =>
        this.setState(() => {
          return { monsters: res.users }
        })
      )
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    })
  }

  render() {
    console.log(this.state)
    console.log('render app')
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.maidenName.toLocaleLowerCase().includes(searchField)
    })
    console.log(filteredMonsters)
    return (
      <div className="App">

        <h1 className='app-title'>Photo Gallery & Album</h1>
        <SearchBox
          className='search-box'
          onChangeHandler={onSearchChange}
          placeholder='Search Photo'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
