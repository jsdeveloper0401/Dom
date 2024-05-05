const togglePassword = document.querySelector("#toggle-password");
const password = document.querySelector("#password");
const tbody = document.querySelector("#tbody");

togglePassword.addEventListener("click", function () {
    const type =
        password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});

const change = () => {
    const text = password.value;
    const result = document.getElementById("result");
    const classes = ["red", "pink", "orange", "success"];

    if (text.length === 0) {
        result.innerText = "Enter the password";
        result.className = "red";
    } else if (text.length <= 4) {
        result.innerText = "Parol kuchsiz";
        result.className = "pink";
    } else if (text.length <= 7) {
        result.innerText = "Yomon emas";
        result.className = "orange";
    } else {
        result.innerText = "Strong!";
        result.className = "success";
    }
};

function validateForm() {
    const password = document.getElementById("password").value;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordPattern.test(password)) {
        alert(
            "Parol kamida bitta kichik harf, bitta katta harf va bitta raqamdan iborat bo'lishi va kamida 6 ta belgidan iborat bo'lishi kerak."
        );
        return false;
    }

    return true;
}

let users = [];
let userNumber = 0;

const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const age = e.target[1].value;
    const phone = e.target[2].value;
    const address = e.target[3].value;

    if (!name || !age || !phone || !address) {
        return false;
    } else {
        userNumber++;
        let payload = {
            number: userNumber,
            name,
            age,
            phone,
            address,
        };

        e.target.reset();

        users.push(payload);

        let tableRows = "";
        users.forEach((item, index) => {
            tableRows += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.phone}</td>
                    <td>${item.address}</td>
                </tr>
            `;
        });

        document.getElementById("tbody").innerHTML = tableRows;
    }
};
