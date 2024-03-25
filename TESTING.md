# Testing

Return back to the [README.md](README.md) file.

Testing ensures that the site functions as expected and provides a positive user experience (UX). The site underwent rigorous testing using various automated verification methods to scrutinise the code. Additionally, thorough manual testing was conducted to identify any potential issues or bugs.

Whilst building the game, the Chrome developer Tools were used to test pages for responsiveness to different screen sizes and to troubleshoot any problems that arose, using a systematic approach to find and fix issues.

## Automated Testing

## Code Validation

| Page | Result |
| ---- | ------ |
| Full Site | ![home page](/documentation/test_images/Screenshot%202024-03-25%20at%2014.42.34.png) |

### HTML

[HTML W3C Validator](https://validator.w3.org) was used to validate all HTML files.

| Page | Screenshot | Notes |
| --- | --- | --- |
| Home | ![index.html]() | Pass.|
| Calm | ![gallery.html]() | Pass. |
| Energy | ![games.html]() | Pass.|
| Inspire | ![affirmations.html]() | Pass. |
| Share  | ![about.html](documentation/test_images/html-about.png) | Pass.|
| 404 Page |  ![404.html]() | Pass. |

### CSS

[CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) was used to validate all CSS files.

| File | Screenshot | Notes |
| --- | --- | --- |
| Home | ![index.html]() | Pass.|
| Calm | ![gallery.html]() | Pass. |
| Energy | ![games.html]() | Pass.|
| Inspire | ![affirmations.html]() | Pass. |
| Share  | ![about.html](documentation/test_images/css-about.png) | Pass.|
| 404 Page |  ![404.html]() | Pass. |

### Java Script

[JSHint](https://jshint.com/) was used to validate the JS.

| File | Screenshot | Notes |
| --- | --- | --- |
| email.js |  ![email.js ]() | Pass. |
| sound.js |  ![sound.js ]() | Pass. |

## Lighthouse 

| Page | Mobile | Desktop | Notes |
| ---- | ------ | ------- | ----- |
| Home | ![home page](/documentation/test_images/home-page.png) |
| Calm | ![calm page](/documentation/test_images/calm-page2.png) |
| Energy | ![energy mobile](/documentation/test_images/energy-page.png) |
| Inspire | ![inspire mobile](/documentation/test_images/inspire-page.png) |
| Share | ![share mobile](/documentation/test_images/share-page2.png) |
<br>

## Manual Testing

### Browser compatibility 

During testing, we meticulously examined all clickable links, buttons, and interactive features to guarantee smooth functionality and a seamless user experience across different browser environments. 

The web browsers used for testing are:

1. MacOS Safari
2. Windows Edge
3. Google Chrome
4. 

It was also tested on multiple devices to ensure it was responsive and behaved as expected. Devices used for testing were:

1. Pixel4a (Android 13)
2. Iphone 14 Pro Max - This identified some issues, please see [Known Bugs](./README.md#bugs) section of the README.md. 
<br>

## Testing Clickable Links & Buttons

### Home Page

| Clickable | Result |
| --------- | ------ |
| Logo (Navbar) | Pass |
| Home (Navbar) | Pass |
| Calm (Navbar) | Pass |
| Energy (Navbar) | Pass |
| Inspire (Navbar) | Pass |
| Calm (Card) | Pass |
| Energy (Card) | Pass |
| Inspire (Card) | Pass |
<br>

### Calm Page

| Clickable | Result |
| --------- | ------ |
| All links in the navbar | Pass |
| Navbar "+" Button | Pass |
| Navbar Stop Button | Pass |
| Navbar Close Controls Button | Pass |
| Navbar Volume Control Button | Pass |
| Play Button | Pass |
| Play Next Button | Pass |
| Controls Button | Pass |
| Volume Control | Pass |
| Menu Brightness | Pass |
| Images Slides 'Next' arrow | Pass |
| Images Slides 'Previous' arrow | Pass |

<br>

### Energy Page

| Clickable | Result |
| --------- | ------ |
| All links in the navbar | Pass |
| Supercharged Button | Pass |
| Energised Button | Pass |
| Calm Button | Pass |
| Tired Button | Pass |
| Snooze mode Button| Pass |
| Reset Button | Pass |
| Instructions Button | Pass |
<br>

### Inspire Page

| Clickable | Result |
| --------- | ------ |
| All links in the navbar | Pass |
| "Need more inspiration" Button | Pass |
<br>

### Share Page

| Clickable | Result |
| --------- | ------ |
| All links in the navbar | Pass |
| Happiness factor wheel | Pass |
| PotLuck Button | Pass |
| Submit Button | Pass |

<br>

## User Story Testing

###  As a first time user I would like

| User Story                                            | Acceptance Criteria | Result | 
|-------------------------------------------------------|---------------------|--------|
| To understand the different happiness areas the site offers and how to use them | There are intuitive menu options to lead the user through the site | Pass |
| To navigate to my desired page easily | The home page provides cards to simplify navigation directly upon arrival, and the UTime logo is a link bck to home too | Pass |
| To explore other areas of the site without having to navigate home | The navigation bar is present on the top of all pages with a clear visible design with despriptive links | Pass |
| To be able to choose from a selection of predefined images and sounds | Users can browse through aselection of default sounds and images | Pass |
| For the game to be resettable so that user can start a new game whenever they desire to | The "Reset" button in the Energy (game page) allows the player to reset the game | Pass |
| To enjoy using the site in part due to the pleasing aesthetics and affordances | The site has a clean and user friendly design, and is easy to to use for anyone | Pass |
<br>

### As a returning user I would like

| User Story                                            | Acceptance Criteria | Result | 
|-------------------------------------------------------|---------------------|--------|
| To be able to choose my own music to accompany my scene of choice | Users can choose from e default selection of sounds, but also to choose and add new sounds in the calm page by pressing the "+" button.  | Pass |
| To be able to find previous soundscapes to load quickly  | The users choice of added music is added stored in the browsers cookies, and will show last added sounds once the site loads | Pass |
| To play a different game to what I played last time  | At the moment the the game choises are limited to one game | ---- |

### 


