import axios from "axios";

export default  function accountLogin(body) {
        const result = axios.post("http://localhost:8080/auth/", body)
        return result
}