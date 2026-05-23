# Luxury Wedding Countdown - Adele & Jacob

A visually stunning, premium web application that displays a countdown timer to the wedding of Adele & Jacob on August 17, 2026. This project is built using vanilla HTML, CSS, and JavaScript, with a focus on high-end luxury aesthetics.

## Features

- **Elegant Design:** High-end, romantic, and modern style with a deep navy, champagne gold, and soft cream color palette.
- **Glassmorphism UI:** Sophisticated semi-transparent frosted glass panels.
- **Interactive Toggle:** Seamlessly switch between a Minimalist mode (Days Only) and a Detailed mode (Days, Hours, Minutes, Seconds).
- **Subtle Animations:** Smooth, butter-like CSS transitions and an elegant background particle animation.
- **Responsive:** Looks beautiful on mobile, tablet, and large desktop screens.

## Local Development

Since this is a static site built with standard web technologies, running it locally is very simple. You just need to serve the files using a local HTTP server.

1. **Clone or Download the repository.**
2. **Open your terminal** and navigate to the project folder.
3. **Run a local server.** You can use Python, Node.js, or any other static file server.

   Using Python (if installed):
   ```bash
   python3 -m http.server 8080
   ```
   *or*
   ```bash
   python -m SimpleHTTPServer 8080
   ```

   Using Node.js (`npx serve`):
   ```bash
   npx serve .
   ```
4. **View in Browser:** Open `http://localhost:8080` (or the port specified by your server).

## Deploying to Render

Render is an excellent platform for hosting static sites for free. Follow these exact steps to deploy the countdown timer:

1. **Push your code to GitHub / GitLab / Bitbucket.**
   Make sure all your files (`index.html`, `style.css`, `script.js`, and `README.md`) are in the root directory of your repository.

2. **Log into Render:**
   Go to [Render.com](https://render.com/) and sign up or log in.

3. **Create a New Web Service:**
   - Click the "New +" button at the top right of the dashboard.
   - Select "Static Site" from the dropdown menu.

4. **Connect Your Repository:**
   - Connect your GitHub/GitLab account if you haven't already.
   - Select the repository containing this project.

5. **Configure the Static Site:**
   - **Name:** Give your site a name (e.g., `adele-jacob-countdown`).
   - **Branch:** `main` (or whichever branch you pushed your code to).
   - **Build Command:** Leave this blank (or type `echo 'No build command needed'`). Since this is plain HTML/CSS/JS, nothing needs to be built.
   - **Publish directory:** Type `.` (just a single dot). This tells Render to serve the files straight from the root directory.

6. **Deploy:**
   - Scroll down and click **"Create Static Site"**.
   - Render will clone your repo and deploy the site. Within a minute or two, your live URL will be ready (e.g., `https://adele-jacob-countdown.onrender.com`).

Congratulations! The luxurious wedding countdown is now live.
