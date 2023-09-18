
import axios from "axios";
export default class UserService {

    public registerUser(data: any): Promise<any> {
        return fetch('', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
    }

    public loginUser(data: any) {
        return axios.post('http://localhost:8800/auth/login', data)
    }

}
