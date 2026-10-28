import { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/data/portfolio.ts
var A = "/assets";
var links = {
	resume: "https://alannarisse.com/resume/",
	linkedin: "https://www.linkedin.com/in/alanna-risse-portland/",
	github: "https://github.com/alannarisse",
	instagram: "https://instagram.com/alannarisse",
	substack: "https://substack.com/@bananaphone",
	portal: "https://alannarisse.github.io/internet-fun/index.html"
};
var skills = [
	{
		group: "Testing & Quality",
		items: [
			"Playwright",
			"Mocha/Chai",
			"Automation",
			"End-to-end testing",
			"Test planning",
			"Regression testing",
			"Cross-browser testing",
			"Accessibility (WCAG 2.0 AA)",
			"A/B testing",
			"Analytics QA"
		]
	},
	{
		group: "Development",
		items: [
			"JavaScript",
			"TypeScript",
			"React",
			"Next.js",
			"Expo",
			"Angular",
			"Vue",
			"Node.js",
			"Django",
			"MySQL"
		]
	},
	{
		group: "Platforms",
		items: [
			"AWS",
			"Vercel",
			"Railway",
			"Netlify",
			"Pantheon",
			"WordPress",
			"Webflow",
			"GitHub Pages"
		]
	}
];
var featuredJobs = [
	{
		id: "backoff",
		name: "Back Office by Buyers Edge",
		url: "https://bepbackoffice.com/",
		tagline: "Quality Assurance Engineer, 2026. AI-assisted testing, ",
		desktop: `${A}/design/backoffice-desktop.png`,
		mobile: `${A}/design/backoffice-mobile.png`,
		stack: [
			"Angular",
			"Java",
			"MySQL",
			"AI-Assisted Testing",
			"Playwright",
			"Release Management"
		],
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
			gallery: [{
				src: `${A}/design/backoffice-desktop.png`,
				alt: "Back Office website"
			}],
			results: [
				"AI-Assisted tools and reporting",
				"Streamlined Weekly Releases with detailed reporting for Customer Service and Program Managers",
				"Steady decrease in Jira tickets from Customer Service."
			]
		}
	},
	{
		id: "westelm",
		name: "West Elm",
		url: "https://westelm.com/",
		tagline: "Lead front-end developer, 2008–2010. Migrated the storefront from WebSphere to JSP, reached WCAG 2.0 AA, and ran A/B tests and sales launches.",
		desktop: `${A}/design/westelm-desktop.png`,
		mobile: `${A}/design/westelm-mobile.png`,
		stack: [
			"JSP",
			"JavaScript",
			"CSS",
			"WCAG 2.0 AA",
			"A/B testing",
			"Analytics"
		],
		caseStudy: {
			overview: "West Elm's e-commerce site served a national retail audience with frequent sales events and seasonal catalog launches.",
			role: "Main front-end developer for the West Elm website from 2008 through 2010.",
			challenge: "Move a high-traffic storefront off WebSphere onto a JSP-based platform without disrupting sales, while bringing the site up to accessibility standards.",
			approach: [
				"Verified templates and checkout flows across browsers during the platform migration.",
				"Audited and fixed pages to meet WCAG 2.0 AA accessibility guidelines.",
				"Set up and ran A/B tests, validating variants before and after launch.",
				"Monitored traffic and sales analytics to catch regressions after each release."
			],
			results: [
				"Successful migration from WebSphere to JSP",
				"WCAG 2.0 AA status achieved",
				"Reliable launches for recurring sales events"
			],
			gallery: [{
				src: `${A}/design/westelm-desktop.png`,
				alt: "West Elm redesign"
			}]
		}
	},
	{
		id: "bizblocks",
		name: "BusinessBlocks",
		tagline: "Education and support platform for small business owners. Django and MySQL on AWS. Acquired by AmTrust.",
		desktop: `${A}/design/businessblocks-desktop.png`,
		mobile: `${A}/design/businessblocks-mobile.png`,
		stack: [
			"Django",
			"MySQL",
			"AWS",
			"JavaScript"
		],
		caseStudy: {
			overview: "BusinessBlocks helped small business owners learn and get support with guides, tools, and resources.",
			role: "I inherited their initial Wordpress website and APIs. While maintaining the current site, I researched stacks, hired a junior developer, and built out a flexible Django/Python site with room for the organization to grow.",
			challenge: "Ship new learning content and features quickly while keeping a growing product stable on AWS.",
			approach: [
				"Tested new features and content releases before deployment.",
				"Checked responsive layouts across desktop and mobile devices.",
				"Worked with the team to reproduce, document, and verify bug fixes in Jira."
			],
			results: ["Stable, growing platform", "Company acquired by AmTrust"],
			gallery: [{
				src: `${A}/design/businessblocks-desktop.png`,
				alt: "BusinessBlocks website"
			}]
		}
	},
	{
		id: "qadium",
		name: "Qadium",
		tagline: "Custom WordPress site built with Advanced Custom Fields, hosted on Pantheon.",
		desktop: `${A}/design/qadium-desktop.png`,
		mobile: `${A}/design/qadium-mobile.png`,
		stack: [
			"WordPress",
			"ACF",
			"PHP",
			"Pantheon"
		]
	},
	{
		id: "plusplus",
		name: "PlusPlus",
		url: "http://plusplus.co/",
		tagline: "Custom WordPress site built with Advanced Custom Fields, hosted on Pantheon.",
		desktop: `${A}/design/plusplus-desktop.png`,
		mobile: `${A}/design/plusplus-mobile.png`,
		stack: [
			"WordPress",
			"ACF",
			"PHP",
			"Pantheon"
		]
	}
];
var otherJobs = [
	{
		name: "Timbuk2",
		desc: "Messenger bags — web development",
		img: `${A}/design/timbuk2.png`
	},
	{
		name: "MedNet for Nature Conservancy",
		desc: "Mediterranean Action Network — data visualization",
		img: `${A}/design/mednetworkdataViz_veg.jpg`
	},
	{
		name: "House of Bagels",
		desc: "WordPress web development",
		img: `${A}/design/hob_final_screen2.png`
	},
	{
		name: "CETI Portland",
		desc: "Web development and marketing",
		img: `${A}/design/ceti-institute.png`
	},
	{
		name: "Alignment Therapy PDX",
		desc: "Webflow site, local SEO, lead generation",
		img: `${A}/design/alignment-therapy-screen.png`,
		url: "https://alignmenttherapypdx.com/"
	},
	{
		name: "Anna Fidler",
		desc: "Artist website, maintained since 2013",
		img: `${A}/design/annafidler-sq.png`,
		url: "https://annafidler.com/"
	},
	{
		name: "JJ Wiesler",
		desc: "Website design",
		img: `${A}/design/jjwiesler.jpg`
	},
	{
		name: "Button Consignment",
		desc: "Website and print design",
		img: `${A}/design/button1.jpg`
	}
];
var featuredProjects = [{
	id: "send-a-boop",
	name: "Send a Boop",
	url: "https://sendaboop.app/",
	tagline: "A little kindness, delivered: choose a dog or cat photo, add a personal message, and email it to a friend.",
	desktop: `${A}/thumbs/sendaboop.png`,
	mobile: `${A}/design/sendaboop-mobile.png`,
	stack: [
		"Expo",
		"React Native",
		"TypeScript",
		"Express",
		"Resend",
		"Playwright"
	],
	caseStudy: {
		overview: "Send a Boop is a personal project for sending a small, thoughtful message with an animal photo. One Expo project supports the web app and native mobile interface, with a separate Express API handling verification and email delivery.",
		role: "Design, development, and testing of a personal cross-platform app, with AI-assisted development using Claude and Figma Make.",
		challenge: "Keep the experience playful and simple while handling real email delivery, sender verification, form validation, and the constraints of small screens and mobile keyboards.",
		approachTitle: "Build & testing approach",
		approach: [
			"Built the photo-selection and message flow with Expo, React Native, and TypeScript, including an optional message limited to 280 characters.",
			"Added sender email verification through signed, expiring links before delivering the message to the recipient.",
			"Used a separate Node.js/Express API with Resend for email, with rate limits on sending and verification endpoints.",
			"Added Playwright coverage for image selection, required fields, email validation, message limits, submission, API errors, and the contact form."
		],
		results: [
			"Web app hosted on Vercel, with its API hosted on Railway.",
			"iOS app in TestFlight testing, with Android configuration included in the project.",
			"A complete photo-to-verified-email flow, with a way for recipients to send a boop back."
		],
		gallery: []
	}
}];
var projects = [
	{
		name: "Quote Keeper",
		url: "https://quote-keeper.com/",
		img: `${A}/thumbs/quote-keeper.png`,
		desc: "Save and organize favorite quotes.",
		stack: [
			"Angular",
			"MySQL",
			"AI-assisted"
		]
	},
	{
		name: "Quiz-O-Rama Quiz app collection",
		url: "https://alannarisse.github.io/quizzes/",
		img: `${A}/design/quizorama-desktop.png`,
		desc: "A collection of quizzes in  Javascript",
		stack: ["Vanilla JS", "GitHub Pages"]
	},
	{
		name: "Wine Finder",
		url: "http://wine-finder-app.vercel.app/",
		img: `${A}/thumbs/wine-finder.png`,
		desc: "Find the right bottle.",
		stack: [
			"React",
			"Vercel",
			"AI-assisted"
		]
	},
	{
		name: "Verge Online Store",
		url: "https://next-ecom-bay.vercel.app/",
		img: `${A}/design/verge-app-rect-next-ecom.png`,
		desc: "Hand-coded art store with Stripe payments.",
		stack: [
			"React",
			"Next.js",
			"Stripe"
		]
	},
	{
		name: "Scrumptious!",
		url: "https://scrumptiousmeals.netlify.app/",
		img: `${A}/design/yumyum-vuejs-api-app.png`,
		desc: "Recipe app built on a free API.",
		stack: [
			"Vue",
			"Vite",
			"Netlify"
		]
	},
	{
		name: "PSU Interactive Media",
		url: "https://psuinteractivemedia.com/",
		img: `${A}/design/psuinteractive-website.png`,
		desc: "Course site for PSU Graphic Design students.",
		stack: ["Teaching", "Web"]
	},
	{
		name: "Verge PDX",
		img: `${A}/design/verge-short.png`,
		desc: "Art curation in Portland — branding, design, development.",
		stack: ["Branding", "Web"]
	}
];
var talks = [{
	img: `${A}/photos/alanna-serverless.jpeg`,
	title: "Artist Talk",
	venue: "PDX Serverless Meetup"
}, {
	img: `${A}/photos/slide-neuro-talk.png`,
	title: "How Learning About My Own Neurodivergence Made Me a Better Teacher",
	venue: "Week of Teaching, PSU Office of Academic Excellence"
}];
var writing = [
	{
		title: "Send-A-Boop",
		desc: "I built a fun app using Claude Code that sends cute animal pics to your friends. Here are my thoughts.",
		url: "https://substack.com/@bananaphone/p-187674710"
	},
	{
		title: "Cheesing In America",
		desc: "James L Kraft, anti-coagulants, government cheese, and cheese caves.",
		url: "https://substack.com/@bananaphone/p-183957970"
	},
	{
		title: "Dogs and Heart Strings",
		desc: "Volunteering at the Oregon Humane Society.",
		url: "https://substack.com/@bananaphone/p-176779456"
	},
	{
		title: "Letter to a Stranger",
		desc: "Cleaning up broken glass and making the world a tiny bit better.",
		url: "https://substack.com/@bananaphone/p-164679697"
	}
];
var testimonials = [
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
//#endregion
//#region src/components/portfolio/RotatingQuote.tsx
function RotatingQuote() {
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(true);
	const [hovered, setHovered] = useState(false);
	useEffect(() => {
		const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
		setPaused(preference.matches);
		const onChange = () => {
			if (preference.matches) setPaused(true);
		};
		preference.addEventListener("change", onChange);
		return () => preference.removeEventListener("change", onChange);
	}, []);
	useEffect(() => {
		if (paused || hovered) return;
		const timer = window.setInterval(() => {
			setIndex((current) => (current + 1) % testimonials.length);
		}, 15e3);
		return () => window.clearInterval(timer);
	}, [paused, hovered]);
	const quote = testimonials[index];
	const step = (direction) => {
		setPaused(true);
		setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
	};
	return /* @__PURE__ */ jsxs("section", {
		"aria-label": "Testimonials",
		"aria-roledescription": "carousel",
		className: "rounded-xl border-l-2 border-primary bg-card p-6",
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => setHovered(false),
		onFocusCapture: (event) => {
			if (!event.currentTarget.contains(event.relatedTarget)) setPaused(true);
		},
		children: [/* @__PURE__ */ jsx("div", {
			"aria-live": paused ? "polite" : "off",
			"aria-atomic": "true",
			children: /* @__PURE__ */ jsxs("blockquote", { children: [/* @__PURE__ */ jsxs("p", {
				className: "whitespace-pre-line italic",
				children: [
					"“",
					quote.quote,
					"”"
				]
			}), /* @__PURE__ */ jsxs("footer", {
				className: "mt-3 text-sm text-muted-foreground",
				children: ["— ", quote.by]
			})] })
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-5 flex flex-wrap items-center gap-3 text-sm",
			children: [
				/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => step(-1),
					"aria-label": "Previous quote",
					className: "btn-ghost",
					children: "← Previous"
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => step(1),
					"aria-label": "Next quote",
					className: "btn-ghost",
					children: "Next →"
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => setPaused((value) => !value),
					className: "btn-ghost",
					children: paused ? "Play quotes" : "Pause quotes"
				}),
				/* @__PURE__ */ jsxs("span", {
					className: "text-muted-foreground",
					children: [
						index + 1,
						" / ",
						testimonials.length
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/portfolio/ThemeToggle.tsx
function ThemeToggle() {
	const [dark, setDark] = useState(false);
	useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
	const toggle = () => {
		const next = !dark;
		document.documentElement.classList.toggle("dark", next);
		localStorage.setItem("theme", next ? "dark" : "light");
		setDark(next);
	};
	return /* @__PURE__ */ jsx("button", {
		onClick: toggle,
		"aria-label": dark ? "Switch to light mode" : "Switch to dark mode",
		className: "flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition hover:border-primary hover:text-primary",
		children: dark ? /* @__PURE__ */ jsxs("svg", {
			width: "16",
			height: "16",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			children: [/* @__PURE__ */ jsx("circle", {
				cx: "12",
				cy: "12",
				r: "4"
			}), /* @__PURE__ */ jsx("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" })]
		}) : /* @__PURE__ */ jsx("svg", {
			width: "16",
			height: "16",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			children: /* @__PURE__ */ jsx("path", { d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" })
		})
	});
}
//#endregion
//#region src/components/portfolio/DeviceMockup.tsx
function DeviceMockup({ desktop, mobile, alt }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative pb-10 pr-8",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "overflow-hidden rounded-lg border border-border bg-card shadow-elevated",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1.5 border-b border-border bg-secondary px-3 py-2",
				children: [
					/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-muted-foreground/40" }),
					/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-muted-foreground/40" }),
					/* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-primary/70" })
				]
			}), /* @__PURE__ */ jsx("img", {
				src: desktop,
				alt: `${alt} desktop`,
				loading: "lazy",
				className: "aspect-[16/10] w-full object-cover object-top"
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "absolute bottom-0 right-0 w-[26%] min-w-[84px] rounded-[1.25rem] border-4 border-secondary bg-background p-1 shadow-elevated",
			children: [/* @__PURE__ */ jsx("div", { className: "mx-auto mb-1 h-1 w-6 rounded-full bg-muted-foreground/40" }), /* @__PURE__ */ jsx("img", {
				src: mobile,
				alt: `${alt} mobile`,
				loading: "lazy",
				className: "aspect-[9/19] w-full rounded-[0.9rem] object-cover object-top"
			})]
		})]
	});
}
//#endregion
//#region src/components/portfolio/FeaturedJob.tsx
function FeaturedJob({ job, reverse }) {
	const [open, setOpen] = useState(false);
	const cs = job.caseStudy;
	return /* @__PURE__ */ jsxs("article", {
		className: "rounded-2xl border border-border bg-card/60 p-6 md:p-10",
		children: [/* @__PURE__ */ jsxs("div", {
			className: `grid items-center gap-10 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`,
			children: [/* @__PURE__ */ jsx(DeviceMockup, {
				desktop: job.desktop,
				mobile: job.mobile,
				alt: job.name
			}), /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("h3", {
					className: "font-display text-3xl font-semibold",
					children: job.url ? /* @__PURE__ */ jsx("a", {
						href: job.url,
						target: "_blank",
						rel: "noreferrer",
						className: "hover:text-primary",
						children: job.name
					}) : job.name
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 text-muted-foreground",
					children: job.tagline
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-5 flex flex-wrap gap-2",
					children: job.stack.map((s) => /* @__PURE__ */ jsx("li", {
						className: "chip",
						children: s
					}, s))
				}),
				cs && /* @__PURE__ */ jsxs("button", {
					onClick: () => setOpen((o) => !o),
					"aria-expanded": open,
					className: "btn-ghost mt-6",
					children: [
						open ? "Close case study" : "Read case study",
						" ",
						/* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							children: open ? "↑" : "→"
						})
					]
				})
			] })]
		}), cs && open && /* @__PURE__ */ jsxs("div", {
			className: "mt-10 grid animate-in fade-in slide-in-from-top-2 gap-8 border-t border-border pt-10 md:grid-cols-3",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-6 md:col-span-2",
					children: [
						/* @__PURE__ */ jsx(Block, {
							title: "Overview",
							children: cs.overview
						}),
						/* @__PURE__ */ jsx(Block, {
							title: "My role",
							children: cs.role
						}),
						/* @__PURE__ */ jsx(Block, {
							title: "The challenge",
							children: cs.challenge
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "eyebrow",
							children: cs.approachTitle ?? "QA & testing approach"
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-3 space-y-2",
							children: cs.approach.map((a) => /* @__PURE__ */ jsxs("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-primary",
									children: "✓"
								}), a]
							}, a))
						})] })
					]
				}),
				/* @__PURE__ */ jsxs("aside", {
					className: "rounded-xl border border-border bg-secondary/50 p-6",
					children: [/* @__PURE__ */ jsx("h4", {
						className: "eyebrow",
						children: "Results"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-3 space-y-3",
						children: cs.results.map((r) => /* @__PURE__ */ jsx("li", {
							className: "font-display font-medium",
							children: r
						}, r))
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "grid gap-4 sm:grid-cols-2 md:col-span-3",
					children: cs.gallery.map((g) => /* @__PURE__ */ jsx("img", {
						src: g.src,
						alt: g.alt,
						loading: "lazy",
						className: "w-full rounded-lg border border-border"
					}, g.src))
				})
			]
		})]
	});
}
function Block({ title, children }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
		className: "eyebrow",
		children: title
	}), /* @__PURE__ */ jsx("p", {
		className: "mt-2 text-muted-foreground",
		children
	})] });
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var nav = [
	["work", "Work"],
	["projects", "Projects"],
	["teaching", "Teaching"],
	["writing", "Writing"],
	["contact", "Contact"]
];
function Section({ id, eyebrow, title, children }) {
	return /* @__PURE__ */ jsxs("section", {
		id,
		className: "mx-auto max-w-6xl scroll-mt-24 px-6 py-24",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "mt-3 font-display text-4xl font-semibold md:text-5xl",
				children: title
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-12",
				children
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ jsx("header", {
				className: "sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: "#top",
							className: "font-display font-semibold",
							children: ["Alanna Risse", /* @__PURE__ */ jsx("span", {
								className: "text-primary",
								children: "."
							})]
						}),
						/* @__PURE__ */ jsx("nav", {
							className: "hidden gap-7 text-sm text-muted-foreground md:flex",
							children: nav.map(([id, label]) => /* @__PURE__ */ jsx("a", {
								href: `#${id}`,
								className: "hover:text-foreground",
								children: label
							}, id))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx(ThemeToggle, {}), /* @__PURE__ */ jsx("a", {
								href: links.resume,
								target: "_blank",
								rel: "noreferrer",
								className: "btn-primary text-sm",
								children: "Resume"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("main", {
				id: "top",
				children: [
					/* @__PURE__ */ jsx("section", {
						className: "hero-glow",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-6xl px-6 pb-24 pt-28 md:pt-36",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "eyebrow",
									children: "Remote, Portland, Oregon · Open to Development roles"
								}),
								/* @__PURE__ */ jsxs("h1", {
									className: "mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] md:text-6xl",
									children: [
										"I naturally look at ",
										/* @__PURE__ */ jsx("span", {
											className: "text-primary",
											children: "the big picture"
										}),
										" and find solutions ",
										/* @__PURE__ */ jsx("span", {
											className: "text-primary",
											children: "holistically"
										}),
										" rather than symptomatically."
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-8 max-w-2xl text-xl text-muted-foreground",
									children: "I'm Alanna Risse. I've worked across the entire product lifecycle, from design to development to testing, which means I catch things specialists miss."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-10 flex flex-wrap gap-3",
									children: [
										/* @__PURE__ */ jsx("a", {
											href: links.resume,
											target: "_blank",
											rel: "noreferrer",
											className: "btn-primary",
											children: "View resume"
										}),
										/* @__PURE__ */ jsx("a", {
											href: links.linkedin,
											target: "_blank",
											rel: "noreferrer",
											className: "btn-ghost",
											children: "LinkedIn"
										}),
										/* @__PURE__ */ jsx("a", {
											href: links.github,
											target: "_blank",
											rel: "noreferrer",
											className: "btn-ghost",
											children: "GitHub"
										})
									]
								})
							]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						className: "border-y border-border bg-card/40",
						children: /* @__PURE__ */ jsx("div", {
							className: "mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3",
							children: skills.map((g) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "eyebrow",
								children: g.group
							}), /* @__PURE__ */ jsx("ul", {
								className: "mt-4 flex flex-wrap gap-2",
								children: g.items.map((i) => /* @__PURE__ */ jsx("li", {
									className: "chip",
									children: i
								}, i))
							})] }, g.group))
						})
					}),
					/* @__PURE__ */ jsxs(Section, {
						id: "work",
						eyebrow: "Professional work",
						title: "Selected client work",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "space-y-10",
								children: featuredJobs.map((j, i) => /* @__PURE__ */ jsx(FeaturedJob, {
									job: j,
									reverse: i % 2 === 1
								}, j.id))
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-20 font-display text-2xl font-semibold",
								children: "More clients"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
								children: otherJobs.map((j) => {
									const inner = /* @__PURE__ */ jsxs(Fragment, { children: [
										/* @__PURE__ */ jsx("img", {
											src: j.img,
											alt: j.name,
											loading: "lazy",
											className: "aspect-[4/3] w-full rounded-lg border border-border object-cover object-top transition group-hover:border-primary"
										}),
										/* @__PURE__ */ jsx("h4", {
											className: "mt-3 font-display font-medium",
											children: j.name
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-sm text-muted-foreground",
											children: j.desc
										})
									] });
									return j.url ? /* @__PURE__ */ jsx("a", {
										href: j.url,
										target: "_blank",
										rel: "noreferrer",
										className: "group",
										children: inner
									}, j.name) : /* @__PURE__ */ jsx("div", {
										className: "group",
										children: inner
									}, j.name);
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs(Section, {
						id: "projects",
						eyebrow: "Personal projects",
						title: "Things I've built lately",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "space-y-10",
								children: featuredProjects.map((project) => /* @__PURE__ */ jsx(FeaturedJob, { job: project }, project.id))
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-16 font-display text-2xl font-semibold",
								children: "More personal projects"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
								children: projects.map((p) => /* @__PURE__ */ jsxs("a", {
									href: p.url,
									target: "_blank",
									rel: "noreferrer",
									className: "card-lift group flex flex-col overflow-hidden rounded-xl border border-border bg-card",
									children: [/* @__PURE__ */ jsx("img", {
										src: p.img,
										alt: p.name,
										loading: "lazy",
										className: "aspect-[4/3] w-full object-cover object-top"
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex flex-1 flex-col p-5",
										children: [
											/* @__PURE__ */ jsx("h3", {
												className: "font-display font-semibold group-hover:text-primary",
												children: p.name
											}),
											/* @__PURE__ */ jsx("p", {
												className: "mt-1 flex-1 text-sm text-muted-foreground",
												children: p.desc
											}),
											/* @__PURE__ */ jsx("ul", {
												className: "mt-4 flex flex-wrap gap-1.5",
												children: p.stack.map((s) => /* @__PURE__ */ jsx("li", {
													className: "chip text-xs",
													children: s
												}, s))
											})
										]
									})]
								}, p.name))
							})
						]
					}),
					/* @__PURE__ */ jsx(Section, {
						id: "teaching",
						eyebrow: "Teaching & speaking",
						title: "Sharing what I know",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid gap-10 md:grid-cols-2",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground",
								children: "I teach interaction design at Portland State University. Here's a reel of student work."
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-6 aspect-video overflow-hidden rounded-xl border border-border",
								children: /* @__PURE__ */ jsx("iframe", {
									src: "https://player.vimeo.com/video/792109301",
									title: "Student work reel",
									className: "h-full w-full",
									allow: "fullscreen; picture-in-picture"
								})
							})] }), /* @__PURE__ */ jsxs("div", {
								className: "space-y-6",
								children: [talks.map((t) => /* @__PURE__ */ jsxs("figure", {
									className: "flex gap-5 rounded-xl border border-border bg-card p-4",
									children: [/* @__PURE__ */ jsx("img", {
										src: t.img,
										alt: t.title,
										loading: "lazy",
										className: "h-28 w-40 shrink-0 rounded-lg object-cover"
									}), /* @__PURE__ */ jsxs("figcaption", { children: [/* @__PURE__ */ jsx("p", {
										className: "font-display font-medium",
										children: t.title
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: t.venue
									})] })]
								}, t.title)), /* @__PURE__ */ jsx(RotatingQuote, {})]
							})]
						})
					}),
					/* @__PURE__ */ jsx(Section, {
						id: "writing",
						eyebrow: "Writing",
						title: "From my Substack",
						children: /* @__PURE__ */ jsx("div", {
							className: "grid gap-6 md:grid-cols-2",
							children: writing.map((w) => /* @__PURE__ */ jsxs("a", {
								href: w.url,
								target: "_blank",
								rel: "noreferrer",
								className: "card-lift group rounded-xl border border-border bg-card p-6",
								children: [
									/* @__PURE__ */ jsx("h3", {
										className: "font-display text-xl font-semibold group-hover:text-primary",
										children: w.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-muted-foreground",
										children: w.desc
									}),
									/* @__PURE__ */ jsx("span", {
										className: "mt-4 inline-block text-sm text-primary",
										children: "Read →"
									})
								]
							}, w.title))
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("footer", {
				id: "contact",
				className: "scroll-mt-24 border-t border-border bg-card/60",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-6xl px-6 py-20",
					children: [
						/* @__PURE__ */ jsxs("h2", {
							className: "font-display text-4xl font-semibold md:text-5xl",
							children: [
								"Let's make your releases ",
								/* @__PURE__ */ jsx("span", {
									className: "text-primary",
									children: "boring"
								}),
								"."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 max-w-xl text-muted-foreground",
							children: "Hiring for QA or SDET? I'd love to talk."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsx("a", {
								href: links.linkedin,
								target: "_blank",
								rel: "noreferrer",
								className: "btn-primary",
								children: "Message me on LinkedIn"
							}), /* @__PURE__ */ jsx("a", {
								href: links.resume,
								target: "_blank",
								rel: "noreferrer",
								className: "btn-ghost",
								children: "Resume"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-16 flex flex-wrap gap-6 border-t border-border pt-8 text-sm text-muted-foreground",
							children: [[
								["GitHub", links.github],
								["LinkedIn", links.linkedin],
								["Instagram", links.instagram],
								["Substack", links.substack],
								["Mystery Portal", links.portal]
							].map(([l, h]) => /* @__PURE__ */ jsx("a", {
								href: h,
								target: "_blank",
								rel: "noreferrer",
								className: "hover:text-primary",
								children: l
							}, l)), /* @__PURE__ */ jsxs("span", {
								className: "ml-auto",
								children: [
									"© ",
									(/* @__PURE__ */ new Date()).getFullYear(),
									" Alanna Risse"
								]
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
