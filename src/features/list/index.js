import React from 'react';
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import ReactTable from 'react-table'

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

        const data = []

        this.props.list.map((item, index) => {
            console.log(index) 
            data.push({idNo: index, name: item[0], contact: item[1], dob:item[2], cat:item[3] })

        }

        
                        )
        const columns = [
            {
                Header: 'Full Name',
                accessor: 'name'
            },
            {
                Header: 'Contact',
                accessor: 'contact'
            }, 
            {
                Header: 'Date of Birth',
                accessor: 'dob'
            }, 
            {
                Header: 'Category',
                accessor: 'cat'
            }, 
            {
                Header: 'Actions',
                accessor: 'idNo',
                Cell: props => <div>
                            <Link to={`/edit/${props.value}`} className="btn green"><i class=" material-icons">edit</i></Link>{' '}
                            <button className="btn red" onClick={() => {this.props.remove(props.value)}}><i class=" material-icons">clear </i></button>
                    </div>
            },
        ]

          return <ReactTable data={data} columns={columns} />
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