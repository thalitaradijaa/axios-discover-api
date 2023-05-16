const url = "http://localhost:5500/api";

function getUsers() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data)
        })
        .catch(error => console.error(error))
};

function addUsers(newUserData) {
    axios.post(url, newUserData)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))
};

function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(response => {
            const data = response.data
            userName.textContent = data.name;
            userCity.textContent = data.city;
            userId.textContent = data.id;
            userAvatar.src = data.avatar;
        })
        .catch(error => console.error(error))
};

function updateUser(userData, id) {
    axios.put(`${url}/${id}`, userData)
        .then(response => console.log(response))
        .catch(error => console.error(error))
};

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
        .then(response => console.log(response))
        .catch(error => console.error(error))
};

const newUser = {
    name: 'Cara legal',
    city: 'Norte america',
    avatar: 'https://picsum.photos/200/200'
};

const updateUserdata = {
    name: 'Lima Suza',
    city: 'Central park',
    avatar: 'https://picsum.photos/200/200'
};

// addUsers(newUser);

// updateUser(updateUserdata, 2);

deleteUser(2);

getUsers();

getUser(1);