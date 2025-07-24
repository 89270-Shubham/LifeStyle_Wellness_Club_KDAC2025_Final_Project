import axios from 'axios'
import {config} from '../config'


export async function registerUser(
firstName,
lastName,
email,
phone,
password
)

{
    try{
        //create a required url
        const url=`${config.serverURL}/user/register`

        //create the request body 

        const body ={
            firstName,
            lastName,
            email, 
            phone, 
            password,
        }

        //send the request abd get the response from the server

         const response =await axios.post(url, body)
         
         if(response.status==200)
         {
            return response.data
         }
         else
         {
            return null
         }
        }
        catch(ex)
        {
            console.log(`exception:`, ex)
        }
    }



export async function loginUser(
    email, 
    password
)

{
try{
       const url=`${config.serverURL}/user/login`    
       
       const body={
           email,
           password,
       }

       const response= await axios.post(url, body)

       if(response.status==200)
       {
         return response.data
       }
       else
       {
          return null
       }

    }
    catch(ex)
    {
        console.log(`expection : `, ex)
    }


}


