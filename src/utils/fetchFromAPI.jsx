export const fetchFunction = async() => {
    const url = 'https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0163d9448cmshc2ee42516cb00b0p1ddc1cjsn3d9895605016',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
}}