let loginInitial = document.getElementsByClassName("login-container").innerHTML
const url = "http://localhost:8080/"

function userLogin(form) {
    let username = form.username.value
    let password = form.password.value

    fetch (`${url}login`, {
        method: 'POST',
        body: JSON.stringify({
            customerName: username,
            "password": password
        })
    }
    )
    .then(response => {
        console.log(response)
        console.log(response.status)
        if(response.status === 404) {
            throw new Error(response.text().then(body=>console.log(body)))
        }
        console.log(...response.headers)
        Login.getElementsByClassName("login-container").innerHTML = "<h1 id='welcome'> Welcome to the Employee Reimbusement System, " + username + "</h1><a href='../Login/Login.html'>Login</a>"
        console.log(password)
        logoutButton()
        window.localStorage.setItem("token")
    })
    .catch(error => {
        console.error(error)
        Login.getElementsByClassName("login-container").innerHTML = `${loginInitial} <h1> Failed to login please try again.</h1>`
    })
}

function logoutButton(){
    let button = Login.createElement("button")
    let node = Login.createTextNode("Logout")

    button.appendChild(node);
    button.setAttribute("onclick", "logout()")
    const welcomeH1 = Login.getElementsById("welcome")
    welcomeH1.appendChild(button)
}

function logout(){
    Login.getElementsByClassName("login-container").innerHTML = loginInitial;
}