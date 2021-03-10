import { createStore } from "redux";
import initalState from "./initalState"
const reducer= (state=initalState, action) =>{
    switch(action.type){
        case "delete":
      return {
          ...state,
          books:state.books.filter((item) => item.id !== action.payload.itemId)
          };
          case "edit":
            return {
                ...state,
                books:state.books.map((item)=>{
                    if (item.id !== action.payload.itemId) return { ...item };
                    return { ...item, 
                        title: action.payload.newData.editedTitle,
                        author:action.payload.newData.editedAuthor,
                        description: action.payload.newData.editedDescription,
                     };
                })
            };
            case "add":
      return {
          ...state,
          books:[...state.books,  {
            title:action.payload.newData.editedTitle,
            id:action.payload.itemId,
            author: action.payload.newData.editedAuthor,
            description:action.payload.newData.editedDescription,
        }]
          };
            
            
            
            state.map((item) => {
              
              
            });



     default:
         return state;
    }
}
const store = createStore(reducer)

export default store