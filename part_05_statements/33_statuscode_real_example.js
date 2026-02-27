let status_code = 201;
if (status_code === 200) {
console.log("REST API response is OK");
} else if (status_code === 404) {
console.log("REST API not found");
} else if (status_code == 504) {
console.log("REST API gateway timeout");
} else {
console.log("REST API response is unknown");
}