import React from 'react';
import ReactDOM from 'react-dom';
import Survey from './Survey.png';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="contain">
                    <nav>
                        <a href="#">Ignacio The Great</a>
                        <a href="#">About</a>
                        <a href="#data">Contact</a>
                        <a href="#projects">Projects</a>
                    </nav>
                    <div className='presentation'>
                        <p>Hello there i'm</p>
                        <p>Taborda Ignacio</p>
                        <span><p>Front End Developer</p></span>
                        <div className='borde'>
                            <p>Hello there i'm</p>
                            <p>Taborda Ignacio</p>
                            <span><p>Front End Developer</p></span>
                        </div>
                    </div>
                    <h2>My projects!!</h2>
                    <div id='projects'>
                        <a href='https://codepen.io/el-nachio/full/BaKyoRW'>Survey Form<img src={Survey} alt='Survey Form'></img></a>
                        <a href='https://codepen.io/el-nachio/full/BaKyoRW'>Survey Form<img src={Survey} alt='Survey Form'></img></a>
                        <a href='https://codepen.io/el-nachio/full/BaKyoRW'>Survey Form<img src={Survey} alt='Survey Form'></img></a>
                        <a href='https://codepen.io/el-nachio/full/BaKyoRW'>Survey Form<img src={Survey} alt='Survey Form'></img></a>
                        <a href='https://codepen.io/el-nachio/full/BaKyoRW'>Survey Form<img src={Survey} alt='Survey Form'></img></a>
                        <a href='https://codepen.io/el-nachio/full/BaKyoRW'>Survey Form<img src={Survey} alt='Survey Form'></img></a>
                    </div>
                    <footer>
                        <div id='data'>
                            <p>conctact</p>
                            <p>Email: <a href="#">Igna-232011@hotmail.com</a></p>
                            <p>Facebook: <a href="#">Not availabe</a></p>
                            <p>instragram: <a href="#">not availabe</a></p>
                            <p>LinkedIn: <a href="#">not availabe</a></p>
                            <p>Twitter: <a href="#">not availabe</a></p>
                        </div>
                        <div id='Name'>
                            <p>Contact Me :) !</p>
                            <input type="text" placeholder="Enter you name"></input>
                            <input type="text" placeholder="how you find me?"></input>
                        </div>
                        <div id='input'>
                            <textarea placeholder='Enter your message PD: i do not know how to center'></textarea> 
                        </div>
                        <input id='submit' type="submit" value='Submit'></input>
                    </footer>
                </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));