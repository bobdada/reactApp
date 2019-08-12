import React from 'react'

class Counter extends React.Component {
    state = {
        hr: 0,
        min: 0,
        startTime: 0,
        start: null
    }

    componentDidMount() {
        this.startTimer()
    }

    startTimer = () => {
        let start = setInterval(() => {
            console.log('hi')
            this.setState({
                startTime: this.state.startTime + 1

            })
        }, 1000)
        this.setState({ start: start })

    }
    stopTimer = () => {
        clearInterval(this.state.start)

    }

    resetTimer = () => {

        clearInterval(this.state.start)
        this.setState({
            startTime: 0

        })
    }

    addHr = () => {
        this.setState({ startTime: this.state.startTime + 3600 })
    }
    addMin = () => {
        this.setState({ startTime: this.state.startTime + 60 })
    }

    componentWillUnmount() {
        clearInterval(this.state.start)
    }
    render() {
        return (
            <div>
                <p>
                    {Math.floor(this.state.startTime / 3600)}:{Math.floor(this.state.startTime / 60) % 60}:{this.state.startTime % 60}
                </p>
                <div className="container2">
                    <button className="b1"
                        onClick={() => this.startTimer()}
                    ><b>Start</b></button> <br /> <br />
                    <button className="b2" onClick={this.stopTimer}><b>Stop</b></button> <br /> <br />
                    <button className="b3" onClick={this.resetTimer}><b>Reset</b></button> <br /> <br />
                    <button onClick={this.addHr}>Add Hour</button>
                    <button onClick={this.addMin}> Add Minute</button>
                </div>
            </div >
        )

    }
}

export default Counter;