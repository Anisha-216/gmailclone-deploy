    import { Photo, StarOutline, SendOutlined ,InsertDriveFileOutlined, MailOutlined, DeleteOutlined } from '@mui/icons-material'
//import Sidebar from '../components/Sidebar';
export const SIDEBAR_DATA=[
{
      name:'inbox',
    title:'Inbox',
    img: Photo
},
    {
      name:"starred",
    title:"Starred",
    img: StarOutline
    },
    {
      name:"sent",
    title:"Sent" ,
    img: SendOutlined
    },
    {
      name:"drafts",
    title:"Drafts" ,
    img:InsertDriveFileOutlined
    },
    {
      name:"bin",
    title:"Bin" ,
    img:DeleteOutlined
    },
    {
      name:"allmail",
    title:"All Mails" ,
    img:MailOutlined
    }   
];