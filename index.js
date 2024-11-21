/*
console.log(fetch('https://entertainment.inquirer.net/files/2024/07/dotnet-banner-2024-07-07T185625.914-1200x799.png')

.then(response => {
    //console.log(response)
    return response.blob()
})

.then(blob => {
    //console.log(blob)
    document.querySelector('#Aiahyaw_kol').src=URL.createObjectURL(blob)
})

.catch(error => {
    console.log(error)
})

) */

const content = document.querySelector("#content");



// Load page

window.addEventListener("load", () => {

    getUsers();

});

function getUsers() {
    let html = "";
    fetch("https://reponigen-1.onrender.com/api/members", { mode: "cors" })

        .then((response) => {

            if (!response.ok) {

                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();

        })

        .then((data) => {

            console.log(data);

            data.forEach((element) => {

                html += `<li>${element.first_name} ${element.last_name}</li>`;

            });

            content.innerHTML = html;

        })

        .catch((error) => {

            console.error('Fetch error: ', error);

        });

}