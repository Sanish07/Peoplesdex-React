import Axios from 'axios';

const GetUsers = () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    return Axios.get(url);
}

export default GetUsers;