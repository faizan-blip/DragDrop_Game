import * as React from 'react';
import icon from '../Components/Images/logo.png'
import { Box , Button, Typography} from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import image from '../Components/Images/image.png'
import game from '../Components/Images/game.png'
import bg from '../Components/Images/bg.avif'
import { Link } from 'react-router-dom';
export default function Navbar() {
 
  return (
<>
<Box sx={{ height: "100vh", position: "relative", zIndex: "0" }} className='body'>
  {/* Blurred Background */}
  <Box
  sx={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(12px)",
    zIndex: "-1"
  }}
/>
<Box
    sx={{
      position: "relative",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      zIndex: "1",
    }}
  >
    <img src={icon} alt="" width={100} />

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        marginRight: "0.7em",
      }}
    >
      <Button
        sx={{
          borderRadius: "14px",
          padding: "0.65em 0.7em",
          fontSize: "17px",
          fontWeight: "700",
          background: "#CCCFFD",
          color: "#f5f5f5",
          boxShadow:" inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
       }}
      >
        Call Us
      </Button>
    </Box>
  </Box>
  <Box sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center" }} className='wrap'>
    <Box sx={{display:"flex" , justifyContent:"start" , flexDirection:"column",marginLeft:{lg:"4em", xs:"1em" , alignItems:"center"} , gap:"25px"}}>
<Typography sx={{fontSize:"90px" , color:"#f5f5f5" , fontWeight:"900" , width:{md:"7em" , xs:"auto"} , minWidth:"300px",textShadow:"2px 2px 10px #89CFF0" , lineHeight:"100px"}}>Let's The Game Begin</Typography>
<Link to='/drag'><Button  sx={{width:"10em" , color:"#FFF" , border:"2px solid red" , fontWeight:"900" , fontSize:"20px" , borderRadius:"17px"}} className='hover'>Play <img src={game} alt="" width={50} style={{transform:"rotate(25deg)"}} /> </Button></Link> 
</Box>
<img src={image} alt="" width={700} style={{filter:"drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))"}} className='image' />
  </Box>
</Box>

</>
  );
}