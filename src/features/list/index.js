import React from 'react';
import {connect} from 'react-redux'
import { Link } from "react-router-dom";

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
                <table className="striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact No</th>
                        <th>Date of Birth</th>
                        <th>Category</th>
                        <th className="center">Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.list.map((item, index) =>  
                        <tr key={index}>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                        <td>{item[2]}</td>
                        <td>{item[3]}</td>
                        <td className="center">
                            <Link to={`/edit/${index}`} className="btn green"><i class=" material-icons">edit</i></Link>{' '}
                            <button className="btn red" onClick={() => {this.props.remove(index)}}><i class=" material-icons">clear</i></button>
                            </td>
                    </tr>
                        )
                    }
                    </tbody>
                </table>
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