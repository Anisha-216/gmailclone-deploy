import { AppBar, Toolbar,  styled,InputBase,Box} from "@mui/material";
import {Menu as MenuIcon,Search,Tune,HelpOutlineOutlined, SettingsOutlined,AppsOutlined,AccountCircleOutlined} from '@mui/icons-material';
import shadows from "@mui/material/styles/shadows";
import { gmailLogo } from '../constants/constants';

const SearchWrapper=styled(Box)
(
    {
        background:'#EAF1FB',
    marginLeft:80,
    borderRadius:8,
    minWidth:690,
    maxWidth:720,
    height:48,
display: 'flex',
alignItems: 'center',
justifyContent:'space-between',
padding:'0 20px',
'& >div':{
    width:'100%',
    padding:'0 5px' 
}
   }
);
const OptionsWrapper=styled(Box)(
    {
        width:"100%",
        display:'flex',
        justifyContent:'end',
        '& > svg':{
  marginLeft:20
      }
    }
)

const StyledAppBar = styled(AppBar)
({
background: '#F5F5F5',
boxShadow:'none'
}
    )
const Header= ({toggleDrawer})=>{
    return (
        
             <StyledAppBar position="static">
            <Toolbar>
                <MenuIcon color="action" onClick={toggleDrawer}/>
                <img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15 }} />
<SearchWrapper>
    <Search color="action"/>
    <InputBase placeholder="Search mail"/>
    <Tune color="action"/>
    </SearchWrapper>

        <OptionsWrapper>
        <HelpOutlineOutlined color="action"/>
        <SettingsOutlined color="action"/>
        <AccountCircleOutlined color="action"/>
        <AppsOutlined color="action"/>
        </OptionsWrapper>

                </Toolbar>
            </StyledAppBar>
        
    )
}
export default Header;