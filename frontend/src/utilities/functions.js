export function formatDate(dateString) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);

    // Extract day and add ordinal suffix
    const day = new Date(dateString).getDate();
    const dayWithSuffix = addOrdinalSuffix(day);

    return `${formattedDate.replace(/\d+/, dayWithSuffix)}`;
}

function addOrdinalSuffix(number) {
    if (number >= 11 && number <= 13) {
        return `${number}th`;
    }

    const lastDigit = number % 10;
    switch (lastDigit) {
        case 1:
            return `${number}st`;
        case 2:
            return `${number}nd`;
        case 3:
            return `${number}rd`;
        default:
            return `${number}th`;
    }
}