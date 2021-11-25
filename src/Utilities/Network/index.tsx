import axios from 'axios';

export const GetRequest = async (url: string) => {
    try {
        console.log(url);
        const apiResponse = await axios.get(url);
        const response = apiResponse.status === 200 ? apiResponse.data : {}
        return response;
    } catch (err) {
        return;
    }
} 
export const GetRepos = async (url: string) => {
    try {
        console.log("Inside GetRepos", url);
        const apiReposResponse = await axios.get(url);
        const reposResponse = apiReposResponse.status === 200 ? apiReposResponse.data : {}
        return reposResponse;
    } catch (err) {
        return
    }
}