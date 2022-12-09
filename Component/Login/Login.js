let loginInitial = document.getElementsByClassName("login-container")
const url = "http://localhost:8080/"

function userLogin(form, event) {
    event.preventDefault()
    let username = form.username.value
    let password = form.password.value

    fetch(`${url}login`, {
        method: 'POST',
        body: JSON.stringify({
            employeeUsername: username,
            password: password
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
        loginInitial.innerHTML = "<h1 id='welcome'> Welcome to the Employee Reimbusement System, " + username + "</h1><a href='../Login/Login.html'>Login</a>"
        console.log(password)
        logoutButton()
        window.localStorage.setItem("token", response.headers.get("authorization"));
    })
    .catch(error => {
        console.error(error)
        loginInitial.innerHTML = `${loginInitial} <h1> Failed to login please try again.</h1>`
    })
}

function logoutButton(){
    //let button = `<button type="submit" class="submit-btn" onclick="">Logout</button>`
    //let node = loginInitial.createTextNode("Logout")

    //button.appendChild(node);
    //button.setAttribute("onclick", "logout()")
    //const welcomeH1 = document.getElementsById("welcome")
    //welcomeH1.appendChild(button)
}

function logout(){
    loginInitial.innerHTML = `<div class="login-container">
    <form>
        <h1>ERS Login</h1>
        <div class="form-row">
            <input name="username" id="usernameInput" class="form-input" placeholder="Username">
            <label for="usernameInput" class="form-label">Employee Username</label>
        </div>
        <div class="form-row">
            <input type="password" name="password" id="passwordInput" class="form-input" placeholder="pwd">
            <label for="passwordInput" class="form-label">Password</label>
        </div>
        <button type="submit" class="submit-btn" onclick="userLogin(this.form, event)">Login</button>
    </form>
    <p class="sign-up-text"> New to the company? <a href="#">Register Here</a></p>
</div>`
}
