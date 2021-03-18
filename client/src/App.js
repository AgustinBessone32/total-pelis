import React, {useState , useEffect} from 'react';
import {BrowserRouter as Router , Route}  from 'react-router-dom'
import {auth} from './firebase-config';
import './App.css';
import CardList from './components/CardList/cardList';
import Favorites from './components/Favorites/favorites';
import Home from './components/Home/home';
import Login from './components/Login/login';
import  MovieDetail  from './components/MovieDetail/movieDetail';
import Nav from './components/Nav/nav';
import Footer from './components/Footer/footer';

function App() {
  const [userLog, setUserLog] = useState(null)

  useEffect(()=>{
    auth.onAuthStateChanged((user) => {   
       if(user) {setUserLog(user.email) }})
  },[])

  return (
    <div className="App">
      <Router>
        <Route exact path='/total-pelis/login'>
          <Login />
        </Route>
        <Route exact path='/total-pelis/'>
          <Home />
        </Route>
        <Route path='/total-pelis/home'>
          <Nav />
        </Route>
        <Route path='/total-pelis/home/movie/:id'>
          <MovieDetail />
        </Route>
        <Route exact path='/total-pelis/home'>
          <CardList />
        </Route>
        <Route exact path='/total-pelis/home/favorites'>
          <Favorites user={userLog} />
        </Route>
        <Route path='/total-pelis/home'>
          <Footer />
        </Route>

      </Router>

    </div>
  );
}

export default App;