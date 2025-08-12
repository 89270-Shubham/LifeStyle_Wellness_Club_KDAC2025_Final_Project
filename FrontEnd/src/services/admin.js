import axios from "axios"
import { config } from "../../config"

export async function registerAdmin(
admin_name,
email,
password,

)

{
    try{
        //create a required url
        const url=`${config.serverURL}/admin/register`

        //create the request body 

        const body ={
            admin_name,
            email, 
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


export async function loginAdmin(email, password) {
    try {
        // create url
        const url = `${config.serverURL}/admin/login`

        // create a body
        const body = {
            email,
            password,
        }
        
        // call Post API
        const response = await axios.post(url, body)
       

        // check if response is OK
        console.log(response)
        console.log(response.status)
        if (response.status == 200) {
            // send the response body
            return response
        } else {
            // send null result
            return null
        }
    } catch (ex) {
        console.log(`exception: `, ex)

    }
}


