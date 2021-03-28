function reverseText() {
    const a = document
        .getElementById("input")
        .value;
    const b = a
        .split(' ')
        .reverse()
    const newText = b.join(' ')

    document
        .getElementById("container")
        .innerHTML = newText;

}
