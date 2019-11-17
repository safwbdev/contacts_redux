import React from 'react';
import {connect} from 'react-redux'
import DatePicker from "react-datepicker";

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
            // dob: e
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
                    <div className="input-field col s3">
                        <input 
                            type="text" 
                            placeholder="Full Name"
                            value={this.state.name} 
                            onChange={this.handleName} />
                    </div>
                    <div className="input-field col s3">
                        <input 
                            type="text" 
                            placeholder="Contact No."
                            value={this.state.tel} 
                            onChange={this.handleTel} />
                    </div>
                    <div className="input-field col s3">
                        <input 
                            type="text" 
                            placeholder="Date of Birth"
                            value={this.state.dob} 
                            onChange={this.handleDOB} />

                        {/* <DatePicker
                            selected={this.state.dob}
                            placeholderText="Date of Birth"
                            onChange={this.handleDOB} /> */}
                    </div>
                    <div className="input-field col s2">
                        <select
                            defaultValue={'DEFAULT'}
                            onChange={this.handleCat} >
                            <option value="DEFAULT" disabled>Select Category</option>
                            <option value="Family">Family</option>
                            <option value="Friend">Friend</option>
                            <option value="Colleague">Colleague</option>
                        </select>
                    </div>
                    <div className="input-field col s1">
                        {(this.state.name ==='') || (this.state.tel ==='')  || (this.state.dob ==='')  || (this.state.cat ==='') 
                        ? 
                        (<button className="btn blue" disabled>Add</button>) 
                        :
                        (<button
                            className="btn blue"
                            onClick={() => {
                                this.props.add([this.state.name, this.state.tel, this.state.dob, this.state.cat])
                                this.setState({ name: '', tel: '', dob: '', cat: '' })
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