import {Dialog,Box,Typography,styled,InputBase,TextField,Button} from "@mui/material";
import {Close as CloseIcon,DeleteOutline} from '@mui/icons-material';
import {useState} from 'react';
import useApi from "../hooks/usiApi.js";
import { API_URLS } from "../services/api.url.js";
const Header=styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding: '10px 15px',
    background:'#f2f6fc',
    '& >p':{
        fontSize:14,
        fontWeight:500
    }

});
const RecipientsWrapper=styled(Box)({
    display:'flex',
    flexDirection:'column',
    padding:'0 15px',
    '& > div':{
        fontSize:14,
        borderBottom:'1px solid #F5F5F5',
        marginTop:10
    }
})
const Footer=styled(Box)({
    display:'flex',
    justifyContent:"space-between",
   padding:'10px 15px'
})
const SendButton=styled(Button)({
    background:'#0B57D0',
    color:"#fff",
    fontWeight:500,
    textTransform:'none',
    width:100,
    borderRadius:18,
    textAlign:'center'
})

const dialogStyle={
height:'80%',
width:'80%',
maxWidth:'100%',
maxHeight:'80%',
boxShadow:'none',
boxRadius:'10px 10px 0 0'
};
const ComposeMail=({openDialog,setOpenDialog})=>{
    const [data,setData]=useState({});
    const sentEmailService=useApi(API_URLS.saveSentEmail);
    const saveDraftService=useApi(API_URLS.saveDraftEmail);
    const config =  {
         Host: "smtp.elasticemail.com",
         Username: "anisharoycbowdhury6831@gmail.com",
        Password: "0954602262BFD14B6C9AB3478D30015E2DB0",
        Port: 2525, 
    }
const closeComposeMails=(e)=>{
    e.preventDefault();
const payload={
        to:data.to,
        from:"anisharoychowdhury6831@gmail.com",
        subject : data.subject,
          body : data.body,
    date:new Date(),
    image:'',
    name:"Anisha Roy Chowdhury",
starred:false,
type:'drafts'
    }
saveDraftService.call(payload);
if(!saveDraftService.error)
{
    setOpenDialog(false);
    setData({});
}
else{
console.log("Error in saving mail,error in saveDraftService");
}
    setOpenDialog(false);
}
const sendMail=(e)=>{
    e.preventDefault();
    if(window.Email)
   {
    window.Email.send({
   ...config,   
    To : data.to,
    From : "anisharoychowdhury6831@gmail.com",
    Subject : data.subject,
    Body : data.body
}).then(
  message => alert(message)
);
    }
    const payload={
        to:data.to,
        from:"anisharoychowdhury6831@gmail.com",
        subject : data.subject,
          body : data.body,
    date:new Date(),
    image:'',
    name:"Anisha Roy Chowdhury",
starred:false,
type:'sent'
    }
sentEmailService.call(payload);
if(!sentEmailService.error)
{
    setOpenDialog(false);
    setData({});
}
else{
console.log("Error in sending mail,error in sentEmailService");
}
    setOpenDialog(false);
}
const onValueChange=(e)=>{
setData({...data, [e.target.name]:e.target.value});
console.log(e.target.name,e.target.value);
}
return(
    <Dialog
    open={openDialog}
    PaperProps={{sx:dialogStyle}}
    >
        <Header>
            <Typography>New Message</Typography>
            <CloseIcon fontSize="small" onClick={(e)=>closeComposeMails(e)}/>
        </Header>
        <RecipientsWrapper>
                    <InputBase placeholder="Recipients" name="to" onChange={(e)=>onValueChange(e)}/>
        <InputBase placeholder="Subject" name="subject" onChange={(e)=>onValueChange(e)}/>

        </RecipientsWrapper>
<TextField  name='body'
multiline
rows={20}
sx={{
    '& .MuiOutlinedInput-notchedOutline':
    { 
      
    border:'none',
    borderWidth:'0px',
    borderBottom:'none',
       }
    }}
    onChange={(e)=>onValueChange(e)}
/>
<Footer>
    
<SendButton onClick={(e)=>sendMail(e)}>Send</SendButton>     
        <DeleteOutline onClick={()=>setOpenDialog(false)}/> 
</Footer>



  
    </Dialog>
)
}
export default ComposeMail;