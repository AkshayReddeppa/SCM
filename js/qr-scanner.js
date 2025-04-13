const qrScanner = new QrScanner(document.getElementById('qr-video'), result => {
    // Handle the scanned result
    document.getElementById('result').innerText = result;
    // Placeholder data for mother shrimp details
    const motherShrimpDetails = {
        breed: "Vannamei",
        waterParameters: {
            temperature: "28°C",
            salinity: "15 ppt",
            pH: "7.5"
        },
        health: "Healthy"
    };

    // Display mother shrimp details
    document.getElementById('mother-shrimp-breed').innerText = `Breed: ${motherShrimpDetails.breed}`;
    document.getElementById('mother-shrimp-water-parameters').innerText = `Water Parameters: Temperature - ${motherShrimpDetails.waterParameters.temperature}, Salinity - ${motherShrimpDetails.waterParameters.salinity}, pH - ${motherShrimpDetails.waterParameters.pH}`;
    document.getElementById('mother-shrimp-health').innerText = `Health: ${motherShrimpDetails.health}`;
});

// Start scanning when the page loads
window.onload = () => {
    qrScanner.start();
};