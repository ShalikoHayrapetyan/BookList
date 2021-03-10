import "./index.css";
import { Component } from "react";
import { connect } from "react-redux";
import EachBook from "./EachBook";
import CreateNewBookForm from "./CreateNewBookForm";

class BookList extends Component {
    state = {
        isCreateNewBook: false
    }

    onDelete = (itemId) => {
        this.props.dispatch({
            type: 'delete',
            payload: {
                itemId
            }
        })
    }
    onEdit = (newData, itemId) => {
        this.props.dispatch({
            type: 'edit',
            payload: {
                newData,
                itemId
            }
        })
    };
    onAdd = (newData, itemId) => {
        this.props.dispatch({
            type: 'add',
            payload: {
                newData,
                itemId
            }
        })
    };
    StartCreate = () => {
        this.setState({
            isCreateNewBook: true
        })
    }
    ChangeCreateStatus = () => {
        this.setState({
            isCreateNewBook: false
        })
    }
    render() {
        const { books } = this.props
        return (
            <>
                <div className="userName">
                    <div >
                        <p>User` {this.props.login}  </p>
                    </div>
                    <div className="logOutBtn">
                        <button onClick={this.props.logOutUser} >Log Out</button>
                    </div>
                </div>

                
                { this.state.isCreateNewBook ? (
                    <CreateNewBookForm ChangeCreateStatus={this.ChangeCreateStatus} onAdd={this.onAdd} />) : <div className="BtnCreateNewBook">
                    <button onClick={this.StartCreate} >Create New Book</button>

                </div>
                }
                <h1 className='booklist-title'>My Favorite Books</h1>
                <div className="book-list">
                    {books.map((el) => (
                        <EachBook
                            key={el.title}
                            el={el}
                            onDelete={this.onDelete}
                            onEdit={this.onEdit}
                        />
                    ))
                    }
                </div>
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookList);
