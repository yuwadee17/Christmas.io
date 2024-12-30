function showMessage() {
    alert('Merry christmas and Happy new year!');
}
// Create snowflakes
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; // Snowflake symbol

    // Randomize position and size
    snowflake.style.left = Math.random() * 100 + 'vw'; // Random X position
    snowflake.style.fontSize = Math.random() * 30 + 20 + 'px'; // Random size

    // Append snowflake to snow container
    document.getElementById('snow').appendChild(snowflake);

    // Remove snowflake after animation ends
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Generate snowflakes every 100 milliseconds
setInterval(createSnowflake, 100);
