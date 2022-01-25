import {useState, createContext, useEffect} from "react"



const FeedBackContext = createContext()

 export const FeedBackProvider =({children})=>{
     const[feedback,setFeedBack] = useState([])
      const [isloading, setIsLoading] = useState(true)
      const [feedBackedit, setFeedbackEdit] = useState({
          item:{},
          edit:false
      })
       const fetchFeedBack =async()=>{
           const response  =  await fetch(`/feedback?_sort=id&_order=desc`)
           const data =  await response.json()
           setFeedBack(data)
           setIsLoading(false)
       }

       useEffect(() => {
          fetchFeedBack()
       }, [])

      const EditFeedBack=(item)=>{
          setFeedbackEdit({
              item,
              edit:true
          })
      }

     const handleDelete= async(id)=>{
        if(window.confirm("Are you sure you want to delete")){
            await fetch(`/feedback/${id}`, {method:"DELETE"})
            setFeedBack(feedback.filter(item=>item.id!==id))
        }
    }

    const handleFeedBack=async(newFeed) =>{
         const response = await fetch(`/feedback`, {
             method:'POST',
             headers:{
                 'Content-Type':'application/json',
             },
             body:JSON.stringify(newFeed)
         })
         const data  =  await response.json()
         console.log("add", data)
        setFeedBack([data, ...feedback])
    }
     const updateFeedBack=async(id, updItem)=>{
          const response = await fetch(`/feedback/${id}`, {
              method:"PUT",
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify(updItem)
          })
           const data  =  await response.json()
        setFeedBack(feedback.map(item=>item.id===id?{...item, ...data}:item))
     }

    return <FeedBackContext.Provider value={{
        feedback,
        updateFeedBack,
        isloading,
        EditFeedBack,
     handleFeedBack, 
     feedBackedit, 
     handleDelete}}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext