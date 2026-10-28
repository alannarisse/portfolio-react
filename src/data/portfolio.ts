const A = "/assets";

export const links = {
  resume: "https://alannarisse.com/resume/",
  linkedin: "https://www.linkedin.com/in/alanna-risse-portland/",
  github: "https://github.com/alannarisse",
  instagram: "https://instagram.com/alannarisse",
  substack: "https://substack.com/@bananaphone",
  portal: "https://alannarisse.github.io/internet-fun/index.html",
};

export const skills = [
  { group: "Testing & Quality", items: ["Playwright", "Mocha/Chai", "Automation", "End-to-end testing", "Test planning", "Regression testing", "Cross-browser testing", "Accessibility (WCAG 2.0 AA)", "A/B testing", "Analytics QA"] },
  { group: "Development", items: ["JavaScript", "TypeScript", "React", "Next.js", "Expo", "Angular", "Vue", "Node.js", "Django", "MySQL"] },
  { group: "Platforms", items: ["AWS", "Vercel", "Railway", "Netlify", "Pantheon", "WordPress", "Webflow", "GitHub Pages"] },
];

export type CaseStudy = {
  overview: string;
  role: string;
  challenge: string;
  approach: string[];
  approachTitle?: string;
  results: string[];
  gallery: { src: string; alt: string }[];
};

export type Job = {
  id: string;
  name: string;
  url?: string;
  tagline: string;
  desktop: string;
  /** Screenshot displayed in the phone frame. */
  mobile: string;
  stack: string[];
  caseStudy?: CaseStudy;
};

export const featuredJobs: Job[] = [
  {
    id: "backoff",
    name: "Back Office by Buyers Edge",
    url: "https://bepbackoffice.com/",
    tagline: "Quality Assurance Engineer, 2026. AI-assisted testing, ",
    desktop: `${A}/design/backoffice-desktop.png`,
    mobile: `${A}/design/backoffice-mobile.png`,
    stack: ["Angular", "Java", "MySQL", "AI-Assisted Testing", "Playwright", "Release Management"],
    caseStudy: {
      overview: "Back Office is a restaurant operations, food cost management, and accounting SaaS used by 4,000+ restaurants, including half of the top 100 US chains. I partnered closely with engineering, design, and customer support.",
      role: "Quality Assurance Engineer for Sales, Operations, Inventory, Ingredients, and Menus sections of Saas application.",
      challenge: "Move a high-traffic storefront off WebSphere onto a JSP-based platform without disrupting sales, while bringing the site up to accessibility standards.",
      approach: [
        "Organized weekly releases through our CI/CD pipeline, including automated smoke tests, manual testing, sign-off, and release reports",
"Built AI-assisted testing workflows and Playwright performance tooling to track Core Web Vitals, network, and memory using with CHatGPT/Codex, AntiGravity, and Claude.",
"Wrote and maintained QA process documentation, test plans, test scripts, and release notes",
"Using Fullstory, gained actionable insights into customer experiences by generating and analyzing user data, including user journeys, error tracking, heat mapping, and metrics.",
"Built out FullStory Analytics tool, with metrics, user journeys, utilizing the FullStory MCP server to pull post-release data analysis and release stability reports. Created library of pages and elements for more granular reporting. Utilized FullStory’s StoryAI to gain deeper insights into user pain-points."
      ],
      gallery: [{ src: `${A}/design/backoffice-desktop.png`, alt: "Back Office website" }],
      results: ["AI-Assisted tools and reporting", "Streamlined Weekly Releases with detailed reporting for Customer Service and Program Managers", "Steady decrease in Jira tickets from Customer Service."],
    },
  },
  {
    id: "westelm",
    name: "West Elm",
    url: "https://westelm.com/",
    tagline: "Lead front-end developer, 2008–2010. Migrated the storefront from WebSphere to JSP, reached WCAG 2.0 AA, and ran A/B tests and sales launches.",
    desktop: `${A}/design/westelm-desktop.png`,
    mobile: `${A}/design/westelm-mobile.png`,
    stack: ["JSP", "JavaScript", "CSS", "WCAG 2.0 AA", "A/B testing", "Analytics"],
    caseStudy: {
      overview: "West Elm's e-commerce site served a national retail audience with frequent sales events and seasonal catalog launches.",
      role: "Main front-end developer for the West Elm website from 2008 through 2010.",
      challenge: "Move a high-traffic storefront off WebSphere onto a JSP-based platform without disrupting sales, while bringing the site up to accessibility standards.",
      approach: [
        "Verified templates and checkout flows across browsers during the platform migration.",
        "Audited and fixed pages to meet WCAG 2.0 AA accessibility guidelines.",
        "Set up and ran A/B tests, validating variants before and after launch.",
        "Monitored traffic and sales analytics to catch regressions after each release.",
      ],
      results: ["Successful migration from WebSphere to JSP", "WCAG 2.0 AA status achieved", "Reliable launches for recurring sales events"],
      gallery: [{ src: `${A}/design/westelm-desktop.png`, alt: "West Elm redesign" }],
    },
  },
  {
    id: "bizblocks",
    name: "BusinessBlocks",
    tagline: "Education and support platform for small business owners. Django and MySQL on AWS. Acquired by AmTrust.",
    desktop: `${A}/design/businessblocks-desktop.png`,
    mobile: `${A}/design/businessblocks-mobile.png`,
    stack: ["Django", "MySQL", "AWS", "JavaScript"],
    caseStudy: {
      overview: "BusinessBlocks helped small business owners learn and get support with guides, tools, and resources.",
      role: "I inherited their initial Wordpress website and APIs. While maintaining the current site, I researched stacks, hired a junior developer, and built out a flexible Django/Python site with room for the organization to grow.",
      challenge: "Ship new learning content and features quickly while keeping a growing product stable on AWS.",
      approach: [
        "Tested new features and content releases before deployment.",
        "Checked responsive layouts across desktop and mobile devices.",
        "Worked with the team to reproduce, document, and verify bug fixes in Jira.",
      ],
      results: ["Stable, growing platform", "Company acquired by AmTrust"],
      gallery: [{ src: `${A}/design/businessblocks-desktop.png`, alt: "BusinessBlocks website" }],
    },
  },
  {
    id: "qadium",
    name: "Qadium",
    tagline: "Custom WordPress site built with Advanced Custom Fields, hosted on Pantheon.",
    desktop: `${A}/design/qadium-desktop.png`,
    mobile: `${A}/design/qadium-mobile.png`,
    stack: ["WordPress", "ACF", "PHP", "Pantheon"],
  },
  {
    id: "plusplus",
    name: "PlusPlus",
    url: "http://plusplus.co/",
    tagline: "Custom WordPress site built with Advanced Custom Fields, hosted on Pantheon.",
    desktop: `${A}/design/plusplus-desktop.png`,
    mobile: `${A}/design/plusplus-mobile.png`,
    stack: ["WordPress", "ACF", "PHP", "Pantheon"],
  },
];

