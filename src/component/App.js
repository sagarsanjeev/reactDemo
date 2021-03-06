import React,{Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from '../container/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Header from './Header';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}/>
                <Footer/>
            </div>
            </BrowserRouter>
        )
    }
}

export default App;