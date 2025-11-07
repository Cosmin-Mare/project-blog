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
        },
        {
            title: "Game is now on Unity and Github!",
            content: `I exported all the assets and put them into Unity, and then realized the character's hands
            are too low and it doesn't look very good, so I made 2 separate meshes that I'm gonna have to tweak
            a bit (one for only the hands and one without the hands) and made 2 more animations for walking and
            idling to match the new hands height.. Overall pretty long process, I spent like 1h making the
            animations again, but I enjoyed it:) (btw idk why the video is slowed down, it's actually pretty fast irl)`,
            image: "unity.gif",
            date: "14 Oct 2025"
        },
        {
            title: "Well today was quite the day.",
            content: `Okay, today I worked like 8.5h on the game or something like that. Mostly it was on 3d modelling,
            I made the backpack, oxygen tanks with tubes that go to the mask, and a strap which took so long to make,
            but I'm super proud of the result and i think it all looks awesome! I also made 2 ores (Iron and Lithium)
            and their corresponding items, for which I had to learn how to render stuff for 2D use in a game which was
            pretty nice. Then the coding part: I made an inventory system and UI for inventory, made it so u can hit
            the ores and after 4 hits you get the item (they have a health bar too, but I might remove that), and 
            I tweaked the animations and camera so that the arms move with the camera so it feels more natural. I'm gonna
            record some vids and take some photos which I'll put below! Oh also I did some rearrangement of all the game files
            so they're more easily findable now!`,
            image: "time.png",
            extraContent: `<img src='game.png' width='1400'/>
            <p>here's the ores!</p>
            <img src='game.png' width='1400'/>
            <p>and here's the items in the inventory! (I also made it so u can pick multiple and they stack
            up to a certain point and then it occupies the next space)</p>
            <img src='inventory.png' width='1400'/>
            <p>here's a video that shows how the arms now move w the camera!</p>
            <video controls>
                <source src="arms.mov" type="video/mp4"/>
            </video>
            <p>and here's the astronaut w the backpack!</p>
            <img src="backpack.png" width='1400'/>
            <p>Okay ty for reading through the updates, I'm writing then at 2am right before going to bed:)
            Even if nobody goes through them I'm still happy lol this is an awesome project that I'm making and I get to
            notice my progress:)</p>`,
            date: "15 Oct 2025 (even tho it's technically 16th bc it's 2am lol)"
        },
        {
            title: "New Map, Animations and Sound Effects!",
            content: `hey! Today I worked on some new animations, a new map (although not nearly complete) 
            and got some sound effects from pixabay to  put into the game! Oh and I made some custom 
            item container thingies for the UI! And a pickaxe lol:)) Here's everything in one video:`,
            extraContent: `<video controls>
                <source src="oct16.mov" type="video/mp4"/>
            </video>`,
            date: "16 Oct 2025 (still 2am on the next day)"
        },
        {
            title: "Unity shadows suck, but I finally did it!",
            content: `Today was the most and least productive day yet. I have so much screen time, but I got so little done. I made the starting base that
            the player can go through by pressing a button which opens a door, so I had to make the animation for both the player and the door, and they turned
            out pretty good! But then, disaster struck. Light was bleeding into the base through the walls, and I searched so much for a fix for this
            and I tried literally everything for like 6 hours, I remade the model, I tried 1000 light settings, even tried switching to the HD render pipeline
            but nothing worked. Then, I serached on my phone while I was eating bc I couldn't get my mind off of it and I finally understood how it works, so
            I changed some settings and then it worked. Anyways, that's pretty much everything for today bc I spent 6h trying to debug that, ig we live and
            we learn. Imma start uploading the videos to youtube bc they're getting too big for github. But rn I'm going to sleep bc I only slept for 6h and
            I'm dying (I also drank 2 coffees today, without which I don't think I could've actually stayed awake)`,
            date: "17 Oct 2025 (it just turned 12am on the 18th smh)"
        },
        {
            title: "We have a planet!!!",
            content: `Did you know just how complicated it is to make planetary gravity in unity? and for rigid bodies it's very easy, but for a character
            it's way harder bc you have to make him be upright on the world and rotate a bunch of stuff. But I managed to do it and now we have planet gravity!
            I also started working on the actual planet model, and rn I just have a small part, but I also made a map! I won't share the map bc that's spoilers
            but I will share the starting planet, and keep in mind that that's just like less than 1% of the full planet. I wanna make it all by hand bc that way
            I can make a bunch of cool stuff and I think it's great for storytelling.`,
            image: 'PlanetStart.png',
            extraContent: "<img src='InGamePlanetStart.png'/> <p>I know it looks empty, but today I'm gonna make some world decoration for this starting space!</p>",
            date: "Oct 18 2025 (well it's actualy 19th bc I forgot to write it yesterday night)"
        },
        {
            title: "Decoration Day!",
            content: `Today I worked on some decorations in blender, remade the planet, and tweaked the player movement a bit. Today was mostly a Blender and
            game design day. I remade the planet much smaller, I made 3 flowers and 2 grasses, I made an oxygen filter and a 3d Printer for the starting pod,
            and I wrote the story for the game and the game loop. I also spend a while getting inspiration for this, and I think it ended up really nice.
            I obviously won't spoil it here, but it's pretty thought out. Also I'm excited about tomorrow bc I'll start decorating the other biomes around the
            base and maybe tinker a bit with unity lighting and stuff. Oh yeah, I also made a nice skybox today using unity shader graph`,
            date: "Oct 19th"
        },
        {
            title: "Flowers, Grass and new Ship!",
            content: `Today was a blender day: I made a new ship bc the old one's geometry was rly bad (I got from 10k faces to just below 800), I made some new
            plants and made a hair particle system combined w weight painting to place them randomly in a specific biome. And that's pretty much about it, I 
            have to fix the animations for the imported ship in unity, but today was a pretty slow day, I spent quite a bit of time w one of my friends and also
            w talked w my gf for a while planning her trip to Romania that's happening in 2 days:)`,
            date: "Oct 20th"
        },
        {
            title: "Getting back to it",
            content: `So it's been 17 days since I last posted, and I haven't made much progress bc I didn't work on the game since. This is because I got
            unfocused and then it was hard to start, but now I'm gonna get back to it so that I can go to Moonshot! Firstly, I need to work on a story for
            my game and then remake the world and the lighting bc I messed it up. Maybe the models are gonna stay the same for now, but I'm sure I'm gonna
            have to remake them later. I will share the story here once I'm finished`,
            date: "Nov 7th"
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
