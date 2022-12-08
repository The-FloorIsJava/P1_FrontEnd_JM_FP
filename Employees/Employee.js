const url = "http://locolhost:8080/"

async function viewEmployee(){
    try{
        const responce = await fetch(`${url}allEmployees`,{
            method: "GET",
            headers:{
                authorization: window.localStorage.getItem("token")
            }
        });

        const customer = await responce.json();

        console.log(viewEmployee);
        let html_code = "<tr>"
        viewEmployee.map(element => {
            for(const key in element){
                html_code += "</tr>"
                console.log(html_code)
            }
            html_code += "</tr>"
            console.log(html_code)
        })

        document.getElementById("viewAllEmployee").innerHTML = html_code
    }catch(error){
        console.error(error);
    }
}