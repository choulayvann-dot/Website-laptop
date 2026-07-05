const body = document.body;
const dark_theme = document.getElementById("dark");

let currentMode = localStorage.getItem("theme");

if (currentMode === "dark") {
    document.getElementById("dark_mode").classList.add("dark_theme");
}

function toggleDarkMode() {
    document.getElementById("dark_mode").classList.toggle("dark_theme");

    if (body.classList.contains("dark_theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}