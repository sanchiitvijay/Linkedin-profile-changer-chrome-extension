# LinkedIn Profile Picture Changer Chrome Extension

## Overview
This Chrome extension allows you to replace all profile pictures on your LinkedIn feed with a specific picture of your choice. It's a fun way to personalize your LinkedIn browsing experience or highlight a particular image.

## Features
- Replace all profile pictures on the LinkedIn feed with a specified image.
- Easy to use and quick to set up.
- Toggle the feature on and off with a single click.

## Installation
1. **Clone or Download the Extension:**
   - Clone the repository using `git clone https://github.com/yourusername/linkedin-profile-picture-changer.git`
   - Or download the repository as a ZIP file and extract it.

2. **Load the Extension in Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" by toggling the switch in the top-right corner.
   - Click on the "Load unpacked" button and select the directory where you cloned or extracted the extension.

## Usage
1. **Set the Image URL:**
   - After loading the extension, click on the extension icon in the Chrome toolbar.
   - Enter the URL of the image you want to use to replace the profile pictures.
   - Click "Save" to apply the changes.

2. **Toggle the Extension:**
   - Use the extension icon to toggle the feature on and off as needed.
   - When enabled, all profile pictures on your LinkedIn feed will be replaced with the specified image.

## Development
1. **Requirements:**
   - Basic knowledge of HTML, CSS, and JavaScript.
   - Familiarity with Chrome Extensions API.

2. **Folder Structure:**
   ```
   linkedin-profile-picture-changer/
   ├── images/
   │   |── icon48.png
   │   |── icon128.png
   │   └── pfp.jpg
   ├── scripts/
   │   └── content.js
   ├── styles/
   │   └── style.css
   └── manifest.json
   ```

3. **Key Files:**
   - `manifest.json`: Defines the extension's metadata and permissions.
   - `scripts/content.js`: Injected into LinkedIn pages to modify the profile pictures.
   - `styles/style.css`: Optional CSS to style the popup.


## License
This project is licensed under the MIT License - see the LICENSE file for details.

---

Feel free to contribute by opening issues or submitting pull requests to improve the extension!