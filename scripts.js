$(document).ready(function() {
    const blogPosts = [
        {
            title: "First Post!",
            content: "So I just started this blog to map my journey and think about my project for <a href=\"https://moonshot.hackclub.com\">moonshot.hackclub.com</a>!",
            date: "12 Oct 2025"
        },
        {
            title: "Imported new font for the website!",
            content: "And I just imported the Open Sans font! Damn, coding in pure html and css is refreshing after like a year of react..",
            date: "12 Oct 2025"
        },
        {
            title: "Let's do some brainstorming",
            content: `So I wanna make a project that's a bit more complex and isn't something simple or generic, and I know that that's gonna mean that
                I'm gonna have to spend more time overall on the project because the more complex the project the less the coding:everything else ratio is,
                so I'm thinking about what cna I make that's interesting and useful and I'd like to do at the same time, which is a bit complicated...
                Okay, first of all, I think I wanna make something space/rocket related.. but idk if I wanna make a game bc that involved A LOT of art,
                and making a simple app would also not satify me, neither would a website.. so I think I'm gonna make a more complex app with a unique
                twist. Let's say you're a human that somehow got stranded on another planet, and you don't remember what happened, but you have a manual
                that has the information you need to build a rocket to return back to earth. There's just one thing, oxygen is running out and you
                need to get some things fast from the debris of your ship. In the meantime you learn you have a family on earth and that give you
                a purpose to return. Ok shit this is sounding like a very complex game that involves a lot of art. So that's not good...
                Ugh okay I really like this game idea but it doesn't rly seem viable, I'd have to do a lot of art and I'm not that good at art.
                Okay let's think of a solution.. something that doesn't involve that much art, imma feed all this into chatgpt. Ok wait, maybe
                if I make all this low-poly I can make it work I think. Or at least... idk, get something going that I like. Ok let's view this 
                as an art thing for now and work on getting the starting scene done. Actually, first Imma start w some pen and paper thinking of 
                the whole game and Imma upload the sketch here.`,
            image: "big_think.png",
            imageWidth: 1400,
            extraContent: "<p>Ok well this is all I thought about and Imma start making the 3d scene</p>",
            date: "12 Oct 2025"
        },
        {
            title: "Starting scene progress",
            content: "So in abt like 2h of work I finished the bare minimum starting scene, so here it is:",
            image: "AstroScene.png",
            imageWidth: 1400,
            date: "12 Oct 2025"
        },
        {
            title: "Let's make this blog nicer",
            content: "Rn the website doesn't look very nice so I'm gonna style it a bit, below u can see a before and after!",
            extraContent: `<p>I also made a nice render so I'm gonna put it here:</p>
                <img src="render.png" width="1400"/>
                <div class="beforeAfter">
                    <img src="before.png" width="700"/>
                    <img src="after.png" width="700"/>
                </div>`,
            date: "12 Oct 2025"
        },
        {
            title: "Say hello to Johnny!",
            content: `I made an astronaut model today with rigging and 2 animations(for now), and the provisory name is Johnny. This whole thing took like 3 hours but
            I really like how it turned out. Also, I wanna work on the blog a bit more, imma make each entry have a date and time when it was posted - actually just date
            Update: Done!`,
            extraContent: `<p>PS u can download the blender file w johnny and his spaceship <a href="AstroScene.zip">here</a>!</p>
            <p>Ok Last thing Imma make posts appear in reverse chronological order</p>`,
            image: "johnny.gif",
            date: "13 Oct 2025"
        }
    ].reverse();

    // Clear existing content except the h1
    $("#main").html("<h1>Cosmin's Blog</h1>");
    
    // Add each blog post
    blogPosts.forEach(function(post) {
        let postHtml = `<div class="post">
        <div class="postContent">
            <p>${post.date}</p>
            <h2 class="postTitle">${post.title}</h2>
            <p class="postText">${post.content}</p>
        `;
        
        if (post.image) {
            postHtml += `<img class="postImage" src="${post.image}" width="${post.imageWidth || 1400}"/>`;
        }
        
        if (post.extraContent) {
            postHtml += post.extraContent;
        }
        
        postHtml += `</div></div>`;
        
        $("#main").append(postHtml);
    });
});