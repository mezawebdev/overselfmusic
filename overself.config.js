export default {
    global: {
        siteTitle: "o v e r s e l f",
        backgrounds: [
            {
                name: "default",
                type: "video",
                src: {
                    mobile: "../assets/videos/os-bg-2.mp4",
                    desktop: "../assets/videos/os-bg-2.mp4"
                }
            },
            {
                name: "pulses-streetlights",
                type: "video",
                src: {
                    mobile: "../assets/videos/pulses-bg-d.mp4",
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
            },
            {
                name: "everlasting",
                type: "video",
                src: {
                    mobile: "../assets/videos/everlasting-bg.mp4",
                    desktop: "../assets/videos/everlasting-bg.mp4"
                }
            }
        ]
    },
    pages: {
        home: {
            // Setting featuredVideoId to "no-video" will hide the youtube component.
            // doing so, the page will expect a featuredImageSrc prop with the image src.
            featuredVideoId: "Lm3VJVaJKOk",
            // featuredImageSrc: "/assets/images/everlasting-artwork.jpg",
            cta: {
                copy: `
                    <span class="heading">Everlasting</span>
                    <br />
                    <span class="subheader">out now</span>
                `,
                linkTo: "/music/everlasting"
            }
        },
        about: {
            bandPicture: "/assets/images/overself.jpeg",
            biography: `
                <strong>Overself</strong> is exploring the complexities of the human condition through music with topics often found in <strong>eastern mysticism</strong> such as <strong>transcendence</strong>, <strong>duality</strong>, <strong>impermanence</strong>, <strong>isolation</strong>, <strong>vulnerability</strong>, <strong>self-realization</strong> and <strong>death</strong>. The band consists of <strong>Peter Tueller</strong>, <strong>Alex Meza</strong>, <strong>Diego Guardado</strong> and <strong>Oscar Paez</strong>. Drawing from influences rooted in <strong>shoegaze</strong>, <strong>post-hardcore</strong>, <strong>post-rock</strong> and <strong>dream pop</strong>, <strong>Overself</strong> employs a sound that is both explosive and sensitive. 
                <br /><br />
                The origins of <strong>Overself</strong> reside in the underground <strong>San Diego</strong> rock and indie scene. <strong>Peter</strong>, <strong>Alex</strong>, <strong>Diego</strong>, and <strong>Oscar</strong> all participated in multiple bands that were very active in the scene, but ultimately discovered that they were the most productive and inspired when working together. 2019 found them working tirelessly to define their sound and goals, and after a prolific year they released their debut album “<strong>Pulses</strong>.”
                <br /><br />
                <strong>Overself</strong> incorporates <strong>dreamy guitars</strong>, <strong>soft vocals</strong>, <strong>retro synths</strong>, and <strong>ambient sounds</strong> combined with sudden <strong>distorted guitars</strong>, <strong>energetic drums</strong> and <strong>experimental progressions</strong> to create a sonic representation of <strong>duality</strong>, that merges two different emotions to ultimately produce a notion of <strong>oneness</strong> in their music.            
            `
        },
        music: {
            releases: [
                {
                    title: "Everlasting",
                    description: "",
                    path: "everlasting",
                    background: "everlasting",
                    released: true,
                    // presaveURL: "https://distrokid.com/hyperfollow/overself/everlasting",
                    releaseDate: "October 28, 2020",
                    artwork: {
                        src: "../assets/images/everlasting-artwork.jpg",
                        artist: "Real Theory"
                    },
                    streamServices: [
                        {
                            name: "Apple Music",
                            link: "https://music.apple.com/us/album/everlasting-single/1536288135?uo=4",
                            icon: "fab fa-apple"
                        },
                        {
                            name: "Spotify",
                            link: "https://open.spotify.com/track/55o3ONWJ1IJTFvlr3tfWmc?si=xPeEV55mRZmvJRfXWtBw-A",
                            icon: "fab fa-spotify"
                        },
                        {
                            name: "Youtube",
                            link: "https://www.youtube.com/watch?v=_kdKHr9hklQ",
                            icon: "fab fa-youtube"
                        },
                        {
                            name: "Bandcamp",
                            link: "https://overself.bandcamp.com/track/everlasting",
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
                                    name: "Diego Guardado",
                                    contribution: "Guitar"
                                },
                                {
                                    name: "Oscar Paez",
                                    contribution: "Bass"
                                },
                                {
                                    name: "Alex Meza",
                                    contribution: "Drums"
                                }
                            ]
                        }
                    },
                    music: {
                        tracks: [
                            {
                                name: "Everlasting",
                                uniqueTag: "everlasting",
                                lyrics: `
                                    Hopelessly content I know I’ll
                                    Learn to live a life of meaning
                                    Built from this impermanence
                                    This disarray is everlasting
                                    <br /><br />
                                    Free fall hasn’t felt this good
                                    Since you’ve left just like you always said I would
                                    I am still everlasting
                                    <br /><br />
                                    I’ll find my place
                                    Between the scenes
                                    I guess that life
                                    Isn’t always as it seems
                                    I thought I had
                                    A time and place
                                    But now there’s space
                                    Beyond the days
                                    <br /><br />
                                    I’ll take the back way out
                                    For the thousandth time
                                    I thought I would’ve learned
                                    My only crime
                                    A dramatic copping out
                                    Erased without a doubt
                                    But now there’s space
                                    Beyond the days
                                `
                            }
                        ]
                    }
                },
                {
                    title: "Memories",
                    description: "",
                    path: "memories",
                    background: "default",
                    released: true,
                    releaseDate: "August 10, 2020",
                    artwork: {
                        src: "../assets/images/memories-artwork.jpg",
                        artist: "Real Theory"
                    },
                    streamServices: [
                        {
                            name: "Apple Music",
                            link: "https://music.apple.com/us/album/memories/1525051344?i=1525051345",
                            icon: "fab fa-apple"
                        },
                        {
                            name: "Spotify",
                            link: "https://open.spotify.com/track/0VZiHAx3sT65EYQU2P8xtF?si=1puF6NqYSuGicPPQv_sjgw",
                            icon: "fab fa-spotify"
                        },
                        {
                            name: "Youtube",
                            link: "https://www.youtube.com/watch?v=Z7TZc3OmKYI",
                            icon: "fab fa-youtube"
                        },
                        {
                            name: "Bandcamp",
                            link: "https://overself.bandcamp.com/track/memories",
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
                                    name: "Diego Guardado",
                                    contribution: "Guitar"
                                },
                                {
                                    name: "Oscar Paez",
                                    contribution: "Bass"
                                },
                                {
                                    name: "Alex Meza",
                                    contribution: "Drums"
                                }
                            ]
                        }
                    },
                    music: {
                        tracks: [
                            {
                                name: "Memories",
                                uniqueTag: "memories",
                                lyrics: `
                                    Listen to the sounds so far away
                                    Distant memories of solemn days
                                    Muffled rushing, a timid cry
                                    Hazy mist clouds a grayer sky
                                    <br /><br />
                                    Find a place long gone
                                    Never mind bear on
                                    <br /><br />
                                    Touch of grace too tough to taste
                                    Holy spells and hollow praise
                                    Knowing words to a different song
                                    Dissonance can't last for long
                                    <br /><br />
                                    Find a place long gone
                                    Never mind bear on
                                    <br /><br />
                                    Find a place long gone
                                    Never mind bear on
                                `
                            }
                        ]
                    }
                },
                {
                    title: "Symptomatic",
                    description: "",
                    path: "symptomatic",
                    background: "default",
                    released: true,
                    releaseDate: "June 22, 2020",
                    artwork: {
                        src: "../assets/images/symptomatic-artwork.jpg",
                        artist: "Real Theory"
                    },
                    streamServices: [
                        {
                            name: "Apple Music",
                            link: "https://music.apple.com/us/album/symptomatic/1517064783?i=1517064784",
                            icon: "fab fa-apple"
                        },
                        {
                            name: "Spotify",
                            link: "https://open.spotify.com/track/1zRZbClFYEIKfI4DCfjXZi?si=Pzvkq2QZQMKRwDQQ8AeTIg",
                            icon: "fab fa-spotify"
                        },
                        {
                            name: "Youtube",
                            link: "https://youtu.be/n4QMz5EFK_c",
                            icon: "fab fa-youtube"
                        },
                        {
                            name: "Bandcamp",
                            link: "https://overself.bandcamp.com/track/symptomatic",
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
                                    name: "Diego Guardado",
                                    contribution: "Guitar"
                                },
                                {
                                    name: "Oscar Paez",
                                    contribution: "Bass"
                                },
                                {
                                    name: "Alex Meza",
                                    contribution: "Drums"
                                }
                            ]
                        }
                    },
                    music: {
                        tracks: [
                            {
                                name: "Symptomatic",
                                uniqueTag: "symptomatic",
                                lyrics: `
                                    Chills in summer heat
                                    Thoughts too loud to speak
                                    What is wrong with me
                                    Silently I scream
                                    <br /><br />
                                    I know I get so overwhelmed at times
                                    Remain while I retreat
                                    Instinctively shut my eyes
                                    To find some peace
                                    My fears
                                    Too near
                                    Not here
                                    <br /><br />
                                    Still as night, why the fight or flight
                                    How can I know which lie is mine
                                    Symptomatic crime
                                    Watch my fate align
                                    <br /><br />
                                    I know I get so overwhelmed at times
                                    Remain while I retreat
                                    Instinctively shut my eyes
                                    To find some peace
                                    My fears
                                    Too near
                                    Not here
                                `
                            }
                        ]
                    }
                },
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
        },
        shop: {
            stripePublicAPIKey: "pk_test_51I5RWHBlBE7zOQ5m8Yl2g3YG5r1632hcHoL9jJIHoVTqX2UULGcZV2GKc9nb59tnnAG9yDpIVvudAiDTuqKLchTY00SV2NA4Zb"
        }
    }
}   