import axios from 'axios'
import {config} from '../../config'

 

//get all villas
export async function getAllVillas()
{
    try{
        const url = `${config.serverURL}/admin/villas/get`
        // const token = sessionStorage.getItem('token')
        const response = await axios.get(url)

        if (response.status === 200) 
        {
            return response.data
        }
    }
    catch(ex)
    {
        console.log('exception:', ex)
    }
    }

    //delete villa
    export async function deleteVilla(id) {
  try {
    if (!id) throw new Error('deleteVilla: id is required');
    const url = `${config.serverURL}/admin/villas/${id}`; // <-- change this to match your backend

    // If your backend expects a token:
    const token = sessionStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const res = await axios.delete(url, { headers });

    // Some APIs return 204 No Content; some return 200 with a body
    if (res.status === 200 || res.status === 204) {
      return { success: true, data: res.data };
    }
    return { success: false, status: res.status, data: res.data };
  } catch (ex) {
    console.error('deleteVilla exception:', ex);
    // propagate so caller can show error UI
    throw ex;
  }
}



    //get villa details by id
    export async function getVillaDetails(id)
    {
        try{
            const url = `${config.serverURL}/villa/details/${id}`
            const token = sessionStorage.getItem('token')
            const response = await axios.get(url,{
                headers:{token}
            })
            if(response.status=== 200)
            {
                return response.data
            }
        }
        catch(ex)
        {
            console.log('exception:' ,ex)
        }
    }

    //get villas created by user
//     export async function getMyVillas() {
//         try{
//             const url = `${config.serverURL}/villa/my`
//             const token = sessionStorage.getItem('token')
//              const response = await axios.get(url, {
//                  headers: { token }

//         })
//         if(response.status === 200)
//         {
//             return response.data
//         }
//     }
//     catch (ex)
//     {
//         console.log('exception:', ex)
//     }
// }

//get villa by Id
export async function getVillaById(id) {
    try{
        const response = await axios.get(`${config.serverURL}/villas/${id}`);
        return response.data;

    }
    catch(ex)
    {
        console.log('Error fetching villa by id', ex);
    }
    
}

//update villa 
export async function updateVillaById(id, updateVilla)
{
    try{
        const response = await axios.put(`${config.serverURL}/villas/${id}`, updateVilla);
        return response.data;
    }
    catch(ex)
    {
        console.log('error updating villa:', ex);
    }
}
//upload new villa
export async function uploadVilla(
    name,
    location,
    rentPerNight,
    numberOfBedrooms,
    numberOfBathrooms,
    capacity,
    details,
    image
) {
    try{
        const url = `${config.serverURL}/villa`

         const body = new FormData()
         body.append('name', name)
         body.append('location', location)
         body.append('rentPerNight', rentPerNight)
         body.append('numberOfBedrooms', numberOfBedrooms)
         body.append('numberOfBathrooms', numberOfBathrooms)
         body.append('capacity', capacity)
         body.append('details', details)
          body.append('photo', image)

          const token = sessionStorage.getItem('token')
          const response= await axios.post(url,body,{
            headers: {token}

          })
          if(response.status === 200)
          {
            return response.data
          }
        }
        catch (ex)
        {
            console.log('exception:', ex)
        }

    }
    

