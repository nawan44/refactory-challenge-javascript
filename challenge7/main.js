function reverseText() {
    const a = document
        .getElementById("input1")
        .value;
    const b = a
        .split(' ')
        .reverse()
    const newText = b.join(' ')

    document
        .getElementById("container")
        .innerHTML = newText;

}
