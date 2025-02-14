function calculateScore(playerData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let score = playerData.reduce((total, event) => total + event.points, 0);
            if (score >= 0) {
                resolve(score);
            } else {
                reject("Error: Invalid score calculation");
            }
        }, 2000);
    });
}

const playerEvents = [
    { event: 'kill', points: 100 },
    { event: 'assist', points: 50 },
    { event: 'achievement', points: 200 }
];

calculateScore(playerEvents)
    .then(score => {
        console.log(`Player's calculated score: ${score}`);
    })
    .catch(error => {
        console.error(error);
    });