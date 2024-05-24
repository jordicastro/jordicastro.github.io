const express = require('express');
const app = express();

const projects = [
    {
        "title": "web-app",
        "logo": "https://i.ibb.co/0Bjtdvb/logo.png",
        "desc": "This is my web-app. It’s pretty cool! Have you seen the Figma for it? This app displays a list of projects I’ve worked on or am currently working on. An about page is included. Made with React.js + Vite.",
        "id": 1
    }, 
    {
        "title": "notion-app",
        "logo": "https://i.ibb.co/kQ8hzmf/notion.png",
        "desc": "Recreating Notion’s award-winning note-taking app from scratch. Added page routing, improved shortcuts and hotkeys. Made with React.js.",
        "id": 2
    },
    {
        "title": "spotify-app",
        "logo": "https://i.ibb.co/jw1dbg1/spotify.png",
        "desc": "A web app created using React + Spotify’s API that searches for music, albums, mapped neatly in bins. accessing user info using OAUTH, this app has various features, including enabling users to play albums / playlists backwards, playing this-or-that with two songs the user listens to frequently, and an overview of their listening tendencies (similar to Spotify Wrapped). Made with React + Next.js .",
        "id": 3
    },
    {
        "title": "nfl-app",
        "logo": "https://i.ibb.co/FmMqXKS/football.png",
        "desc": "Utilizes NFL’s API to populate our database. Prompts users to enter SQL queries to update, delete, + view the DB. Made in React + Next.js",
        "id": 4
    }
];

const about = [
    {
        "title": "ACM VICE PRESIDENT",
        "date": "JAN 2024 => PRESENT",
        "desc": "I am the ACM vice president for The University of Arkansas’ RSO. During my time in the role, I have helped host various events, including meet the professors, where students can delve into UofA research, social and networking events, and this past annual 2024 HogHacks Hackathon, where over 200 students worked in teams to present their innovative projects to a panel of judges. I am currently working on planning events for the upcoming school year, along with leading a team of developers to help remodel the UofA’s ACM website.",
        "image": "https://i.ibb.co/1qLkB9N/hoghacks.png",
        "link": "https://uark-acm.github.io/hoghacks/",
        "id": 1
    },
    {
        "title": "PCQ Undergrad Research",
        "date": "AUG 2021 => MAY 2022, JUNE 2024 => PRESENT",
        "desc": "As a part of my undergraduate honors research, I worked under Dr. Nelson of the University of Arkansas to conduct side channel attacks on post-quantum crypto-graphic algorithms. Utilizing a ChipWhisperer and UFO board, I was able to test the safety of two encryption algorithms using Test Vector Leakage Assessment (TVLA) and present my findings at the University of Arkansas Honors Symposium. Currently, I am creating a full-stack SCA web-app that will enable researchers from across the globe to use the UofA’s PCQ equipment for leakage testing.",
        "image": "https://i.ibb.co/tXpnT1r/PCQ.png",
        "link": "https://github.com/SCA-Capstone/sca-app",
        "id": 2
    },
    {
        "title": "Mountain Biking",
        "date": "JUNE 2020 => PRESENT",
        "desc": "I enjoy riding on the trails of the Greenway, which extends four cities in Northwest Arkansas: from Bentonville, to Rogers and Springdale, ending in Fayetteville. I usually go 20-30 miles and savor the scenic routes. Recently, I took a mountain biking course, which has inspired me to continue riding dirt. Given that Bentonville is the mountain biking capital of the United States, I’m ecstatic to continue learning and going on adventurous bike rides. ",
        "link": "https://www.strava.com/athletes/108776798",
        "image": "https://i.ibb.co/rfxqNT0/mountainbiking.png",
        "id": 3
    },
    {
        "title": "MUSIC",
        "date": "APRIL 2003 => PRESENT",
        "desc": "I LOVE MUSIC. On average, I listen to music for around three to six hours each day. The best compliment I have ever received was that I have the most diverse, unique music taste. Hence, my Spotify wrapped always seems to be all over the place. Because of my love of music, I have interacted with Spotify’s API and created some pretty cool apps that I suggest Spotify implement. Check them out here",
        "image": "https://i.ibb.co/02d9NQq/music.jpg",
        "id": 4
    }    
];

app.get('/api', (req, res) => {
    res.json({
        "projects": projects,
        "about": about
    })
});

app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.get('/api/about', (req, res) => {
    res.json(about);
});


app.listen(8000, () => {
    console.log('Server is running on port 8000');  
});