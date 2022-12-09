const url = "http://localhost:8080/"
// let list = document.getElementById("viewAllEmployees");

async function viewEmployee(){
    try{
        const responce = await fetch(`${url}allEmployees`,{
            method: "GET",
            headers:{
                authorization: window.localStorage.getItem("token")
            }
        });

        const viewEmployee = await responce.json();

        console.log(viewEmployee);
        let html_code = "<tr>"
        viewEmployee.map(element => {
            for(const key in element){
                html_code += `<td>${element[key]}</td>`
            }
            html_code += "</tr>"
            console.log(html_code)
        })

        document.getElementById("viewAllEmployee").innerHTML = html_code
    }catch(error){
        console.error(error);
    }
}