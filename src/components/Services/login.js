import axios from "axios";

export default  function accountLogin(body) {
        const result = axios.post("https://starbills.herokuapp.com/auth/", body)
        return result
}