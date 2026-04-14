const pfp = document.getElementById("avatar");
const fullname = document.getElementById("fullname");
const username = document.getElementById("username");

const email = document.getElementById("email");
const repos = document.getElementById("repos");
const address = document.getElementById("location");
const website = document.getElementById("website");
const btn = document.getElementById("button");

const user = window.prompt("Please enter a username:");

async function fetchDetails() {
    try {
        const response = (await axios.get(`https://api.github.com/users/${user}`)).data;

        pfp.src = response.avatar_url || "?";
        fullname.textContent = response.name || response.login;
        username.textContent = `@${response.login}`;

        const emailText = email.querySelector("p");
        if (response.email) {
            emailText.textContent = response.email;
        } else {
            email.remove();
        }

        repos.querySelector("p").textContent =
            `${response.public_repos} repositories`;

        address.querySelector("p").textContent =
            response.location || "No location";

        const websiteLink = website.querySelector("a");
        if (response.blog) {
            websiteLink.textContent = "Portfolio";
            websiteLink.href = response.blog;
        } else {
            website.remove();
        }

        btn.addEventListener("click", () => {
            window.location.href = response.html_url;
        });
    } catch (error) {
        console.error("GitHub user not found", error);
    }
}

fetchDetails();