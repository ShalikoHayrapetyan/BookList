import "./index.css";
import { Component } from "react";
import { connect } from "react-redux";

class CreateNewBookForm extends Component {
    state = {
        editedTitle: "",
        editedAuthor: "",
        editedDescription: ""
    };



changedTitle = (e) => {
    const { value } = e.target
    this.setState({
        editedTitle: value
    })

}
changedAuthor = (e) => {
    const { value } = e.target
    this.setState({
        editedAuthor: `by ${value}`
    })

}
changedDescription = (e) => {
    const { value } = e.target
    this.setState({
        editedDescription: value
    })

}
addBookBtn = () => {
    this.props.onAdd(this.state, this.state.editedTitle);
    this.props.ChangeCreateStatus()
}
    render() {
        return (
            <>
                <div className="createBook">
                    <input className="title-author"  type="text" placeholder="title" onChange={this.changedTitle}/>
                    <input  className="title-author" type="text" placeholder="author" onChange={this.changedAuthor} />
                    <textarea className="description" cols="30" rows="50" onChange={this.changedDescription}></textarea>
                    <button className ="add-close" onClick={this.addBookBtn}>Add</button>
                    <button className ="add-close" onClick={this.props.ChangeCreateStatus} >Close</button>
                </div>

            </>

        )
        }
}

export default CreateNewBookForm
