import React, {useContext} from 'react';
import Card from "./Shared/Card"
import PropTypes from 'prop-types'
import {FaEdit, FaTimes} from "react-icons/fa"
import FeedBackContext from "../Context/FeedbackContext"

 const FeedBackItem = ({item}) => {
    const {handleDelete, EditFeedBack} = useContext(FeedBackContext)
  return (
      <Card >
      <div className="num-display">
          {item.rating}
      </div>
      <button className='close' onClick={()=>handleDelete(item.id)}>
          <FaTimes/>
      </button>
      <button className="edit" onClick={()=>EditFeedBack(item)}>
          <FaEdit color="purple"/>
      </button>
      <div className="text-display">
          {item.text}
      </div>
      
      </Card>
  )
};

 FeedBackItem.propoTypes={
     item:PropTypes.object
 }

export default FeedBackItem
