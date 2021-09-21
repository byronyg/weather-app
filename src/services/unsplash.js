import axios from "axios";

const accessKey = "HYn2cInCMr74gYAnQgH_lFJsHCZSWR_L_9CKE18F030";

const apiEndpoint = "https://api.unsplash.com/";
const randomPhotoEndpoint = `${apiEndpoint}photos/random`;

export const getRandomPhoto = async param => {
    try {
        const res = await axios.get(randomPhotoEndpoint, {
            params: {
                client_id: accessKey,
                count: 1,
                ...param
            }
        });
        if (res.status == 200) return res.data[0];
        else return null;
    } catch (exc) {
        console.error(exc);
        return null;
    }
};