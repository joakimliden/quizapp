function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('user');
const url = 'http://127.0.0.1:3000/api/user/';
//const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.user);
        console.log("Visa första i json-objektet: " + data.user[0].userName);
        let user = data.user;
        return user.map(function(user) {
            let li = createNode('li');
            li.innerHTML = user.userName + " (from fetch-city-user.js)";
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
