window.onload = function() {
    const selected = document.querySelector(".selected");
    const optionContainer = document.querySelector(".options-container");
    const searchBox = document.querySelector(".search-box input");

    const optionsList = document.querySelectorAll(".option");


    selected.addEventListener("click", () => {
        optionContainer.classList.toggle("active");

        //to put focus on searchbox
        searchBox.value = "";
        filterList("");
        if (optionContainer.classList.contains("active")) {
            searchBox.focus();
        }
    });


    optionsList.forEach(o => {
        o.addEventListener("click", () => {
            selected.innerHTML = o.querySelector("label").innerHTML;
            optionContainer.classList.remove("active");
        });
    });

    searchBox.addEventListener("keyup", function(e) {
        filterList(e.target.value);
    });

    //to search the location and display it as a choice
    const filterList = searchTerm => {
        searchTerm = searchTerm.toLowerCase();
        optionsList.forEach(option => {
            let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
            if (label.indexOf(searchTerm) != -1) {
                option.style.display = "block";
            } else {
                option.style.display = "none";
            }
        })
    }
}