import { useLocation, useOutletContext } from "react-router-dom";
import {Box,Typography,styled} from "@mui/material";
import { ArrowBack,Delete, } from "@mui/icons-material";
import { emptyProfilePic } from "../constants/constants";
import useApi from "../hooks/usiApi";
import { API_URLS } from "../services/api.url";
const IconWrapper=styled(Box)({
        padding:15
})
const Sub=styled(Typography)({
        fontSize:22,
                margin:"10px 0 20px 75px",
display:"flex"
})
const Indicator=styled(Box)({
fontSize:12,
background:"#ddd",
color:"#222",
padding:"2px 4px",
marginLeft:6,
borderRadius:4,
alignSelf:'center'
})
const Container=styled(Box)({
        marginLeft:15,
        width:"100%",
        "& > div":{
                 display:"flex",
          '&  > p > span':{
                fontSize:12, 
                color:"#5E5E5E"
        }
        }

})
const Wrapper=styled(Box)({
        display:"flex",
        //width:"100%",
        '&  > p > span':{
                fontSize:12, 
                color:"#5E5E5E"
        }
})
const Date=styled(Typography)({
        margin:"0 50px 0 auto ",
        fontSize:12,
        color:"5E5E5E"
})
const Image=styled('img')({
        borderRadius:'50%',
        width:40,
        height:40,
        margin:'5px 10px 0 10px',
        background:"#cccccc"
})
const ViewEmail=()=>{
        const {openDrawer}=useOutletContext();
const {state}=useLocation();
const {email}=state;
const moveEmailsToBinService=useApi(API_URLS.moveEmailsToBin);
const deleteEmail=()=>{
        moveEmailsToBinService.call([email._id]);
window.history.back();
}
return(
<Box style={openDrawer ? { marginLeft: 250 } : { width: '100%' }}>
        <IconWrapper>
 <ArrowBack onClick={()=>window.history.back()} color="action" fontSize="small"/>   
 <Delete fontSize="small" color="action" style={{marginLeft:40}} onClick={()=>deleteEmail()} />      
        </IconWrapper>
        <Sub>
{email.subject}
<Indicator component="span">Inbox</Indicator>
        </Sub>
<Box style={{display:'flex'}} >
 <Image src={emptyProfilePic} alt="dp"/>
 <Container style={{width:'100%' }}>
        <Box>
         <Typography style={{marginTop: "10px"}}>{email.name}<Box component="span">&nbsp;&#60;{email.to}&#62;</Box></Typography>
        <Date>
{(new window.Date(email.date)).getDate()}&nbsp;
{(new window.Date(email.date)).toLocaleDateString('default',{month:'long'})}
{(new window.Date(email.date)).getFullYear()}
        </Date>
         </Box>
        <Typography style={ {marginTop:20} }>{email.body}</Typography>

 </Container>
                    </Box>
                    
                    
</Box>
)
}
export default ViewEmail;