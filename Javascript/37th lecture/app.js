const template=document.getElementById("card-template");
const container=document.getElementById("users");
//javascriptis scripti

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log("http status", response.status)
        return response.json()
    })
    .then(users => {
        users.forEach(user => {
            const card=template.content.cloneNode(true);
            card.querySelector(".name").textContent=user.name;
            card.querySelector(".username").textContent=user.username;
            card.querySelector(".email").textContent=user.email;
            card.querySelector(".phone").textContent=user.phone;
            card.querySelector(".website").textContent=user.website;
            card.querySelector(".city").textContent=user.address.city;
            card.querySelector(".company").textContent=user.company.name;
            container.appendChild(card);
        });
    })
    .catch(error => {
        console.log("error", error);
    })


