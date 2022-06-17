import axios from "axios";

export default async function updateMyProfile(body) {
    try {
        const token = `Bearer ${localStorage.getItem("token")}`;
        const URL = `https://starbills.netlify.app/users/`;
        console.log(body)
        const result = await axios.patch(URL, body,{
        headers: {
            "x-access-token": `${token}`,
            "content-type": "multipart/form-data"
        },
        });
        return result;
    }
    catch (error) {
        console.log(error);
    }
}