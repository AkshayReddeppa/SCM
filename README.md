# Shrimp Supply Chain Management

This project is a static website designed for managing the shrimp supply chain, covering aspects from farming to delivery. It includes various pages that provide information and functionalities related to shrimp farming, processing, logistics, and delivery.

## Project Structure

```
shrimp-supply-chain
├── index.html            # Home page with an overview of the shrimp supply chain
├── mother-shrimp.html    # QR code scanner for mother shrimp details
├── packaging.html        # QR code scanner for packaging and selling details
├── dealer.html           # Dealer page with shrimp batch details and purchase options
├── shipment.html         # Shipment tracking page with transit details
├── delivery.html         # Delivery confirmation page with QR code scanner
├── css
│   └── styles.css        # Minimal CSS for clean UI design
├── js
│   ├── qr-scanner.js     # JavaScript for QR code scanning functionality
│   └── main.js           # General scripts for navigation and interactivity
├── images
│   └── placeholder.png    # Placeholder image used throughout the website
├── README.md             # Documentation for the project
└── libs
    ├── bootstrap.min.css  # Bootstrap CSS for responsive design
    └── qr-scanner-library.js # QR code scanning library
```

## Features

- **Responsive Design**: The website is built using Bootstrap for a responsive layout that works on various devices.
- **QR Code Scanning**: Implemented on specific pages to retrieve and display relevant data.
- **Static Data**: Uses placeholder images and static data for demonstration purposes, with no backend required.

## Setup Instructions

1. Clone the repository or download the project files.
2. Open `index.html` in a web browser to view the home page.
3. Navigate through the website using the simple navbar present on all pages.
4. Use the QR code scanners on the relevant pages to simulate data retrieval.

## Technologies Used

- HTML
- CSS (Bootstrap)
- JavaScript
- Google Maps API (for shipment tracking)

## License

This project is open-source and available for anyone to use and modify.