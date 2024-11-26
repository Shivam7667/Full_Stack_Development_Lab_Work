function firstTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("First task completed");
        }, 1000);
    });
}

function secondTask(taskResult) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`${taskResult}, second task completed`);
        }, 1000);
    });
}

firstTask()
    .then(secondTask)
    .then(result => console.log(result));
