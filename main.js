
const url = 'http://localhost:5501/api';

function getUsers() {   
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))

        // Valida o erro do then funcionar ou não. Não valida o erro da API
        .catch(err => console.error(err));
}

function getUser(userId) {
    fetch(`${url}/${userId}`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(err => console.error(err));
}

function addUser(newUser) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(err => console.error(err));
}

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(err =>console.error(err));
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(err => console.error(err));
}


getUsers();
// getUser(10);

const newUser = {
    name: 'Jorge Silva',
    avatar: 'http://picsum.photos/400/400', // Random de imagens
    city: 'Recife'
};

// addUser(newUser);

const updatedUser = {
    name: 'João Silva',
    avatar: 'http://picsum.photos/400/400',
    city: 'João Pessoa'
};

// updateUser(updatedUser, 18);
// deleteUser(14);
