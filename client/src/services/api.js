import  axios from 'axios';
  const API_URLS='';

const API_GMAIL= async (urlObject, payload,type)=>{

  console.log(API_URLS);
 return await  axios({
        method:urlObject.method,
        url:`${API_URLS}/${urlObject.endpoint}/${type}`,
          data: payload
    })

}
export default API_GMAIL;
