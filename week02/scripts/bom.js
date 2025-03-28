// reference DOM elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


button.addEventListener("click", () => {
    // check to ensure input isn't blank
    if (input.value.trim() !== "") {

        // create new elements
        const li = document.createElement('li');
        const deleteButton = document.createElement("button");

        // populate the [li] with [input]'s value
        li.textContent = input.value;
        deleteButton.textContent = "❌"


        li.append(deleteButton)

        list.append(li);


        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
            input.value = '';
            input.focus();
        });
    }
});

