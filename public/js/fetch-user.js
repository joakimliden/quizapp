function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('users');
const url = 'http://127.0.0.1:8080/api/users/';
//const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.users);
        console.log("Visa första i json-objektet: " + data.users[0].userName);
        let city = data.users;
        return city.map(function(users) {
            let li = createNode('li');
            li.innerHTML = users.userName + " " + user.highScore;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
