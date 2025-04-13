// JavaScript for general website functionality

// Function to handle navigation
function navigateTo(page) {
    window.location.href = page;
}

// Function to initialize QR code scanner on specific pages
function initializeQrScanner(scannerElementId) {
    const qrScanner = new QrScanner(document.getElementById(scannerElementId), result => {
        console.log('QR code scanned:', result);
        // Handle the scanned result based on the page
        handleQrScanResult(result);
    });
    qrScanner.start();
}

// Function to handle QR scan results
function handleQrScanResult(result) {
    // Placeholder for handling different QR scan results
    // This can be customized based on the page requirements
    alert("Scanned result: " + result);
}

// Event listener for DOMContentLoaded to initialize scripts
document.addEventListener('DOMContentLoaded', () => {
    // Example: Initialize QR scanner if on specific pages
    if (document.getElementById('qr-scanner')) {
        initializeQrScanner('qr-scanner');
    }
});