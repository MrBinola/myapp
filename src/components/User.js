import React from "react"
import AddUser from "./AddUser"
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5"

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    render() {
        return (
            <div className="user" >
                    <IoCloseCircleSharp onClick={() => this.props.onDelete(this.props.user.id)} className="delete-icon" />
                    <IoHammerSharp onClick={() => {
                        this.setState({
                            editForm: !this.state.editForm
                        })
                    }} className="edit-icon" />
                    <h3>{this.props.user.firstname} {this.props.user.lastname}</h3>
                    <p>{this.props.user.bio}</p>
                    <b>{this.props.user.isHappy ? 'Счастлив :)' : 'Не особо :('}</b>

                    {this.state.editForm && <AddUser user={this.props.user} onAdd={this.props.onEdit} />}
                </div>
        )
    }
}

export default User