import axios from "axios"
import { config } from "../../config"

export async function registerEvent(
name,
description,
location,
start_time,
end_time,
organiser_name,
event_type,
fee,
status,
created_by

)

{
    try{
        //create a required url
        const url=`${config.serverURL}/events/add`

        //create the request body 

        const body ={
            name,
            description,
            location,
            start_time,
             end_time,
             organiser_name,
             event_type,
             fee,
             status,
             created_by
            
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
