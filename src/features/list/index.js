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
            data.push({
                idNo: index, 
                name: item[0], 
                contact: item[1], 
                dob:item[2], 
                cat:item[3] 
            })
            return undefined
        })

        const columns = [
            {
                Header: 'Full Name',
                accessor: 'name',
                foldable: false,
                minWidth: 120,
                
            },
            {
                Header: 'Contact',
                accessor: 'contact',
                foldable: false,
                minWidth: 60,
            }, 
            {
                Header: 'Date of Birth',
                accessor: 'dob',
                foldable: false,
                minWidth: 100,
            }, 
            {
                Header: 'Category',
                accessor: 'cat',
                foldable: false,
                minWidth: 60,
            }, 
            {
                Header: 'Actions',
                accessor: 'idNo',
                foldable: false,
                sortable: false,
                className: 'center',
                minWidth: 60,
                Cell: props =>  <div>
                                    <Link to={`/edit/${props.value}`} className="btn green"><i className=" material-icons">edit</i></Link>{' '}
                                    <button className="btn red" onClick={() => {this.props.remove(props.value)}}><i className=" material-icons">clear </i></button>
                                </div>
            },
        ]

        return <div className="section">
                    <div className="row">
                        <div className="xl12 l12 s12 right">
                            <Link to={'/new'} className="btn blue add-new">
                                <i className=" material-icons">add </i>{' '}Add new contact
                            </Link>
                        </div>
                    </div>
                    <ReactTable data={data} columns={columns} minRows={10} defaultPageSize={10} />
                </div>
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