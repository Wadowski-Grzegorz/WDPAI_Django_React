// requests.js


// Wywołanie funkcji po załadowaniu strony

async function reloadUsers(){
    const url = "http://localhost:8000";

    try{
        const response = await fetch(url);
        const users = await response.json();
        // console.log(users)

        const userList = document.getElementById("userList");
        userList.innerHTML = "";

        users.forEach((user) =>{
            const listUser = document.createElement("div");
    
            listUser.innerHTML = `
                <div class="tile2">
                    <div class="single_user">
                        <div class="field">        
                                ${user.first_name} ${user.last_name}
                                <div class="subtext3">
                                    ${user.role}
                                </div>
                        </div>

                        <button class="delete_button" onclick="deleteUser(${user.id})">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>        
                </div>
            `;
    
            userList.appendChild(listUser);
        });

    }catch(error){
        console.error('Error reloading users:', error);
    }
}

window.addEventListener('load', reloadUsers());


// Function to send GET request
// Doesn't used
async function sendGetRequest() {
    const input = document.getElementById("getInputField").value;
    const url = `http://localhost:8000/${input}`; // Assumes the server is running on localhost:8000

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("getResponse").textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to send POST request
async function sendPostRequest() {
    const privacyPolicy = document.getElementById("privacyPolicy");
    if(!privacyPolicy.checked){
        return;
    }

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const role = document.getElementById("role").value;

    const user = {
        first_name: firstName,
        last_name: lastName,
        role: role
    };

    try {
        const response = await fetch("http://localhost:8000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        const responseData = await response.json();
        // document.getElementById("postResponse").textContent = JSON.stringify(responseData, null, 2);
        reloadUsers();
    } catch (error) {
        console.error('Error:', error);
    }
}

async function deleteUser(index){
    const url = `http://localhost:8000/${index}`;
    try{
        const response = await fetch(url,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        });


        const responseData = await response.json();
        // document.getElementById("deleteResponse").textContent = JSON.stringify(responseData, null, 2);
        reloadUsers();
    } catch(error){
        console.error('Error:', error);
    }
}