export const otherJobs = [
  { name: "Timbuk2", desc: "Messenger bags — web development", img: `${A}/design/timbuk2.png` },
  { name: "MedNet for Nature Conservancy", desc: "Mediterranean Action Network — data visualization", img: `${A}/design/mednetworkdataViz_veg.jpg` },
  { name: "House of Bagels", desc: "WordPress web development", img: `${A}/design/hob_final_screen2.png` },
  { name: "CETI Portland", desc: "Web development and marketing", img: `${A}/design/ceti-institute.png` },
  { name: "Alignment Therapy PDX", desc: "Webflow site, local SEO, lead generation", img: `${A}/design/alignment-therapy-screen.png`, url: "https://alignmenttherapypdx.com/" },
  { name: "Anna Fidler", desc: "Artist website, maintained since 2013", img: `${A}/design/annafidler-sq.png`, url: "https://annafidler.com/" },
  { name: "JJ Wiesler", desc: "Website design", img: `${A}/design/jjwiesler.jpg` },
  { name: "Button Consignment", desc: "Website and print design", img: `${A}/design/button1.jpg` },
];

export const featuredProjects: Job[] = [
  {
    id: "send-a-boop",
    name: "Send a Boop",
    url: "https://sendaboop.app/",
    tagline: "A little kindness, delivered: choose a dog or cat photo, add a personal message, and email it to a friend.",
    desktop: `${A}/thumbs/sendaboop.png`,
    mobile: `${A}/design/sendaboop-mobile.png`,
    stack: ["Expo", "React Native", "TypeScript", "Express", "Resend", "Playwright"],
    caseStudy: {
      overview: "Send a Boop is a personal project for sending a small, thoughtful message with an animal photo. One Expo project supports the web app and native mobile interface, with a separate Express API handling verification and email delivery.",
      role: "Design, development, and testing of a personal cross-platform app, with AI-assisted development using Claude and Figma Make.",
      challenge: "Keep the experience playful and simple while handling real email delivery, sender verification, form validation, and the constraints of small screens and mobile keyboards.",
      approachTitle: "Build & testing approach",
      approach: [
        "Built the photo-selection and message flow with Expo, React Native, and TypeScript, including an optional message limited to 280 characters.",
        "Added sender email verification through signed, expiring links before delivering the message to the recipient.",
        "Used a separate Node.js/Express API with Resend for email, with rate limits on sending and verification endpoints.",
        "Added Playwright coverage for image selection, required fields, email validation, message limits, submission, API errors, and the contact form.",
      ],
      results: [
        "Web app hosted on Vercel, with its API hosted on Railway.",
        "iOS app in TestFlight testing, with Android configuration included in the project.",
        "A complete photo-to-verified-email flow, with a way for recipients to send a boop back.",
      ],
      gallery: [],
    },
  },
];

