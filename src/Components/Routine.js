import React from 'react';



class Routine extends React.Component {

    state = {
        dailyRoutine: [],
        start: '',
        end: '',
        description: ''

    }


    inputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addRoutine = () => {
        if (this.state.start === '' || this.state.end === '' || this.state.description === '') return;
        let routine = {
            start: this.state.start,
            end: this.state.end,
            description: this.state.description

        }
        this.setState({
            dailyRoutine: [...this.state.dailyRoutine, routine],
            start: '',
            end: '',
            description: ''
        }
        )
    }

    deleteRoutine = (i) => {
        this.setState({ dailyRoutine: this.state.dailyRoutine.filter((ar, ii) => i !== ii) })
    }

    render() {
        return (
            <div className="App">
                <h1 > Class Routine </h1>
                <p > You can add the routine:</p>
                <ShowRoutine dailyroutine={this.state.dailyRoutine} deleteroutine={this.deleteRoutine} />
                <InputComponent val={this.state} fn={this.inputHandler} btn={this.addRoutine} />
            </div >
        )
    }
}

class InputComponent extends React.Component {
    render() {
        return (
            <div className="inp">
                <input type="text" name="start" value={this.props.val.start}
                    onChange={this.props.fn} placeholder="start time"
                    style={{ width: '80px', height: '40px' }}
                />
                <input type="text" name="end" value={this.props.val.end}
                    onChange={this.props.fn} placeholder="end time"
                    style={{ width: '80px', height: '40px' }}
                />
                <input type="text" name="description" value={this.props.val.description}
                    onChange={this.props.fn} placeholder="description"
                    style={{ width: '400px', height: '40px' }}
                />
                <br />
                <input type="submit" value="Add" onClick={this.props.btn} className="button1" />
            </div>

        )
    }

}
class ShowRoutine extends React.Component {
    render() {
        return (
            <div className="container">
                <p>Click on the routine to delete it</p>
                <table className="container1" >
                    <tbody>
                        <tr>
                            <th>Start</th>
                            <th>End</th>
                            <th>Description</th>
                        </tr>
                        {this.props.dailyroutine.map((r, i) => {
                            return (
                                <tr key={i} onClick={() => this.props.deleteroutine(i)}>
                                    <td >{r.start}</td>
                                    <td>{r.end}</td>
                                    <td>{r.description}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default Routine;

