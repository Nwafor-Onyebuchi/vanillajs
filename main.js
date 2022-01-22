const showUserBtn = document.getElementById('show-users')
const userList = document.getElementById('user-list')
let users = []

function getUsers(){
    fetch('data.json').then(function(res){
        res.json().then(function(data){
            useList.innerHTML = data.map(function(user){
                return `${user.firstName} ${user.lastName} is ${user.age} years old. And he works as a/an ${user.occupation} `
            })
        })
    })
}

showUserBtn.addEventListener('click', function(e){
    e.preventDefault()
    getUsers()
})

