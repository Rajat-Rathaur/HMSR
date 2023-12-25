export function formatDate(dateString) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);

    const day = new Date(dateString).getDate();

    return `${formattedDate.replace(/\d+/, day)}`;
}

