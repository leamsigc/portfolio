var todo = ["Buy New Computer"];

var input = prompt('What would you like to do ');


while (input !== "quit") {
    /*Handdle input*/
    /*ask again for new input */
    if (input === "list") {

        console.log(todo);
    } else if (input === "new") {
        /*Ask for new to do */
        var newtodo = prompt("Enter New To Do");
        /*add the new to do  to the array*/
        todo.push(newtodo);
    }
    input = prompt('What would you like to do ');
}
console.log("OK , YOU  QUIT THE APP");
