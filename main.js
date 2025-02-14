function loadAssets(onSuccess, onError) {
    return new Promise((resolve, reject) => {
        // Simulate a random error
        const success = Math.random() > 0.5; // 50% chance of success
        console.log("Loading assets...");
        setTimeout(() => {
            if (success) {
                onSuccess("Assets loaded successfully!");
                resolve();
            } else {
                onError("Error processing the order:( please try again :D");
                reject("Error processing the order:( please try again :D");
            }
        }, 1000);
    });
}

function initializeGame() {
    return new Promise((resolve, reject) => {
        console.log("Initializing game...");
        setTimeout(() => {
            console.log("Game initialized.");
            resolve();
        }, 1000);
    });
}

function startGame() {
    console.log("Starting game...");
    // Game logic here
    console.log("Game started.");
}

function successMessage(){
    console.log("Assets loaded successfully!");
}

function errorMessage(){
    console.log("Error loading assets:( please try again :D");
}

function runGameSimulation() {
    loadAssets(successMessage, errorMessage)
        .then(initializeGame)
        .then(startGame)
        .catch((error) => {
            console.error("Error during game initialization:", error);
        });
}

runGameSimulation();