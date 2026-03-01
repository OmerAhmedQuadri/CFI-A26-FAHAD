// / Q No : 01
// // / Question: <paste the question here>
// // / Expected Output: <write expected output></write>

// break is used to stop a loop completely. When the program reaches break, it immediately exits the loop and continues with the code written after the loop.
for (let i = 1; i < 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}

// continue is used to skip the current iteration of a loop and move to the next one. The loop itself does not stop, only that one step is skipped.
for (let i = 1; i < 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}