import React from 'react';
import {connect} from 'react-redux'

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            tel: '',
            dob: '',
            cat: '',
        }
        this.handleName = this.handleName.bind(this)
        this.handleTel = this.handleTel.bind(this)
        this.handleDOB = this.handleDOB.bind(this)
        this.handleCat = this.handleCat.bind(this)
    }
    handleName(e){
        this.setState({
            name: e.target.value
        })
    }
    handleTel(e){
        this.setState({
            tel: e.target.value
        })
    }
    handleDOB(e){
        this.setState({
            dob: e.target.value
        })
    }
    handleCat(e){
        this.setState({
            cat: e.target.value
        })
    }
    render(){

        
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.name} 
                    onChange={this.handleName} />
                    <input 
                        type="text" 
                        value={this.state.tel} 
                        onChange={this.handleTel} />
                        <input 
                            type="text" 
                            value={this.state.dob} 
                            onChange={this.handleDOB} />
                            <input 
                                type="text" 
                                value={this.state.cat} 
                                onChange={this.handleCat} />
                <button
                onClick={() => {
                    this.props.add([this.state.name, this.state.tel, this.state.dob, this.state.cat])
                    this.setState({ name: '', tel: '', dob: '', cat: '' })
                }}
                >Add</button>
                <ul>
                    {
                        this.props.list.map((item, index) =>  
                            <li key={index}>
                                {item[0]} | {item[1]} | {item[2]} | {item[3]}
                            <button onClick={() => {this.props.remove(index)}}>x</button>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state, ownProps){
    return {
        list: state.list,

    }
}
function mapDispatchProps(dispatch){
    return {
        add: (value) => {
            dispatch({ type: 'ADD' , payload: value})
        },
        remove: (index) => {
            dispatch({ type: 'REMOVE' , payload: index})
        },
    }

}

export default connect(mapStateToProps, mapDispatchProps)(List)