export async function getPuppies() {
    try {
        const response = await fetch('http://react-from-scratch-api.test/api/puppies', {
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw errorData
        }
        const {data} = await response.json();
        //console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching puppies:', error);
        throw error;
    }
}
