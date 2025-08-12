
import axios from 'axios';
import { config } from './../../config';
import { toast } from 'react-toastify';


export async function loginUser(email, password) {
    try {
        // create url
        const url = `${config.serverURL}/user/login`

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


export async function registerUser(
    firstName,
    lastName,
    email,
    phone,
    dob,
    address,
    gender,
    occupation,
    password
) {
    try {

        const url = `${config.serverURL}/user/register`

        // create the request body
        const body = {
            firstName,
            lastName,
            email,
            dob,
            address,
            gender,
            occupation,
            phone,
            password,
        }

        // send the request and get the response from the server
        const response = await axios.post(url, body)

        if (response.status == 200) {
            // read the json body from response
            return response.data
        } else {
            // response is not success
            return null
        }
    } catch (ex) {
        console.log(`exception: `, ex)
    }
}


// enroll event api

// export const insertEnrollDetails = async (formData) =>{

//   const url = `${config.serverURL}/booking/create`

//   const resp = await axios.post(url,formData);
//   console.log(resp)
//   if(resp.status==200){
//     console.log("Data added")
//   }else{
//     console.log("Data not added")
//   }
// }

export const insertEnrollDetails = async (formData) => {
  const url = `${config.serverURL}/booking/create`;

  try {
    const resp = await axios.post(url, formData);
    console.log(resp);

    if (resp.status === 200) {
      console.log("Data added");
    } else {
      console.log("Data not added");
    }

    return resp; // ✅ return the response

  } catch (error) {
    console.error("Error during API call:", error);
    return null; // optional: return null or throw error
  }
};
