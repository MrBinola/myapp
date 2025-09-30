import React from "react"

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: "",
            isHappy: false,
            error: ""
        }
    }

            handleSubmit = () => {
                if (!this.state.firstname || !this.state.lastname || !this.state.bio || !this.state.age) {
                this.setState({ error: "Заполните все поля!" })
                return
        }

                this.setState({ error: "" })
                this.myForm.reset()

                this.userAdd = {
                    firstname: this.state.firstname,
                lastname: this.state.lastname,
                bio: this.state.bio,
                age: this.state.age,
                isHappy: this.state.isHappy
        }

                    if (this.props.user) this.userAdd.id = this.props.user.id
                        this.props.onAdd(this.userAdd)
    }

    render() {
        return (
                <form ref={(el) => (this.myForm = el)}>
                <input placeholder="Имя" onChange={(e) => this.setState({ firstname: e.target.value })} />
                <input placeholder="Фамилия" onChange={(e) => this.setState({ lastname: e.target.value })} />
                <textarea placeholder="Биография" onChange={(e) => this.setState({ bio: e.target.value })}></textarea>
                <input placeholder="Возраст" type="number" onChange={(e) => this.setState({ age: e.target.value })} />
                <label htmlFor="isHappy">Счастлив?</label>
                    <input
                    type="checkbox"
                    id="isHappy"
                    onChange={(e) => this.setState({ isHappy: e.target.checked })}
                />
                <button type="button" onClick={this.handleSubmit}>
                    Добавить
                </button>
                {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
            </form>
        )
    }
}

export default AddUser