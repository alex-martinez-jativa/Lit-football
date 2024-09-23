import CONSTANTS from "../constants";

export default function getTeamInfo(team) {
    if (!team) {
        return null
    }

    const request_url = `${CONSTANTS.BASE_URL}/searchteams.php?t=${team}`

    return fetch(request_url)
        .then((response) => {
            if(!response.ok) {
                throw new Error('Request Error, status: ' + response.status)
            }

            return response.json()
        })
        .catch((error) => {
            throw new Error('Error: ' + error)
        })
}