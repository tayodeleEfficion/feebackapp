import {useState, createContext} from "react"
import {v4 as uuidv4} from 'uuid'


const FeedBackContext = createContext()

 export const FeedBackProvider =({children})=>{
     const[feedback,setFeedBack] = useState([
         {
             id:1,
             text:"this is feedback item 1",
             rating:7
         },
         {
            id:2,
            text:"this is feedback item 2",
            rating:10
        },
        {
            id:3,
            text:"this is feedback item 2",
            rating:6
        },
     ])
      const [feedBackedit, setFeedbackEdit] = useState({
          item:{},
          edit:false
      })

      const EditFeedBack=(item)=>{
          setFeedbackEdit({
              item,
              edit:true
          })
      }

     const handleDelete=(id)=>{
        if(window.confirm("Are you sure you want to delete")){
            setFeedBack(feedback.filter(item=>item.id!==id))
        }
    }

    const handleFeedBack=(newFeed) =>{
        newFeed.id=uuidv4()
        setFeedBack([newFeed, ...feedback])
    }
     const updateFeedBack=(id, updItem)=>{
        setFeedBack(feedback.map(item=>item.id===id?{...item, ...updItem}:item))
     }

    return <FeedBackContext.Provider value={{
        feedback,
        updateFeedBack,
        EditFeedBack,
     handleFeedBack, 
     feedBackedit, 
     handleDelete}}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext