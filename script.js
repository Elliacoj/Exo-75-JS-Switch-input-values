let switcher = function() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let switch1 = input1.value;
    let switch2 = input2.value;
    input1.value = switch2;
    input2.value = switch1;
}

document.getElementById("switch").addEventListener("click", switcher);
