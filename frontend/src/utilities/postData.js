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
        const result = await response.json();
        if (!result.success)
            throw new Error('Network response was not ok');

        return { success: true, data: result.data };
    } catch (err) {
        return { success: false, error: err.message };
    }
};

export default postData;