export const projects = [
  { name: "Quote Keeper", url: "https://quote-keeper.com/", img: `${A}/thumbs/quote-keeper.png`, desc: "Save and organize favorite quotes.", stack: ["Angular", "MySQL", "AI-assisted"] },
  { name: "Quiz-O-Rama Quiz app collection", url: "https://alannarisse.github.io/quizzes/", img: `${A}/design/quizorama-desktop.png`, desc: "A collection of quizzes in  Javascript", stack: ["Vanilla JS", "GitHub Pages"], },
  { name: "Wine Finder", url: "http://wine-finder-app.vercel.app/", img: `${A}/thumbs/wine-finder.png`, desc: "Find the right bottle.", stack: ["React", "Vercel", "AI-assisted"] },
  { name: "Verge Online Store", url: "https://next-ecom-bay.vercel.app/", img: `${A}/design/verge-app-rect-next-ecom.png`, desc: "Hand-coded art store with Stripe payments.", stack: ["React", "Next.js", "Stripe"] },
  { name: "Scrumptious!", url: "https://scrumptiousmeals.netlify.app/", img: `${A}/design/yumyum-vuejs-api-app.png`, desc: "Recipe app built on a free API.", stack: ["Vue", "Vite", "Netlify"] },
  { name: "PSU Interactive Media", url: "https://psuinteractivemedia.com/", img: `${A}/design/psuinteractive-website.png`, desc: "Course site for PSU Graphic Design students.", stack: ["Teaching", "Web"] },
  { name: "Verge PDX", img: `${A}/design/verge-short.png`, desc: "Art curation in Portland — branding, design, development.", stack: ["Branding", "Web"] },
];

export const talks = [
  { img: `${A}/photos/alanna-serverless.jpeg`, title: "Artist Talk", venue: "PDX Serverless Meetup" },
  { img: `${A}/photos/slide-neuro-talk.png`, title: "How Learning About My Own Neurodivergence Made Me a Better Teacher", venue: "Week of Teaching, PSU Office of Academic Excellence" },
];

export const writing = [
  { title: "Send-A-Boop", desc: "I built a fun app using Claude Code that sends cute animal pics to your friends. Here are my thoughts.", url: "https://substack.com/@bananaphone/p-187674710" },
  { title: "Cheesing In America", desc: "James L Kraft, anti-coagulants, government cheese, and cheese caves.", url: "https://substack.com/@bananaphone/p-183957970" },
  { title: "Dogs and Heart Strings", desc: "Volunteering at the Oregon Humane Society.", url: "https://substack.com/@bananaphone/p-176779456" },
  { title: "Letter to a Stranger", desc: "Cleaning up broken glass and making the world a tiny bit better.", url: "https://substack.com/@bananaphone/p-164679697" },
];

