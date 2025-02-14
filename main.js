function loadAssets() {
    return new Promise((resolve, reject) => {
        console.log("Loading assets...");
        setTimeout(() => {
            console.log("Assets loaded.");
            resolve();
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

function runGameSimulation() {
    loadAssets()
        .then(initializeGame)
        .then(startGame)
        .catch((error) => {
            console.error("Error during game initialization:", error);
        });
}

runGameSimulation();