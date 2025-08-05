import axios from 'axios';
import { config } from '../../config';






export async function getEventDetails(id)
{
    try{
        const url = `${config.serverURL}/event/details/${id}`
        const token = sessionStorage.getItem('token')
        const response = await axios.get(url, 
            {
                headers: { token},
            })
            if (response.status === 200)
            {
                return response.data
            }
        }
            catch(ex)
            {
                console.log('expected:', ex)

            }
        }

        //get all events 
        export async function getAllEvents() {
            try{
                const url = `${config.serverURL}/event`
               
                const response = await axios.get(url)
                if(response.status === 200)
                {
                    console.log(response.data);
                    return response.data
                }
            }
            catch(ex)
            {
                console.log(' error fetching events: ', ex)
            }
            
        }

        //get events created by logged -in user
        export async function getMyEvent() {
            try{
                const url = `${config.serverURL}/event/my`
                const token = sessionStorage.getItem('token')
                const response = await axios.get(url, {
                    headers: { token},
                })
                if(response.status === 200)
                {
                    return response.data
                }
            }
            catch (ex)
            {
                console.log('exception ', ex)
            }
            
        }

        //upload a new event - form data
        export async function uploadEvent(
            title,
            description,
            location,
            data,
            time,
            price,
            capacity,
            image

        )
        {
            try{
                const url = `${config.serverURL}/event`

                //send form-data
                const body = new FormData()
                body.append('title', title)
                body.append('description', description)
                body.append('location', location)
                body.append('date', date)
                body.append('time', time)
                body.append('price', price)
                body.append('capacity', capacity)
                body.append('photo', image)

                const token = sessionStorage.getItem('token')
                const response = await axios.post(url, body,{
                    headers:{token},
                })
                if(response.status === 200)
                {
                    return response.data
                }

            }catch(ex)
            {
                console.log('exception:', ex)
            }
        }
        
       