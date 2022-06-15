import axios from "axios";

export default async function updateMyProfile(body) {
    try {
        const token = `Bearer ${localStorage.getItem("token")}`;
        const URL = `https://starbills.herokuapp.com/users/`;
        const result = await axios.patch(URL, body,{
        headers: {
            "x-access-token": `${token}`,
        },
        });
        return result;
    }
    catch (error) {
        console.log(error);
    }
}