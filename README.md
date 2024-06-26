![UTime banner](documentation/rm_images/utime_banner.png)

# UTime 😊 by 404 Sadness Not Found
## ***Your space, your soundtrack, your UTime.*** 

## Introduction

To celebrate World Happiness Day, The UTime app brings an opportunity for users to find their own on-screen happy place. A user can find a moment of calm by personalizing a visual and musical escape. Alternatively, they can re-energize their productivity by playing one of our happy games. Then, to make the world an even happier place, a user can then share their curated spaces with friends using our built in email service.

------

## Showcase

![about.html responsive pages](documentation/rm_images/screenshots/amiresponsive_all.png)

A link to the deployed site can be found here at [UTime.](https://meganroberts-dev.github.io/march-24-hackathon-utime/index.html)

------

# Site Goals

## Problem Statement

In a busy world with many of us working from home, it can be difficult to take time and find a true moment of happiness in our day. Studies have shown how important both laughter and moments of calm can be to alleviate some of life's stress. We therefore decided to build a platform that can provide these things to a user, right on their screen.

## Objectives

To celebrate World Happiness Day, our objective was to create a harmonious space where users could navigate to content that would provide them with happiness. This meant creating content that would appeal to people looking for different things: 

1. An online moment of calm - achieved through a visual and auditory experience.
2. Reinvigorating energy - by playing a game.
3. A inspirational uplift - found in a mesmerising visual space.

We then wanted a user to be able to share their happiness with others by incorporating an email service.

### Target Audience

The target audience for this app is anyone looking to add happiness to their day. Although the platform is most suited to be used by adults, children could navigate all of the content safely. The app has the potential to be used for one-off happiness searches but also as part of a daily happiness or calm-finding schedule. Additionally, the soundscape feature has the potential to run in the background throughout a user's day. The universal enjoyment that comes from being happy gives this platform year-round applicability.

### User Requirements and Expectations

- Explanation of what the site offers is easy to understand
- Scenes and sounds work as expected
- Game is intuitive and fun to play
- An library of inspirational quotes
- All content is clear and accessible
- Features and navigation work as expected
- Option to learn more about Sadness Not Found and the app
- Visually Attractive
- Option to share happiness via email

### User Stories

As a first time user I would like:

- To understand the different happiness areas the site offers and how to use them
- To navigate to my desired page easily
- To explore other areas of the site without having to navigate home
- To be able to choose from a selection of predefined images and sounds
- For the game to be resettable so that a uer can start a new game whenever the desire to
- To be able to find an inspirational quote that matches my mood and purpose.
- To enjoy using the site in part due to the pleasing aesthetics and affordances

As a returning user I would like:

- To be able to choose my own music to accompany my scene of choice
- To be able to find previouse soundscapes and for them to load quickly
- To send an email with an alternative level of happiness


### Trade Offs

The following table outlines the content that should be implemented to make a functional website that appeals to users. This takes into account their expectations and the requirements for the site. Due to time constraints, some of the features that were discussed during the planning phase could not be incorporated for this project sprint (marked by N).

| Opportunity                                                                | Importance | Viability / Feasibility | Implemented?|
| ---------------------------------------------------------------------------| :--------: | :---------------------: | :----------:|
| Home page to showcase app features and link to each page                   |     5      |            5            |       Y     |
| About page with more information about the 404 Sorry Not Found team        |     5      |            5            |       Y     |
| Preset sounds loaded on Soundscape/game page for a user to chose           |     5      |            5            |       Y     |
| Carousel of images for a user to veiw different visual opportunities       |     5      |            5            |       Y     |
| Ability to search for pictures on a theme                                  |     3      |            5            |       N     |
| Option to upload own music into the energy/calm spaces                     |     5      |            4            |       Y     |
| Option to find an inspiring quote                                          |     3      |            5            |       Y     |
| Info modal that tells the user how to play the game                        |     4      |            5            |       Y     |
| Score incrementation with successful game elements                         |     5      |            5            |       Y     |
| Option to send curated spaces by email to a friend (via the built in form) |     5      |            2            |       N     |
| Option to send an happy email to a freind                                  |     5      |            5            |       Y     |
| User feedback after submitting the form                                    |     5      |            5            |       Y     |
| Page to remember soundscape profiles (for quick loading on return visits)  |     3      |            3            |      Y/N*   |
| Links to social media                                                      |     5      |            5            |       Y     |

* This feature has been partially implemented. At present sounds are stored using browser cookies. However, we haven't implemented a login function, which would enable users to access their soundscapes from different devices. Additionally, images are not currently saved.

### Features

- **All Pages**

- All pages have a Navbar displaying the Utime logo and page title. It also includes navigation links to other pages, which condense into a burger menu on small screens.

 ![navbar](documentation/rm_images/screenshots/navbar_main.png)
 ![navbar](documentation/rm_images/screenshots/navbar_burger.png)

- Additionally, each page features a footer with links to social media sites.

- **Home Page**

 ![index.html am I responsive image](documentation/rm_images/screenshots/amiresponsive_home.png)

- The home page explains to the user what the site is about and displays the different 'happy' activities users can choose from, including Games, Soundscape, or Memes. 

- **Calm Page**

 ![calm.html am I responsive image](documentation/rm_images/screenshots/amiresponsive_calm.png)

- This page opens with a modal slogan 'Create a happy place.' It is a page where users can choose from a preselected sound to accompany an image of their choice (selected using the carousel of images). They can then sit back and enjoy the page, creating their own moment of calm in a busy, screen-filled day.

- The pre-loaded music options offer flexibility, allowing users to position them anywhere on the screen. Coupled with the ability to adjust their appearance using the contrast slider, users can seamlessly integrate them with the background image, minimising distractions and enhancing the visual experience. The other in built options allow a user to pause the music, change the volume or remove any music they don't want to appear on their page.

     - Demo of Calm page user experience and design (UXUI)

        ![UIUX Demo](documentation/rm_images/calm_uxui.gif)

- The navbar on this page has additional features, all of which are explained to a user when the hover over the feature. 

    - They have furhter options for controlling the music and their space. They can add new music of thier choice, stop all music, close the music setting menus and mute the music.

         ![screenshot of soundscape navbar](documentation/rm_images/screenshots/navbar_options.png)

    - Users also have the option to add a timer, allowing them to keep track of how long they have been in their personalised space. The aim is that this could become part of a users daily routine to find some time for them and just sit in a calm space for say, 5 minutes at a time. The timer play button toggles between a play, stop and reset icon to give the user control of this feature. Additionally, users have the flexibility to relocate this display to their preferred position on the screen.

        ![screenshot of soundscape navbar timer](documentation/rm_images/screenshots/navbar_ss_timer.png)


- **Energy Page** 

 ![game.html am I responsive image](documentation/rm_images/screenshots/amiresponsive_energy.png)

- The energy page is a space for users to engage their brain, but in a relaxed way. It is a simple rock, paper, scissors, lizard, spock style game themed around different energy modes. A user plays against the universe (computer) and is notified if they won, lost or tied. Scores for each "player" increment as the rounds progress. The first user to reach 10 points wins. 
 
   - Demo of Energy game

    ![UIUX Demo Game](documentation/rm_images/game_walkthrough.gif)

- The first user to reach 10 points wins. As the player you are either displayed a "Congrats" modal (with confetti) if you win or a "Unlucky" modal if you lose.

    ![Congrats modal](documentation/rm_images/screenshots/congrats.png)

    ![unlucky modal](documentation/rm_images/screenshots/unlucky.png)

- The "i" button takes you into a modal explaining which energy which. 

    ![info modal](documentation/rm_images/screenshots/instructions_modal.png)


- **Inspire Page**

 ![affirmations.html am I responsive image](documentation/rm_images/screenshots/amiresponsive_inspire.png)

- This page gives the user access to inspirational quotes, and a visually rich space in which to enjoy it. They can select a diferent quote by clicking the "Need more inspiration" button, allowing them to find a quote that suits their mood and promotes their own happiness. With each click, the background colours change, further enriching their experience. 

 - Demo of inspiration page

    ![UIUX Demo Inspiration](documentation/rm_images/inspiration_walkthrough.gif)

- **Share Page**

![about.html responsive pages](documentation/rm_images/screenshots/amiresponsive_about.png)

The Share page facilitates users in spreading positivity from the app. Users can input their name and the recipient's email, compose a personalised message, and opt to include a Random Affirmation. Additionally, users can convey their happiness level through an emoji face, adjustable via the slider or PotLuck button.

![happy face one](documentation/rm_images/screenshots/happy_face_one.png)

![happy face one](documentation/rm_images/screenshots/happy_face_two.png)

A "Submit" button allows users to submit the form. Upon submission, a confirmation message is displayed to inform the user that their message has been sent.

![submit buttons](documentation/rm_images/screenshots/submit_button.png)
![submit buttons](documentation/rm_images/screenshots/submit_hover.png)

![email confirmation](documentation/rm_images/screenshots/confirmation_message.png)

??????? explantation for recipient >??????

![email confirmation](documentation/rm_images/screenshots/email_grab.png)

![email confirmation](documentation/rm_images/screenshots/email_inside.PNG)

The page transitions into an "About" section, offering a summary of the site's purpose and its design intentions. It introduces the team behind its creation—404 Sadness Not Found—displayed via a slider bar. Each team member is presented with a link to their preferred contact method.

![404 sadness not found team](documentation/rm_images/screenshots/creators.png)

### Future Features

Due to time and skill constraints, the following features were not implemented at this time but should be considered for future rollouts:

1. Ability to search for pictures on a theme in the calm area.
2. Page to remember soundscape profiles (for quick loading on return visits)
3. To improve the email feature, we envision allowing users to easily share their personalised space. Our idea involves integrating an email form accessible on each page, pre-filled with the current page settings. Recipients would then be able to open the shared space with all the pre-loaded settings, such as the chosen image or sound. Due to skill limitations within the team this was not feasible at this time. 
4. To improve the selection of games avaiable to play

## Planning and Development

### Wireframes

Wireframes for the website were created using 

### Emails

An [EmailJS](https://www.emailjs.com/) account was created, linked to an email provider and used to create [this](documentation/rm_images/email_template.png) email template, including the email address, sender's name, and message. Upon submission of the form, the EmailJS API sends the message using the Gmail account based on the form values created. 

### Agile Methodology

Agile devlopment techniques were implemented throughout this project. A GitHub Kanban board was utilised to keep a track of different tasks and asign them to different people. The board can be viewed [here](https://github.com/users/MeganRoberts-dev/projects/4)

### Brand and Identity

All decisions were decided as a team 

- The brand name: **404 Sadness Not Found** 
- The app name: **Utime.**
- Our slogan: **Your space, your soundtrack, your UTime.**

#### Logo image 

Our logo was designed in-house with simplicity and sleekness in mind, ensuring it complements rather than distracts from the site's content. This conscious decision aims to keep users immersed in their own environment. Additionally, the design emphasises the words "i" and "me" within the word "Time," cleverly playing on the concept of a user's personal space.

![Utime-logo](documentation/rm_images/screenshots/utime_logo.png)

#### Colour Palette

Colours were generated using the colour palette tool by Coolors. The original color #DD2F4C was chosen as it stands out against an otherwise simple navbar (a conscious decision to ensure the pages fit with the imagery). Other colours were chosen to complement this

![Utime-logo](documentation/rm_images/colours.PNG) 


## Tools and Technologies


- **HTML** - Used for structuring the content of the website.
- **CSS** - Used to style the appearance of the app's content.
- **Javascript** - Used to add dynamic behavior and allow user interaction with the web pages.
- [Bootstrap](https://getbootstrap.com/) - CSS framework for responsive mobile first web design.
- [JSON](https://www.json.org/json-en.html) - Used for storing a disctionary of quotes and affirmations in a standard format.
- [GitHub and Github Pages](https://github.com/) - Used to store the code and host/deploy the live project.
- [GitPod](https://www.gitpod.io/) - IDE for development
- [Visual Studio Code](https://code.visualstudio.com/) - IDE for development
- [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) - For testing and troublshooting code.
- [Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) - To automatically test the performance, quality, and correctness of the web app.
- [Coolors](https://coolors.co/) - To generate a colour palette for the website design.
- [MOV to GIF](https://cloudconvert.com/mov-to-gif) - To generate gif of screen recordings.
- [ChatGPT](https://chat.openai.com/) - Used to help research and problem solve general coding issues
- [GenCraft](https://gencraft.com/generate) - AI Image generator used to create game backgrounds
- [Cloud Convert](https://cloudconvert.com/) - For resising and converting image files to webp format
- [Canva](http://canva.com) - For the README banner
- [EmailJS](https://www.emailjs.com) - An email framework used to send content from the site.
- [Favicon](https://favicon.io/) - For converting the site's logo into a favicon.ico file.
- [Canva](https://www.canva.com/) - To create the README banner and images for index.html
- [GoDaddy](https://www.godaddy.com/) - For Website Domain Name: www.utime.me (re-routes to github pages site).
- [HTML Games](https://www.htmlgames.com/html5-games-for-your-site/) - To add game HTML and functionality to the app.
- [JSHint](https://jshint.com/) - To validate JS code
- [W3 HTML validator](https://validator.w3.org/nu/) - To validate HTML
- [W3 Jigsaw](https://jigsaw.w3.org/css-validator/validator) - To validate CSS
- [AmIResponsive?](https://ui.dev/amiresponsive) - To create a mockup of the website on different devices in a range of sizes.
- [Balsamiq](https://balsamiq.com/wireframes/) - Used to create wireframes during project planning
- [Google Fonts](https://fonts.google.com/specimen/Dosis) - used to generate a visually appealing font
- [Font Awesome](https://fontawesome.com) - icon library for Calm page player buttons and controls

## Testing

Testing information can be found in the separate [TESTING.md](TESTING.md) file. 

## Bugs

The folowing bugs have been identified and due to time constraints, persist in the site. For future roll outs these would be addressed and fixed. 

| Bug number | Description of Issue | "Fix" |
| :--------: | :---------------------: | :---------------------: |
| 1 | Iphone devices do not let you play more than one music track at a time | None at present. A user on an iphone can only select one sound at a time | 
| 2 | Iphone devices do not let you change the individual volumes for sounds | The volume control feature is hidden from iOS users on a small screen. | 
| 3 | On Iphone devices the Play button require 2 taps to start sound, one to select end then start (Calm Page) | None at present. | 
| 4 | On Iphone devices individual volume sliders have no effect - this is an Apple policy issue as they dont want apps to be able to override the phones volume controls. (Calm Page) | None at present. The only workaround is server side audio manipulation. | 
| 5 | On Iphone devices the timer cannot be dragged and appears in nav bar. (Calm Page) | None at present. Will stay known bug for iOS only. (Inspire Page) | 
| 6 | On Ipads the index page slogan shows, but cards do not work at all. Flip side is not shown | None at present. | 
| 7 | Iphone devices make the expanding controls on a player zoom the background | Fixed. | 
| 8 | Button mouse over logic does not work and button stays highlighted after first press. | None at present. | 
| 9 | Burger menu expands UNDER top sound players (Ipad) | Fixed. | 
| 10 | Timer displays over nav controls and is not draggable (Ipad) | None at present. iOS limitation | 
| 11 | Play buttons only work with long press, short press ignored (Ipad) | None at present. | 
<br>


## Deployment and Local Development

### Deployment 

The Utime deployed site can be found [here](https://meganroberts-dev.github.io/march-24-hackathon-utime/)

It was deployed using GitHub pages with the following steps:

1. Login (or signup) to Github.
2. Navigate to the project repository.

    Our project repository can be accessed from GitHub [here](https://github.com/MeganRoberts-dev/march-24-hackathon-utime)

3. Navigate to the settings button at the top of the page.
4. Select pages from the left hand menu.
5. Under "Build and Deployment" click the branch dropdown menu and change it to "main". lick save.
6. The site can then be found from the "Deployments" section in the repository.
7. Under "All Environments" the page can be slected from the active deployments. 

### Forking and Cloning the Github Repository

The project can be forked or cloned to make a local copy on your system

First follow steps 1. and 2. above

Then to fork:

1. Click on the fork button at the top of the page. 

To clone:

1. Under the "Local" tab, click on the code button and select how you would like to clone (HTTPS, SSH or GitHub CLI).
2. Copy the link to your clipboard and use it to create a new workspace in your chosen IDE.

??ZZ???W?W?? POSSIBLY SOME MORE WORK MAKING THIS MORE ADVANCED <<><><<>>>

## Credits

Resources used on the site were taken from the following sources:

- [Pexels.com](https://www.pexels.com/) - For share page image with specfic credit to Mavera zehra Çoşkun
- [Gencraft](https://gencraft.com/generate) - For error 404 background
- [YouTube](https://www.youtube.com/) - For music and sounds
- [OpenMoji](https://openmoji.org/) - For email emojis
- [indeed.com](https://uk.indeed.com/career-advice/career-development/historical-quotes-examples/) - For inspirational quotes
- [Kevin Levron](https://codepen.io/soju22/pen/rNREwzr) - For Bokeh Effect on inspire.html
- [Megan Roberts](https://github.com/MeganRoberts-dev/feb-24-hackathon-love-riot) - For Email logic and functionality
- [JS Confetti](https://www.npmjs.com/package/js-confetti) - For Game winning confetti animation
- [Sweet Alert](https://sweetalert.js.org/) - For Game Popup alerts
- [Colin Breakell](https://github.com/BreakellrZ/Harry_Potter_Quiz) - For game logic engine
- [ElSombrero2](https://uiverse.io/ElSombrero2/tricky-robin-67) - CSS design for Index Page Cards



The 404 Sadness Not Found Team:

- [Meghan Roberts](https://github.com/MeganRoberts-dev)
- [Karen Samad](https://github.com/kosamad)
- [Alex Hönig](https://github.com/A-Hoenig)
- [Colin Breakwell](https://github.com/BreakellrZ)
- [Soroush Gholamreza](https://github.com/SoroushGReza)