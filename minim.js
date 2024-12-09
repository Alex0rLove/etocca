function utcTime() {
    const now = new Date();
    return now.toUTCString();  // Returns a string representing the date in UTC format.
}

console.log(utcTime());  // Example usage
