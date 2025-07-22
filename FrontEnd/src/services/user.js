
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
        if (response.status == 200) {
            // send the response body
            return response.data
        } else {
            // send null result
            return null
        }
    } catch (ex) {
        console.log(`exception: `, ex)
        
    }
}

// const navigate = useNavigate();
//  const [firstName, setFirstName] = useState('')
// const [lastName, setLastName] = useState('')
// const [email, setEmail] = useState('')
// const [phone, setPhone] = useState('')
// const [dob, setDob] = useState('')
// const [address, setAddress] = useState('')
// const [occupation, setOccupation] = useState('')
// const [password, setPassword] = useState('')
// const [confirmPassword, setConfirmPassword] = useState('')

export async function registerUser(
    firstName,
    lastName,
    email,
    phone,
    dob,
    address,
    gender,
    occupation,
    password,
) {
    try {
        // create the required url
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