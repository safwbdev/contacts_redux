import React from 'react';
import {connect} from 'react-redux'
import { Link } from "react-router-dom";

class EditForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.list[this.props.match.params.id][0],
            tel: this.props.list[this.props.match.params.id][1],
            dob: this.props.list[this.props.match.params.id][2],
            cat: this.props.list[this.props.match.params.id][3],
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
                <div className="row">
                    <div className="col s12">
                        <h4>Update Contact</h4>
                    </div>
                    <div className="input-field col xl6 l6 m6 s12">
                        <input 
                            type="text" 
                            placeholder="Full Name"
                            value={this.state.name} 
                            onChange={this.handleName} />
                    </div>
                    <div className="input-field col xl6 l6 m6 s12">
                        <input 
                            type="text" 
                            placeholder="Contact No."
                            value={this.state.tel} 
                            onChange={this.handleTel} />
                    </div>
                    <div className="input-field col xl6 l6 m6 s12">
                        <input 
                            type="text" 
                            placeholder="Date of Birth"
                            value={this.state.dob} 
                            onChange={this.handleDOB} />
                    </div>
                    <div className="input-field col xl6 l6 m6 s12">
                        <select
                                defaultValue={'DEFAULT'}
                                onChange={this.handleCat} >
                                <option value="DEFAULT" disabled>Select Category</option>
                                <option value="Family">Family</option>
                                <option value="Friend">Friend</option>
                                <option value="Colleague">Colleague</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 ">
                        <Link className="btn teal" to="/" >Go Back</Link>
                    </div>
                    <div className="col s6 right-align">
                    {(isNaN(this.state.tel)) ? (<div className="error">Contact No. should be a number</div> ) : ('')}{' '}
                        {(this.state.name ==='') || (this.state.tel ==='')  || (this.state.dob ==='')  || (this.state.cat ==='') || (isNaN(this.state.tel))
                        ? 
                        (<button className="btn blue " disabled>Update</button>) 
                        :
                        (<button
                            className="btn blue"
                            onClick={() => {
                                // edit pseudo code
                                //----------------------
                                // this.props.remove(this.props.match.params.id)
                                // this.props.add([this.state.name, this.state.tel, this.state.dob, this.state.cat])
                                // this.setState({ name: '', tel: '', dob: '', cat: '' })
                                // this.props.history.push('/');
                                //----------------------
                            }} disabled>Update</button>)
                        }
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchProps)(EditForm)