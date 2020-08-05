import React from 'react';
import Button from './components/Button.js';
import './App.scss';

function App() {
    return (
        <div className="App">
            <div className="buttons">
                <Button size="large">BUTTON</Button>
                <Button>BUTTO N</Button>
                <Button size="small">BUTTON</Button>
            </div>

            <div className="buttons">
                <Button size="large" color="gray">
                    BUTTON
                </Button>
                <Button color="gray">BUTTON</Button>
                <Button size="small" color="gray">
                    BUTTON
                </Button>
            </div>

            <div className="buttons">
                <Button size="large" color="pink">
                    BUTTON
                </Button>
                <Button color="pink">BUTTON</Button>
                <Button size="small" color="pink">
                    BUTTON
                </Button>
            </div>

            <div className="buttons">
                <Button size="large" outline={true}>
                    BUTTON
                </Button>
                <Button color="gray" outline={true}>
                    BUTTON
                </Button>
                <Button size="small" color="pink" outline>
                    BUTTON
                </Button>
            </div>

            <div className="buttons">
                <Button size="large" fullWidth={true} className="customized-button">
                    BUTTON
                </Button>
                <Button
                    size="large"
                    color="gray"
                    fullWidth={true}
                >
                    BUTTON
                </Button>
                <Button
                    size="large"
                    color="pink"
                    fullWidth
                    onClick={() => {
                        console.log('클릭!');
                    }}
                    onMouseMove={() => {
                        console.log('마우스 무브!');
                    }}
                >
                    BUTTON
                </Button>
            </div>
        </div>
    );
}

export default App;
