import React from 'react';
import img from './images/img.png';
import { motion } from 'framer-motion';

const Images = ({ setSelectedImg }) => {
  

  return (
    <div className="img-grid">
      
        <motion.div className="img-wrap" 
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => setSelectedImg()}
        >
          <motion.img src={img} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />

          <motion.img src={img} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />

          <motion.img src={img} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      
    </div>
  )
}

export default Images;