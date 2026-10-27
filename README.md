# Alanna's Work Portfolio Site
This repo is the source for my portfolio at [portfolio.alannarisse.com](https://portfolio.alannarisse.com). It covers places I've worked, as a developer, QA Engineer, or freelance web designer/developer.

## About Me
I started my journey in my late teens as a self-taught designer. I soon realized that engineering and helping people make great products was where my passions lie. There I began my software journey as a QA Engineer, Team Lead, and Supervisor for Multimedia products and audio services. I moved into web development in 1999 and have had my paws in code ever since.

- I've worked at a gazillion startups, small companies, large ones, and everything in between. 
- I naturally look at the big picture and find solutions holistically rather than symptomatically. 
- I'm a mom of a 16 year old, and I pursued my masters degree when she was still in diapers. 
- I've taught for 8 years at Portland State in their graphic design program. 
- I taught full stack development and UX/UI design at a bootcamp called Thinkful. 
- I've poured wine at Oregon wineries, I've been a student accounts clerk at my alma matter. 
- I've helped realtors organize their work using Monday.com. 
- I have a [YouTube channel](https://www.youtube.com/@Alannarisse) with tutorial videos on git, html, css, javascript, figma, and more.

## Build with help from Lovable and Codex
This project was originally designed with [Lovable](https://lovable.dev) and modified with support from Codex. It's a 1 page react site that I host on Dreamhost.


## Development

To work locally, install Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## DreamHost shared hosting

This project uses TanStack Start. Its default build targets a server runtime,
so `npm run build` is not the static upload build. The separate DreamHost
configuration renders the page to HTML at build time, using TanStack Start's
[static prerendering](https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering).

```sh
npm run build:dreamhost
```

Upload the **contents of `dist/client/`** to the domain's configured web directory
on DreamHost using SFTP. The uploaded directory should contain:

```text
index.html
assets/
favicon.ico
robots.txt
```

The server bundle is used locally to generate the HTML; no Node.js process is needed on DreamHost. Rebuild and upload the client files whenever the site changes.

This configuration assumes hosting at the root of a domain or subdomain, rather
than a subdirectory. The current site has one page with section anchors, so no
SPA rewrite rule is needed. New routes must also be pre-rendered; server functions
and API routes would require a separate backend.

Images and fonts live in `public/assets/` and are copied into `dist/client/assets/`
when building. Add new static assets under `public/` and reference them using
root-relative paths (for example, `/assets/design/new-project.png`). Do not edit
files directly in `dist/`, since rebuilding replaces them.

The resume link points to `https://alannarisse.com/resume/`. The video remains
an external Vimeo embed.
