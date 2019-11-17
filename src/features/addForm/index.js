import React from 'react';
import {connect} from 'react-redux'
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

class AddForm extends React.Component {
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
        this.formatDOB = this.formatDOB.bind(this)
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
            dob: e
        })
    }
    handleCat(e){
        this.setState({
            cat: e.target.value
        })
    }
    formatDOB(e){
        var d = e.toLocaleDateString().split("/"); 
        var y = d.splice(-1)[0];
        d.splice(0, 0, y);
        var newDate = d.join("-");
        return newDate.toString()
    }
    render(){

        
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <h3>New Contact</h3>
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
                        <DatePicker
                            selected={this.state.dob}
                            placeholderText="Date of Birth"
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
                    {/* <div className="input-field col xl1 l1 s12">
                        {(this.state.name ==='') || (this.state.tel ==='')  || (this.state.dob ==='')  || (this.state.cat ==='') 
                        ? 
                        (<button className="btn blue" disabled>Add</button>) 
                        :
                        (<button
                            className="btn blue"
                            onClick={() => {
                                var d = this.state.dob.toLocaleDateString().split("/"); 
                                var y = d.splice(-1)[0];
                                d.splice(0, 0, y);
                                var newDate = d.join("-");
                                this.props.add([this.state.name, this.state.tel, newDate, this.state.cat])
                                this.setState({ name: '', tel: '', dob: '', cat: '' })
                            }}>Add</button>)
                        }
                    </div> */}
                </div>
                <div className="row form-buttons">
                    <div className="col s6 ">
                        <Link className="btn teal" to="/" >Go Back</Link>
                    </div>
                    <div className="col s6 right-align">
                    {(this.state.name ==='') || (this.state.tel ==='')  || (this.state.dob ==='')  || (this.state.cat ==='') 
                        ? 
                        (<button className="btn blue" disabled>Add</button>) 
                        :
                        (<button
                            className="btn blue"
                            onClick={() => {
                                var d = this.state.dob.toLocaleDateString().split("/"); 
                                var y = d.splice(-1)[0];
                                d.splice(0, 0, y);
                                var newDate = d.join("-");
                                this.props.add([this.state.name, this.state.tel, newDate, this.state.cat])
                                this.setState({ name: '', tel: '', dob: '', cat: '' })
                                this.props.history.push('/');
                            }}>Add</button>)
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

export default connect(mapStateToProps, mapDispatchProps)(AddForm)