import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
    const options = {
    params: {
        maxResults: 50,
        },
    headers: {
        'X-RapidAPI-Key': '0163d9448cmshc2ee42516cb00b0p1ddc1cjsn3d9895605016',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
    };

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};


/*
const base_url = 'https://youtube-v31.p.rapidapi.com';
    
export const fetchFunction = async(url) => {
    const {data} = fetch(`${base_url}/${url}`, options)
    return data
}


const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0163d9448cmshc2ee42516cb00b0p1ddc1cjsn3d9895605016',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(`${base_url}`, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
*/