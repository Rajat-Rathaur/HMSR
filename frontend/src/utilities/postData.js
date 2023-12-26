const hostUrl = process.env.SERVER_URL || 'http://localhost:4000';

const postData = async (url, body) => {
    const token = sessionStorage.getItem('token');

    try {
        const response = await fetch(hostUrl + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Response:', result);

        return { success: true, data: result.data };
    } catch (err) {
        console.error('Error:', err);
        return { success: false, error: err.message };
    }
};

export default postData;
