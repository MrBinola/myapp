import React from "react"
import Header from "./components/Header"
// import Image from "./components/Image"
// import logo from "./img/logo.jpg"
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import axios from "axios"

const baseUrl = "https://reqres.in/api/users/2"

class App extends React.Component {
    constructor(props) {
        super(props)

        axios.get(baseUrl).then((res) => {
            console.log(res.data.data)
        })
        .catch((err) => {
        console.error(err)
      })

        this.state = {
            users: [
                {
                    id: 1,
                    firstname: 'Bob',
                    lastname: 'Marley',
                    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati.',
                    age: 40,
                    isHappy: true
                },
                {
                    id: 2,
                    firstname: 'John',
                    lastname: 'Doe',
                    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, obcaecati.',
                    age: 22,
                    isHappy: false
                }
            ]
        }
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }
    // constructor(props) {
    //     super (props)
    //     this.state = {
    //         helpText: "Help text",
    //         userData: ""
    //     }

    //     this.inputClick = this.inputClick.bind(this)
    // }

    // componentDidUpdate(prevProp) {
    //     if(this.state.helpText !== "Help")
    //         console.log("Some")
    // }

    render() {
        return (<div>
            <Header title="Список пользователей" />
            {/* <h1>{this.state.helpText}</h1>
            <h2>{this.state.userData}</h2>
            <input placeholder={this.state.helpText}
                onChange={event => this.setState({userData: event.target.value})} 
                onClick={this.inputClick} onMouseEnter={this.mouseOver} />
            <p>{this.state.helpText ===  "Help text!" ? "Yes" : "No"}</p>
            <Image image={logo} />
            <img src={logo} alt=""/> */}
            <main>
                <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
            </main>
            <aside>
                <AddUser onAdd={this.addUser} />
            </aside>
        </div>)
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        })
    }

    editUser(user) {
        let allUsers = this.state.users
        allUsers[user.id - 1] = user

        this.setState({ user: [] }, () => {
            this.setState({ users: [...allUsers] })
        })
    }

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, { id, ...user }] })
    }

//     inputClick() {
//         this.setState({helpText: "Changed"})
//         console.log("Clicked")
//     }
//   mouseOver() {console.log("Mouse Over")}
}

export default App