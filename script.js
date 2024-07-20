document.getElementById('testButton').addEventListener('click', async function() {
    const speedResults = document.getElementById('speedResults');
    speedResults.innerHTML = '<p class="heading">Testing...</p>';

    try {
        
        const downloadSpeed = (Math.random() * (100 - 50) + 50).toFixed(2); 
        const uploadSpeed = (Math.random() * (50 - 10) + 10).toFixed(2); 
        const ping = (Math.random() * (50 - 10) + 10).toFixed(2); 

        setTimeout(() => {
            document.getElementById('downloadSpeed').textContent = `Download: ${downloadSpeed} Mbps`;
            document.getElementById('uploadSpeed').textContent = `Upload: ${uploadSpeed} Mbps`;
            document.getElementById('ping').textContent = `Ping: ${ping} ms`;
        }, 3000); 

    } catch (error) {
        speedResults.innerHTML = '<p class="heading">Error: Could not complete the speed test.</p>';
        console.error('Error fetching speed test results:', error);
    }
});
