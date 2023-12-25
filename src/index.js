import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Import individual pages
import Home from './pages/Home';
import Tutor from './pages/Tutor';
import Course from './pages/Course';
import About from './pages/About';
import Contact from './pages/Contact';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
 return (
    <Router>
      <Header />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/tutor" component={Tutor} />
        <Route path="/course" component={Course} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </main>
      <Footer />
    </Router>
 );
};

export default App;
