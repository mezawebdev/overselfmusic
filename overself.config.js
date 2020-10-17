export default {
    global: {
        backgrounds: [
            {
                name: "default",
                type: "video",
                src: {
                    mobile: "../assets/videos/space-bg.mp4",
                    desktop: "../assets/videos/space-bg.mp4"
                }
            },
            {
                name: "pulses-streetlights",
                type: "video",
                src: {
                    mobile: "../assets/videos/pulses-bg-m.mp4",
                    desktop: "../assets/videos/pulses-bg-d.mp4"
                }
            },
            {
                name: "quiet-moments-band",
                type: "video",
                src: {
                    mobile: "",
                    desktop: ""
                }
            },
            {
                name: "discovery-space",
                type: "video",
                src: {
                    mobile: "../assets/videos/space-bg.mp4",
                    desktop: "../assets/videos/space-bg.mp4"
                }
            }
        ]
    },
    pages: {
        home: {
            featuredVideoId: "ZSB5OcKc0w4",
            cta: {
                copy: `
                    <span>DISCOVERY</span>
                    <br />
                    listen now
                `,
                linkTo: "/music/discovery"
            }
        },
        about: {
            bandPicture: "/assets/images/overself.jpeg",
            biography: `
                Overself is a band consisting of Peter Tueller, 
                drummer Alex Meza, bassist Oscar Paez and
                guitarist Diego Guardado. The group started in 
                mid-2019, in San Diego, California. After the 
                ending of our previous musical projects, we 
                decided to get together again and continue making 
                music that we love. After a couple of jam sessions,
                it became clear that the chemistry was real and 
                that we wanted to pursue this project. A couple 
                of months later and ounces of sweat in the practice 
                room, we released our first EP, Pulses.
                <br /><br />
                Bookings: <a style="color:#D83F38" class="overself-email" href="mailto:band@overselfmusic.com">band@overselfmusic.com</a>
            `
        },
        music: {
            releases: [
                {
                    title: "Discovery",
                    description: "",
                    path: "discovery",
                    background: "discovery-space",
                    released: true,
                    releaseDate: "March 23, 2020",
                    artwork: {
                        src: "../assets/images/discovery-artwork.jpg",
                        artist: "Real Theory"
                    },
                    streamServices: [
                        {
                            name: "Apple Music",
                            link: "https://music.apple.com/us/album/discovery-single/1502930360",
                            icon: "fab fa-apple"
                        },
                        {
                            name: "Spotify",
                            link: "https://open.spotify.com/album/7ME0IhU6ffdjUNkPuk72uL?si=9ZaQxCY4SiC4ZtlFlBmMaw",
                            icon: "fab fa-spotify"
                        },
                        {
                            name: "Youtube",
                            link: "https://www.youtube.com/watch?v=ZSB5OcKc0w4",
                            icon: "fab fa-youtube"
                        },
                        {
                            name: "Bandcamp",
                            link: "https://overself.bandcamp.com/track/discovery",
                            icon: "fab fa-bandcamp"
                        }
                    ],
                    personnel: {
                        production: {
                            recording: {
                                name: "Alex Jacobelli",
                                website: {
                                    text: "sunsickstudio.com",
                                    link: "http://sunsickstudio.com"
                                }
                            },
                            mastering: {
                                name: "Audiosiege",
                                website: {
                                    text: "audiosiege.com",
                                    link: "https://audiosiege.com/"
                                }
                            }
                        },
                        band: {
                            members: [
                                {
                                    name: "Peter Tueller",
                                    contribution: "Vocals, Guitars, Synths"
                                },
                                {
                                    name: "Oscar Paez",
                                    contribution: "Bass"
                                },
                                {
                                    name: "Alex Meza",
                                    contribution: "Drums"
                                },
                                {
                                    name: "Diego Guardado",
                                    contribution: "Backup Guitar"
                                }
                            ]
                        }
                    },
                    music: {
                        tracks: [
                            {
                                name: "Discovery",
                                uniqueTag: "discovery",
                                lyrics: `
                                    Am I too far<br />
                                    Can you reach me my friend<br />
                                    You seem so real<br />
                                    I must have missed something then<br />
                                    I'm still asleep<br />
                                    I don't want to wake up alone<br />
                                    I should go out<br />
                                    Inaction wastes me I find<br />
                                    <br />
                                    Lately I can't explain how I behave<br />
                                    But I know there's something gone<br />
                                    Deep within my brain<br />
                                    And I struggle to quantify what I believe<br />
                                    But I know there's something wrong<br />
                                    Fundamentally<br />
                                    For so long I've been alone I can't even cry<br />
                                    Am I alive<br />
                                    <br />
                                    How could I know<br />
                                    How to save myself for you<br />
                                    I knew the words<br />
                                    But no meaning came through<br />
                                    <br />
                                    Lately I can't explain how I behave<br />
                                    But I know there's something gone<br />
                                    Deep within my brain<br />
                                    And I struggle to quantify what I believe<br />
                                    But I know there's something wrong<br />
                                    Fundamentally<br />
                                    For so long I've been told to change if I'm to be<br />
                                    Loved for who I am, but who would I be<br />
                                    For so long I've been shut down it's so hard to try<br />
                                    Please let me hide
                                `
                            }
                        ]
                    }
                },
                {
                    title: "Quiet Moments",
                    description: "",
                    path: "quiet-moments",
                    background: "default",
                    released: true,
                    releaseDate: "December 6, 2019",
                    artwork: {
                        src: "../assets/images/quiet-moments-artwork.jpg",
                        artist: "Alex Meza"
                    },
                    streamServices: [
                        {
                            name: "Spotify",
                            link: "https://open.spotify.com/track/3VhRR8Y1u7n7Ft61Dx2nqt?si=m3tyf7IdRZuSGDuLrP8T8Q",
                            icon: "fab fa-spotify"
                        },
                        {
                            name: "Apple Music",
                            link: "https://music.apple.com/us/album/quiet-moments-single/1487777819",
                            icon: "fab fa-apple"
                        },
                        {
                            name: "Youtube",
                            link: "https://www.youtube.com/watch?v=OoFOKQLF4fQ&feature=youtu.be",
                            icon: "fab fa-youtube"
                        },
                        {
                            name: "Bandcamp",
                            link: "https://overself.bandcamp.com/track/quiet-moments",
                            icon: "fab fa-bandcamp"
                        }
                    ],
                    personnel: {
                        production: {
                            recording: {
                                name: "Alex Jacobelli",
                                website: {
                                    text: "sunsickstudio.com",
                                    link: "http://sunsickstudio.com"
                                }
                            },
                            mastering: {
                                name: "Carl Saff",
                                website: {
                                    text: "saffmastering.com",
                                    link: "http://saffmastering.com"
                                }
                            }
                        },
                        band: {
                            members: [
                                {
                                    name: "Peter Tueller",
                                    contribution: "Vocals, Guitars, Synths"
                                },
                                {
                                    name: "Oscar Paez",
                                    contribution: "Bass"
                                },
                                {
                                    name: "Alex Meza",
                                    contribution: "Drums, Alternate percussion"
                                }
                            ]
                        }
                    },
                    music: {
                        tracks: [
                            {
                                name: "Quiet Moments",
                                uniqueTag: "quiet-moments",
                                lyrics: `
                                    Take me back to where you first fell deep forever lost uncertain feelings
                                    <br />
                                    Compromised healing
                                    <br />
                                    Do you ever wonder why the sun and moon collapse and split the sky
                                    <br />
                                    Life passes by
                                    <br /><br />
                                    I get scared when I don't know where your mind goes in quiet moments you don't let show
                                    <br />
                                    Over and over distance pulls us closer every time for fate to find
                                    <br /><br />
                                    Struggling to fall asleep perchance to dream cryptically foreseeing
                                    <br />
                                    Reasons receding
                                    <br />
                                    Do you ever wonder why you come and go crashing like the tide
                                    <br />
                                    Stuck inside
                                    <br /><br />
                                    I get scared when I don't know where your mind goes in quiet moments you don't let show
                                    <br />
                                    Over and over distance pulls us closer every time for fate to find
                                    <br /><br />
                                    Jet black caustic sky
                                    <br />
                                    Stars align and die
                                    <br /><br />
                                    I get scared when I don't know where your mind goes in quiet moments you don't let show
                                    <br />
                                    Over and over distance pulls us closer every time for fate to find
                                    <br /><br />
                                    Cease to be slipping out of sync I leave my ardor at the brink
                                    <br />
                                    Shattered link
                                    <br />
                                    Over and over happy memories of you all disappear
                                    <br />
                                    And I can't tell if I'm still here
                                `
                            }
                        ]
                    }
                },
                {
                    title: "Pulses",
                    description: "",
                    path: "pulses",
                    background: "pulses-streetlights",
                    released: true,
                    releaseDate: "September 20, 2019",
                    artwork: {
                        src: "../assets/images/pulses-artwork.jpg",
                        artist: "Adam Flores"
                    },
                    streamServices: [
                        {
                            name: "Spotify",
                            link: "https://open.spotify.com/album/0ZQemYKdIuVUw7UV2IN0OG?si=0eseVDkLRUGj4zlfVGiang",
                            icon: "fab fa-spotify"
                        },
                        {
                            name: "Apple Music",
                            link: "https://music.apple.com/us/album/pulses/1480138283",
                            icon: "fab fa-apple"
                        },
                        {
                            name: "Youtube",
                            link: "https://youtu.be/69wnND0R3QQ",
                            icon: "fab fa-youtube"
                        },
                        {
                            name: "Bandcamp",
                            link: "https://overself.bandcamp.com/releases",
                            icon: "fab fa-bandcamp"
                        }
                    ],
                    personnel: {
                        production: {
                            recording: {
                                name: "Alex Jacobelli",
                                website: {
                                    text: "sunsickstudio.com",
                                    link: "http://sunsickstudio.com"
                                }
                            },
                            mastering: {
                                name: "Carl Saff",
                                website: {
                                    text: "saffmastering.com",
                                    link: "http://saffmastering.com"
                                }
                            }
                        },
                        band: {
                            members: [
                                {
                                    name: "Peter Tueller",
                                    contribution: "Vocals, Guitars, Synths"
                                },
                                {
                                    name: "Oscar Paez",
                                    contribution: "Bass"
                                },
                                {
                                    name: "Alex Meza",
                                    contribution: "Drums, Alternate percussion"
                                }
                            ]
                        }
                    },
                    music: {
                        tracks: [
                            {
                                name: "Transient",
                                uniqueTag: "transient",
                                lyrics: `
                                    <span>Verse 1</span><br />
                                    Trapped under the trees / broken, bound<br />
                                    Helpless and cold / sink through the ground<br />
                                    The count goes down to none / the bout leaves me weak<br />
                                    So tell me was it wrong / to yearn for light on my cheek<br /><br />
                                    <span>Chorus</span><br />But now I know that I am free<br />From everything I can’t see<br />Transient I’m shedding skin<br />Take me where I’ve never been<br /><br /><span>Verse 2</span><br />hold my head again / for a moment<br />Eyes clouding over / my heart still and closed<br />Futile attempts / bring purpose to dirt<br />So who are we to say / if joy is worth the hurt?<br /><br /><span>Chorus</span><br />But now I know that I am free<br />From everything I can’t see<br />Transient I’m shedding skin<br />Take me where I’ve never been<br />Take me far<br /><br /><span>Bridge</span><br />Ahhhh
                                `
                            },
                            {
                                name: "Effigy",
                                uniqueTag: "effigy",
                                lyrics: "2. Effigy<br /><br />Touch / Teeth / Blood / Grief<br />Burn your effigy<br />This is where I’ll be<br />Reach / Search / Death / March<br />Burn your effigy<br />This is where we’ll be<br /><br />Lost / Thought / Torn / Caught<br />Burn your effigy<br />This is where I’ll be<br />Dark / Games / Fog / Flames<br />Burn your effigy<br />This is where we’ll be<br />"
                            },
                            {
                                name: "Ego Crush",
                                uniqueTag: "ego-crush",
                                lyrics: "3. Ego Crush<br /><br />Verse 1<br />Signs<br />Respect for the script<br />Caught up<br />Digressed from the start<br />Oh<br /><br />Chorus<br />Let go, we’ll float<br />There’s a lighthouse ahead<br />We can toss on the waves<br />We’ll lock fingers again<br />Slip through the page<br />Sprawling life in your veins<br />Take some time for yourself<br />We will meet again<br />In time/I know (last one only and repeat)<br /><br />Verse 2<br />Blank fields softly sway<br />Closed off<br />To strangle the day<br />Oh"
                            },
                            {
                                name: "Interval",
                                uniqueTag: "interval",
                                lyrics: "5. Interval <br /><br />No Lyrics."
                            },
                            {
                                name: "Thought Experiment",
                                uniqueTag: "thought-experiment",
                                lyrics: "5. Thought Experiment<br /><br />Silence eats up evenings<br />Resting anxiously<br />Everyday I’m waiting<br />For life to catch up with my thoughts<br /><br /><br />I was dreaming about what you said<br />My choice but I can’t shake pointless what ifs<br /><br /><br />Once again you’re crying<br />Hold your head I’m quiet<br />And everyday I’m waiting<br />For life to catch up with my thoughts<br /><br /><br />Once again you’re crying<br />Tossing anxiously<br />Everyday I’m waiting<br />For life to catch up with my thoughts<br />Everyday I’m waiting<br />For this experiment to end<br />"
                            },
                            {
                                name: "Duality",
                                uniqueTag: "duality",
                                lyrics: "6. Duality <br /><br />No Lyrics."
                            },
                            {
                                name: "Dissolution",
                                uniqueTag: "dissolution",
                                lyrics: "7. Dissolution<br /><br />Verse 1<br />Soft daylight / fades and is lost <br />Whirlwind swept / stuck in all these thoughts <br /><br />Chorus<br />Peace of mind / free from dread<br />Of being alive / of being alive <br />Longing for / eternity <br />There is nothing / dissolution<br />Content<br />To pass<br />Alive<br /><br />Verse 2<br />I find myself rooted to my bed again, unable to lift my head and face the day. <br />I’m breathing in water and the last rays of light<br /> seem to wink out above me like stars being swallowed by the inky night. <br />It is a cessation of selfHead sinking / abyss I breathe in <br />To this weight / my legs submit #<br /><br />Chorus<br />Peace of mind / free from dread<br />Of being alive / of being alive <br />Longing for / eternity<br />There is nothing / dissolution<br />Content<br />To pass<br />Alive"
                            }
                        ]
                    }
                }
            ]  
        }
    }
}   