import "./index.css";
import { Component } from "react";
import { connect } from "react-redux";

class EachBook extends Component {
    state = {
        isEditing: false,
        editedTitle: "",
        editedAuthor: "",
        editedDescription: ""
    };

    delBook = () => {
        this.props.onDelete(this.props.el.id)
    }

    editBook = () => {
        this.setState((_, props) => ({
            isEditing: true,
            editedTitle: props.el.title,
            editedAuthor: props.el.author,
            editedDescription: props.el.description
        }));
    }

    changedTitle = (e) => {
        const { value } = e.target
        this.setState({
            editedTitle: value
        })

    }
    changedAuthor = (e) => {
        const { value } = e.target
        this.setState({
            editedAuthor: value
        })

    }
    changedDescription = (e) => {
        const { value } = e.target
        this.setState({
            editedDescription: value
        })

    }
    saveBtn = () => {
        this.props.onEdit(this.state, this.props.el.id);
        this.setState({
            isEditing: false,
            editedTitle: "",
            editedAuthor: "",
            editedDescription: ""
        })
    }
    cancelEdit = () => {
        this.setState({
            isEditing: false,
            editedTitle: "",
            editedAuthor: "",
            editedDescription: ""
        })
    }

    render() {
        const { el } = this.props
        const { isEditing, editedTitle, editedAuthor, editedDescription } = this.state;

        if (isEditing) {
            return (
                <div className="each-book">
                    <button className='SaveCancelBtn' onClick={this.saveBtn}>Save</button>
                    <button className='SaveCancelBtn' onClick={this.cancelEdit}>Cancel</button>

                    <input
                        className="book-title-input"
                        type="text"
                        value={editedTitle}
                        onChange={this.changedTitle}
                    />
                    <input
                        className="book-author-input"
                        type="text"
                        value={editedAuthor}
                        onChange={this.changedAuthor}
                    />
                    <textarea
                        onChange={this.changedDescription}
                        className="book-description-input"
                    >
                        {editedDescription}
                    </textarea>
                </div>
            )
        }

        return (
            <div className="each-book">
                <button className='delBtn' onClick={this.delBook}>X</button>
                <button className='delBtn' onClick={this.editBook}>Edit</button>
                <p className="book-title">{el.title}</p>
                <p className="book-author">{el.author}</p>
                <p className="book-description">{el.description}</p>
            </div>
        )
    }
}
export default connect()(EachBook)