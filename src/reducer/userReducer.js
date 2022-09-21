import {v4 as uuid } from "uuid"
let initialState = 
    {
        datas:[
        {
          title:"React",
          date: "22/03/2022",
          text: "I was learning react",
          id:uuid()
        },
        {
          title:"React",
          date: "22/03/2022",
          text: "I was learning react",
          id:uuid()
        },
        {
          title:"React",
          date: "22/03/2022",
          text: "I was learning react",
          id:uuid()
        }
      ]
    }


const UserReducer = (state = initialState, action) => {
switch (action.type) {
    case "ADD_NOTE":
        return {...state , datas:[...state.datas, action.payload]}

    case "DELETE_NOTE": 
    const filteredNote = state.datas.filter((data) => data.id !== action.payload)
    return {...state, datas:filteredNote}

    case "EDIT_NOTE" :
      const updatedNote = state.datas.map((info)=> {
          if(info.id === action.payload.info.id) {
            return action.payload.info
          }
          else {
            return info}
          
      })

      return {...state,datas:updatedNote}

 
        
   

    default:
        return state;
}
}

export default UserReducer;
