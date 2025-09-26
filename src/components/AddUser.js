import React from "react"

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Имя" onChange={(e) => this.setState({ firstname: e.target.value })} />
                <input placeholder="Фамилия" onChange={(e) => this.setState({ lastname: e.target.value })} />
                <textarea placeholder="Биография" onChange={(e) => this.setState({ bio: e.target.value })}></textarea>
                <input placeholder="Возраст" onChange={(e) => this.setState({ age: e.target.value })} />
                <label htmlFor="isHappy">Счастлив?</label>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({ isHappy: e.target.checked })} />
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    const userAdd = {
                        firstname: this.state.firstname || (this.props.user && this.props.user.firstname),
                        lastname: this.state.lastname || (this.props.user && this.props.user.lastname),
                        bio: this.state.bio || (this.props.user && this.props.user.bio),
                        age: this.state.age || (this.props.user && this.props.user.age),
                        isHappy: this.state.isHappy || (this.props.user && this.props.user.isHappy)
                    }
                    if (this.props.user) userAdd.id = this.props.user.id
                        this.props.onAdd(userAdd)
                }
                }>Добавить</button>
            </form>
        )
    }
}

export default AddUser