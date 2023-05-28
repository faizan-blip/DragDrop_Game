import { Box , Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import dragbg from '../Components/Images/dragbg.jpg';
import { motion } from 'framer-motion';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import correct from '../Components/Images/correct.png'
import wrong from '../Components/Images/wrong.png'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Drag = () => {
  const [buttons, setButtons] = useState([1, 2, 3, 4, 5]); 
  const [boxes, setBoxes] = useState(Array(5).fill(null));
   const[popup , setPopup] = useState(false)
   const[popup1 , setPopup1] = useState(false)
  const handleDragStart = (e, button) => {
    e.dataTransfer.setData('text/plain', button);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    const button = e.dataTransfer.getData('text/plain');

    const updatedBoxes = [...boxes];
    updatedBoxes[index] = button;
    setBoxes(updatedBoxes);

    const updatedButtons = buttons.filter((btn) => btn !== parseInt(button));
    setButtons(updatedButtons);
  };


  const check = () => {
    const sortedBoxes = [...boxes].sort(); // Create a sorted copy of the boxes array
  
    if (boxes.every((box) => box !== null) && JSON.stringify(boxes) === JSON.stringify(sortedBoxes)) {
      setPopup(true);
    } else if (boxes.some((box) => box === null)) {
      alert('Please fill all the boxes.');
    } else {
      setPopup1(true);
    }
  };
  
const handleClose = () => {
    setPopup(false);
    setBoxes(Array(5).fill(null))
    setButtons([1,2,3,4,5])
  };

  const handleClose1 = () => {
    setPopup1(false);
    setBoxes(Array(5).fill(null))
    setButtons([1,2,3,4,5])
  };



  const renderButton = (button) => {
    return (
      <button
        key={button}
        draggable
        onDragStart={(e) => handleDragStart(e, button)}
        className="button"
      >
        {button}
      </button>
    );
  };

  const renderBox = (box, index) => {
    return (
      <div
        key={index}
        className={`box ${box ? 'filled' : ''}`}
        onDragOver={(e) => handleDragOver(e, index)}
        onDrop={(e) => handleDrop(e, index)}
      >
        {box ? box : 'Drop Here'}
      </div>
    );
  };

  return (
    <>
   <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
   
  <Box sx={{height:"100vh" ,  background:`url(${dragbg})` , display:"flex" , alignItems:"center" , justifyContent:"center" , backgroundPosition:"center" , backgroundSize:"cover" , flexDirection:"column"}} className='body1'>
  <Link to='/' style={{alignSelf:"start" , paddingTop:"1em"}}>< HomeIcon sx={{ transform:"Scale(2)" , paddingLeft:"1em", color:"white" }}/></Link>
  <Typography sx={{fontSize:{md:"90px" , sm:"50px", xs:"45px"} , color:"#f5f5f5" , fontWeight:"900",textShadow:"2px 2px 10px #89CFF0"  , opacity:"0.5"}}>Welcome to the Drag World</Typography>
  <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 , delay: 0.5 }}
    > 
{
    popup && 
    <Dialog
    open={popup}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    sx={{display:"flex" , flexDirection:"column" , justifyContent:"center !important" , alignItems:"center !important"}}
  >
    <DialogTitle sx={{display:"flex" , alignItems:"center" , justifyContent:"center" , fontSize:"25px" , fontWeight:"700" , color:"white" , background:"#0c031c"} }>Correct Answer <img src={correct} alt='' width={100} /> </DialogTitle>
    <DialogActions sx={{background:"#0c031c"}}>
      <Button sx={{color:"#fff" , fontWeight:"700"}}  onClick={handleClose}>Reset</Button>
    </DialogActions>
  </Dialog>
  }    

{
    popup1 && 
    <Dialog
    open={popup1}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose1}
    sx={{display:"flex" , flexDirection:"column" , justifyContent:"center !important" , alignItems:"center !important"}}
  >
    <DialogTitle sx={{display:"flex" , alignItems:"center" , justifyContent:"center" , fontSize:"25px" , fontWeight:"700" , color:"white" , background:"#0c031c"} }>Wrong Answer <img src={wrong} alt='' width={100} /> </DialogTitle>
    <DialogActions sx={{background:"#0c031c"}}>
      <Button sx={{color:"#fff" , fontWeight:"700"}}  onClick={handleClose1}>Reset</Button>
    </DialogActions>
  </Dialog>
  }    
      <Box sx={{background:"rgba(0,0,0,0.5)" , backdropFilter:"blur(7px)" , border:" 1px solid rgba(0,0,0,0.25)" , height:{md:"30em" ,  xs:"auto"} ,width:{md:"50em" , xs:"100vw"} , borderRadius:"10px" , display:"flex" , flexDirection:"column" , justifyContent:"start" , alignItems:"center" , gap:"35px"}}>
       <Typography sx={{marginTop:"0em" , fontSize:"40px" , fontWeight:"900" , color:"#f5f5f5"}}>DRAG & DROP </Typography>
       <div className="box-container">{boxes.map(renderBox)}</div>
       <div className="button-container">{buttons.map(renderButton)}</div>
       <Button onClick={check} sx={{boxShadow:" inset 0px 4px 4px rgba(0, 0, 0, 0.25)" , color:"whitesmoke" , marginTop:"1em" , marginBottom:{sm:"0em" , xs:"2em"} , fontWeight:"700" , fontSize:"18px"}} className='check'>Check Answer</Button>
    </Box>
    </motion.div>
    </Box>
    </motion.div>
    </>
  );
};

export default Drag;
