import React, {useContext} from 'react';
import FeedBackItem from './FeedBackItem'
import PropTypes from 'prop-types';
import {Spinner} from "./Shared/Spinner"
import {motion, AnimatePresence } from 'framer-motion';
import FeedBackContext from "../Context/FeedbackContext"



 const FeedBackList = () => {

     const {feedback, isloading} = useContext(FeedBackContext)
     if(!isloading && (!feedback||feedback.length===0)){
         return <p>There are no feed backs yet</p>
     }
    

      return isloading? <Spinner/>:(<div className="feedbacl-list">
      <AnimatePresence>
      {feedback.map(item=>(
       <motion.div>
       <FeedBackItem key={item.id} item={item} />
       </motion.div>
   ))}
      </AnimatePresence>
   </div>)
 
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