const elForm = document.getElementById('formUser');
const elUserName = document.getElementById('userName');
const elOutput = document.getElementById('output')

function newUser(event){
    event.preventDefault();
    let userName = elUserName.value;

    // TODO: sätta postData i en if-sats, ifall userName redan finns?

    async function postData(url='', data= {}) {
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({userName:userName, highScore:0}) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
    postData('http://127.0.0.1:8080/api/user/')
        .then((data) => {
            console.log(data); // JSON data parsed by `response.json()` call
        });
}

elForm.addEventListener('submit', newUser, false);
