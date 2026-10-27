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
      role: "Web developer working on the front end and quality of the Django application.",
      challenge: "Ship new learning content and features quickly while keeping a growing product stable on AWS.",
      approach: [
        "Tested new features and content releases before deployment.",
        "Checked responsive layouts across desktop and mobile devices.",
        "Worked with the team to reproduce, document, and verify bug fixes.",
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

export const projects = [
  { name: "Send a Boop", url: "https://sendaboop.app/", img: `${A}/thumbs/sendaboop.png`, desc: "Send cute animal pics to friends.", stack: ["Expo", "React", "MySQL", "AI-assisted"] },
  { name: "Quote Keeper", url: "https://quote-keeper.com/", img: `${A}/thumbs/quote-keeper.png`, desc: "Save and organize favorite quotes.", stack: ["Angular", "MySQL", "AI-assisted"] },
  { name: "DMV Practice Quiz", url: "https://alannarisse.github.io/quizzes/dmv-practice/", img: `${A}/thumbs/dmv-practice-quiz.png`, desc: "Mostly hand-built quiz app.", stack: ["Vanilla JS", "GitHub Pages"] },
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
