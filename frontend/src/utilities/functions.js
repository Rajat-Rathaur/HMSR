export function formatDate(dateString) {
    if (dateString === null || dateString === undefined) return 'N/A'
    const options = { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);

    const day = new Date(dateString).getUTCDate();

    return `${formattedDate.replace(/\d+/, day)}`;
}
