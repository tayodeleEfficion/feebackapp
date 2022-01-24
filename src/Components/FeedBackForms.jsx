import React, {useState, useContext, useEffect} from 'react';
import Card from "./Shared/Card"
import Button from "./Button"
import FeedBackContext from "../Context/FeedbackContext"
import RatingSelect from './RatingSelect';

const FeedBackForms = () => {
     const [text, setText] = useState('')
     const [btnDiasabled, setBtnDisabled] = useState(true)
     const [rating, setRating] = useState(10)
     const [message, setMessage] = useState('')
      const {handleFeedBack, feedBackedit, updateFeedBack}  = useContext(FeedBackContext)
    

      const handleText=(e)=>{
          if(text===""){
           setBtnDisabled(true)
           setMessage(null)
          }else if(text!=="" && text.trim().length<=10){
              setMessage('Text Must be at Least 10 Characters')
              setBtnDisabled(true)
          }else{
              setMessage(null)
              setBtnDisabled(false)
          }
          setText(e.target.value)
      }
        const handleSubmit=(e)=>{
            e.preventDefault()
            if(text.trim().length>10){
                const newFeedback={
                    text,
                    rating
                }
                 if(feedBackedit.edit===true){
                     updateFeedBack(feedBackedit.item.id, newFeedback)
                 }else{
                    handleFeedBack(newFeedback);
                 }
               
                setText('')
            }
        }


         useEffect(()=>{
         if(feedBackedit.edit===true){
             setBtnDisabled(false)
             setText(feedBackedit.item.text)
             setRating(feedBackedit.item.rating)
         }
         },[feedBackedit])
     
  return (
    <Card>
   <form onSubmit={handleSubmit}>
        
         <RatingSelect select={(rating)=>setRating(rating)}/>
       <h2>How would You Rate Out services</h2>
    <div className="input-group">
        <input placeholder="Write A Review" value={text} onChange={handleText} />
        <Button type="submit" isDisabled={btnDiasabled} version="secondary">Send</Button>
    </div>
          <h5>{message}</h5>
   </form>
    </Card>
  )
};


export default FeedBackForms;
