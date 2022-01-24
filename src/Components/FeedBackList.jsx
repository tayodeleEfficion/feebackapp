import React, {useContext} from 'react';
import FeedBackItem from './FeedBackItem'
import PropTypes from 'prop-types';
import {motion, AnimatePresence } from 'framer-motion';
import FeedBackContext from "../Context/FeedbackContext"



 const FeedBackList = () => {

     const {feedback} = useContext(FeedBackContext)
     if(!feedback||feedback.length===0){
         return <p>There are no feed backs yet</p>
     }
    
  return (
    <div className="feedbacl-list">
       <AnimatePresence>
       {feedback.map(item=>(
        <motion.div>
        <FeedBackItem key={item.id} item={item} />
        </motion.div>
    ))}
       </AnimatePresence>
    </div>
  )
};

FeedBackList.propTypes={
    items:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            text:PropTypes.string,
            rating:PropTypes.number
        })
    )
}

export default FeedBackList;