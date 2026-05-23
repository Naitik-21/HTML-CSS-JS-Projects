// Function For Random Texts Appear On Refreshing The Browser
export function randomtext() {
    let randomtextgen = parseInt(Math.random() * 7);

    let herotitle = [
        "I'm Naitik Ramani, Full-stack Web Developer Crafting Powerful And Seamless Web Experiences From Front To Back.",
        "I'm Naitik Ramani, A Developer Dedicated To Turning Ideas Into Seamless Web Solutions Through Clean Code, And Smart Design.",
        "I'm Naitik Ramani, A Full-stack Developer Blending Creative Front-Ends With Powerful, Efficient Back-Ends.",
        "I'm Naitik Ramani, A Passionate Full-stack Developer Building Fast, Modern, And Scalable Web Applications Designed For Real-World Impact.",
        "I'm Naitik Ramani, A Full-stack Web Developer Crafting Clean, Functional, And Impactful Digital Products Through Modern Technologies",
        "I'm Naitik Ramani, A Developer Transforming Ideas Into High-Performance Web Experiences With Clean Code, Modern Tools, And Purpose-Driven Design.",
        "I'm Naitik Ramani, A Full-Stack Developer On A Mission To Build High-Performance, User-Focused Web Experiences That Deliver Results From End To End."
    ];

    let herosubtitle = [
        "Full-Stack Developer Crafting High-Performance, Modern, And Reliable Web Experiences.",
        "Full-Stack Developer Creating Smooth, Efficient, And Performance-Driven Web Experiences.",
        "Full-Stack Developer Focused On Crafting Clean, Robust, And Impactful Web Interfaces.",
        "Full-Stack Developer Delivering Fast, Scalable, And Future-Ready Web Applications.",
        "Full-Stack Developer Engineering Secure, High-Quality, And Scalable Web Platforms.",
        "Full-Stack Developer Transforming Ideas Into Elegant, Powerful, And Dynamic Web Systems.",
        "Full-Stack Developer Passionate About Modern Design, Solid Architecture, And Smooth UX.",
    ];

    let megaprojecttitle = [
        "Mega Projects",
        "Major Projects",
        "Big Projects",
        "Premium Projects",
        "Advanced Projects",
        "Elite Projects",
        "Legendary Projects"
    ];

    let megaprojectsubtitle = [
        "Uncover High-Impact Projects Engineered With Precision And Purpose. These Builds Merge Cutting-Edge Technologies, Strategic Thinking, And Immersive Design To Deliver Exceptional Real-World Results.",
        "Explore Large-Scale Works Crafted With Depth, Innovation, And Technical Excellence. These Projects Blend Modern Frameworks, Smart Architecture, And Meaningful Concepts To Achieve Lasting Impact.",
        "Experience Big Projects Engineered With Powerful Ideas, Modern Technologies, And Reliable Development Standards—Built To Create Lasting Impact And Real-World Value.",
        "Experience High-Level Builds Designed With Advanced Logic, Refined Aesthetics, And Strong Architecture. Each Project Combines Creativity And Engineering To Push Boundaries And Create Value.",
        "Explore Advanced And Technically Rich Projects Shaped Through Deep Research, Smart Engineering, And Immersive Experiences Designed To Solve Problems And Inspire.",
        "Showcasing Elite-Grade Builds Crafted With Purposeful Planning, Robust Logic, And Cutting-Edge Solutions. These Projects Deliver High-Performance Outcomes Through Innovation And Precision.",
        "Explore Legendary-Scale Creations Crafted With Mastery, Innovation, And Vision. These Projects Merge Advanced Technologies, Bold Ideas, And Exceptional Craftsmanship To Deliver Timeless, High-Impact Digital Experiences."
    ];

    let miniprojecttitle = [
        "Mini Projects",
        "Micro Projects",
        "Small Projects",
        "Prototype Projects",
        "Starter Projects",
        "Lite Projects",
        "Epic Projects"
    ];

    let miniprojectsubtitle = [
        "Explore Miniature Builds Crafted With Curiosity, Precision, And Innovation. Each Creation Brings Unique Ideas To Life Through Simple Structures, Smart Logic, And Thoughtful Design.",
        "Explore A Collection Of Micro Creations Crafted To Test Ideas, Try New Concepts, And Strengthen Core Skills. Each Build Demonstrates Practical Thinking And Focused Technical Execution.",
        "Small Projects Crafted With Focused Ideas, Simple Yet Effective Technologies, And Practical Development Approaches—Designed To Deliver Quick, Meaningful Results With Maximum Efficiency.",
        "Discover Rapid Prototypes Focused On Testing Concepts, Refining Skills, And Embracing Quick, Creative Development. Each Project Reflects Hands-On Experimentation And Sharpened Technique.",
        "Dive Into Beginner-Friendly Yet Thoughtful Builds Designed To Practice Techniques, Improve Fundamentals, And Bring Simple Ideas To Life With Clarity And Purpose.",
        "Dive Into Lightweight Builds That Capture Fresh Ideas, Experimental Features, And Core Development Skills. These Lite Projects Highlight Simplicity, Smart Logic, And Hands-On Exploration.",
        "Explore A Collection Of Small Yet Impactful Builds Filled With Creativity, Experimentation, And Smart Ideas. Each Epic Project Delivers Unique Features, Clean Logic, And Hands-On Innovation In A Compact Format."
    ];

    document.querySelector(".text-1").innerHTML = `${herotitle[randomtextgen]}`;
    document.querySelector(".text-2").innerHTML = `${herosubtitle[randomtextgen]}`;
    document.querySelector(".text-7").innerHTML = `${megaprojecttitle[randomtextgen]}`;
    document.querySelector(".text-8").innerHTML = `${megaprojectsubtitle[randomtextgen]}`;
    document.querySelector(".text-9").innerHTML = `${miniprojecttitle[randomtextgen]}`;
    document.querySelector(".text-10").innerHTML = `${miniprojectsubtitle[randomtextgen]}`;
}