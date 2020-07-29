import { GET_CUMULATIVE_DATA_URL } from "../../config/apiConfig"

export const ACTION_TYPES = {
    COVID_19: "COVID_19",
    GET_CUMULATIVE_DATA_SUCCESS: "GET_CUMULATIVE_DATA_SUCCESS",
    GET_CUMULATIVE_DATA_FAILED: "GET_CUMULATIVE_DATA_FAILED",
}


export function getCumulativeCovid19Data() {
    return {
        types: [ACTION_TYPES.COVID_19, ACTION_TYPES.GET_CUMULATIVE_DATA_SUCCESS, ACTION_TYPES.GET_CUMULATIVE_DATA_FAILED],
        payload: {
            request: {
                method: 'GET',
                url: GET_CUMULATIVE_DATA_URL
            }
        }
    }
}