// Preserved from alannarisse.com-static/js/testimonials.js.
export const testimonials = [
  {
    "quote": "I hope, someday, to be as interesting as Alanna Risse.",
    "by": "The Most Interesting Man in the World"
  },
  {
    "quote": "Alanna is a fabricator of absurdity. She pushes life into the delicate balance between truth and humor often resulting in beautiful disharmony. Alanna is unusually driven and wonderfully unusual in that she can accomplish and learn anything that is put in front of her.",
    "by": "Liz Randall"
  },
  {
    "quote": "Alanna is a rare mix of skill, determination, and goof. Her technical chops are top-notch, and she is able to learn new skills with speed and grace. She puts her heart into her work.",
    "by": "Lucas Haley"
  },
  {
    "quote": "Alanna knows front-end/templates better than anybody. And she gets the job done well and gets it done fast.",
    "by": "Alan Peters"
  },
  {
    "quote": "Alanna is a tremendous asset to any company she works for. Not only is she incredibly technically savvy, she's extremely creative and can come up with new, better solutions to existing problems. I loved working with her and someday hope I get the chance to work with Alanna again.",
    "by": "Lynn Beighley"
  },
  {
    "quote": "Alanna was the life and soul of the party at Apple in Cork when she was seconded from \"home base\" Cupertino for a period of time. It was great to have such positive experience, especially in the Multimedia Application Space, in the group and it is no surprise that she has gone on to bigger and better things in the last 10 years.",
    "by": "Gavin Costello"
  },
  {
    "quote": "Hey you! Wanted to let you know that over the years this has always been true: Whenever I see your name pop up, I smile. You're one of the warmest, funniest people I've ever come across. Thanks for reminding me you're still around! Made my day a little brighter.",
    "by": "Michael Hujsak, collegue at Apple 1995-97"
  },
  {
    "quote": "Good, timely work; cheerful in the face of adversity, a pleasure to work with and be around. All-around skilled as well as talented.",
    "by": "Kaolin Fire"
  },
  {
    "quote": "Alanna = 1, React Forms = 0",
    "by": "Alanna Risse"
  },
  {
    "quote": "I’ve known Alanna for nearly a decade now and, honestly, my life just keeps getting better. I mean, I don’t actually KNOW know her (like in the biblical sense) but she breathed on me once back in art school and I was totally into it. Pretty sure she was too. What I mean is she changed my life. Made me sparkly and intoxicating. Everywhere I go, people adore me... but Alanna loved me first. I’m forever changed and forever grateful.",
    "by": "Angela Simione"
  },
  {
    "quote": "I can't explain enough how impactful you have been to me as a colleague and guide for our students!!",
    "by": "Emma Holland"
  },
  {
    "quote": "Thank you for all of your help during the term and introducing us into the bumpy, breezy bike ride of coding, stay awesome!",
    "by": "Brandon Pahnish, Student, PSU"
  },
  {
    "quote": "Alanna so sad to hear this!! Absolute best of luck in everything you do, loved when we had the opportunity to chat over zoom recently about your involvement with the programs :orange_heart: thank you for everything you've done for the programs!! -Linda, Thinkful Educator Recruiter",
    "by": "Linda Huard  1/27/21 Thinkful Educator Recruiter"
  },
  {
    "quote": "I/others on my team are heartbroken by your announcement. I hope, hope, hope that your next adventure is off to a great start!",
    "by": "Nicholas Martin  12:21 PM Academic Success Manager"
  },
  {
    "quote": "I will absolutely miss you - your feedback and support have really helped me grow as a designer. I’ll send you a celebration message when I graduate :party-blob: Best of luck with starting your new endeavors!",
    "by": "Jennifer Lundeen  12:24 PM Mentee Bloc UX/UI program"
  },
  {
    "quote": "It was a wild year, but i'm doing well, and a large part of that is because of the job I was able to land. So I truly appreciate everything you taught me, and making that opportunity possible. -Alex N Walters, Mentee, Thinkful",
    "by": "alex walters 1/28/21"
  },
  {
    "quote": "Thank you for all that you've done for Thinkful @Alanna Risse :orange_heart: all the best to you in your ventures beyond here!!",
    "by": "--Kara Gillette Manager of Outcomes Specialists"
  },
  {
    "quote": "Alanna so sad to hear you are leaving!! Absolute best of luck in everything you do, loved when we had the opportunity to chat over zoom recently about your involvement with the programs :orange_heart: thank you for everything you've done for the programs!!",
    "by": "--Linda Huard Educator Recruiter"
  },
  {
    "quote": "Alanna is a fantastic teacher and mentor. Having a tremendous amount of experience in web development and art she can provide an answer and a resource for every question you might have. I've received a lot of knowledge about the use of typefaces, colors, design tools, as well as working with GitHub, programming in HTML, CSS, JS etc. from our meetings. I highly recommend Alanna as a mentor and a teacher!",
    "by": "--Inna Beltcova, Associate UX Designer at AllScripts March 2019"
  },
  {
    "quote": "Thank you so much! I appreciate all that you have done!",
    "by": "Jenny Wong feb 22, 2021"
  },
  {
    "quote": "Thanks for the awesome two classes Alanna! As frustrating has coding has been, it's been a good experience to have with you as my teacher. I hope you have a great spring break!",
    "by": "Anitra Meyer 3/16/21"
  },
  {
    "quote": "I wanted to connect with you and say thanks again for mentoring me through the Thinkful pre-work. I recently graduated from General Assembly's software engineering program and thought about how helpful you were at the beginning of my journey and just wanted to say thanks!",
    "by": "Sarah Moe 11/30/21"
  },
  {
    "quote": "I am learning a lot and your videos are super super helpful, I can't thank you enough for recording the classes and creating more videos to explain harder concepts.",
    "by": "Haley Watts 2/18/22"
  },
  {
    "quote": "This class has been super rewarding for me! I had a lot of fun and learned a lot 🥳🥳 Thank you Alanna!",
    "by": "Haley Watts 3/7/22"
  },
  {
    "quote": "Alanna, You're amazing!!! What an awesome and hilarious and touching and generous and thoughtful gift you dropped off for me today. When I walked into the office, all my coworkers were dancing and singing and clapping and giving me a standing ovation as they pointed to my desk and showed me what you brought. It was both crazy embarrassing and amazingly awesome at the same time. Thank you for thinking of me!",
    "by": "Dennis Howe PT 4/26/2022"
  },
  {
    "quote": "I have really been enjoying your class and you’ve quickly become one of my favorite professors!",
    "by": "Sam Baltierra 10/30/22"
  }
];
