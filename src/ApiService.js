import axios from 'axios';

const USER_API_BASE_URL = "http://http://ec2-54-90-9-177.compute-1.amazonaws.com:8080/users";

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
        
    }

    fetchUserByID(userID) {
        return axios.get(USER_API_BASE_URL + '/' + userID);
    }

    deleteUser(userID) {
        return axios.delete(USER_API_BASE_URL + '/' + userID);
    }

    addUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }
}

export default new ApiService();