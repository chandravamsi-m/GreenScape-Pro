# GreenScape Pro — HTML Template Development Blueprint

> **A Premium Landscaping & Garden Design HTML Template**
> Development Blueprint · Version 1.0

---

## Table of Contents

1. [Template Overview](#1-template-overview)
2. [Architecture Overview](#2-architecture-overview)
3. [Public Website Pages](#3-public-website-pages)
4. [Homepage Layouts](#4-homepage-layouts)
5. [Authentication Pages](#5-authentication-pages)
6. [User (Client) Dashboard Pages](#6-user-client-dashboard-pages)
7. [Admin Dashboard Pages](#7-admin-dashboard-pages)
8. [Navigation Structure](#8-navigation-structure)
9. [Component Library](#9-component-library)
10. [Feature Breakdown](#10-feature-breakdown)
11. [Folder Structure](#11-folder-structure)
12. [Responsive Design Strategy](#12-responsive-design-strategy)
13. [Animation & Interaction Ideas](#13-animation--interaction-ideas)
14. [SEO & Performance Strategy](#14-seo--performance-strategy)
15. [Development Notes](#15-development-notes)

---

## 1. Template Overview

| Field | Details |
|---|---|
| **Template Name** | GreenScape Pro |
| **Template Category** | Service-Based · Portfolio · Booking & Client Portal |
| **Target Audience** | Landscaping companies, garden design studios, outdoor renovation firms, horticultural contractors, seasonal maintenance services |
| **Template Purpose** | A full-stack HTML template that markets landscaping and garden design services to the public while providing a private client portal where homeowners and property managers can approve design proposals, schedule seasonal maintenance visits, track project progress in real time, and manage payments — all in one seamless experience. |
| **Tech Stack** | HTML5 · CSS3 · Vanilla JavaScript (ES6+) |
| **Dashboard Required** | Yes — Client Dashboard + Admin Dashboard |
| **Dark / Light Mode** | Yes |
| **RTL Support** | Yes |
| **Two Homepages** | Yes — Home 1 (Classic) · Home 2 (Premium) |

---

## 2. Architecture Overview

GreenScape Pro is split into two distinct layers that share a common design system (color tokens, typography, spacing scale, and component library) but operate independently in terms of layout and functionality.

### Layer 1 — Public Marketing Website

The public-facing website serves as the primary sales and discovery surface. Visitors explore services, browse the before-and-after portfolio, learn about seasonal offerings, and initiate contact or project inquiries. No authentication is required for any public page.

### Layer 2 — Dashboard System

The dashboard system is a gated environment accessed only after authentication. It is divided into two roles:

- **Client Dashboard** — An existing or new client logs in to view their active projects, approve or reject design proposals submitted by the landscaping team, view scheduled maintenance visits, track project milestones and timelines, download invoices, and make payments.
- **Admin Dashboard** — The business owner and internal team manage all client accounts, projects, design submissions, scheduling, payments, and marketing content from a centralised panel.

Both dashboard layers share the same side-navigation shell but display role-appropriate content. The top navigation bar (public) and footer are entirely absent from all authentication and dashboard pages.

---

## 3. Public Website Pages

### 3.1 Core Pages (Required for All Templates)

| # | Page | File | Purpose |
|---|---|---|---|
| 1 | Home 1 | `index.html` | Classic landing — hero, services snapshot, featured transformations, testimonials, CTA |
| 2 | Home 2 | `home-2.html` | Premium landing — full-bleed visual story, interactive before/after slider, seasonal highlights |
| 3 | About Us | `about.html` | Company story, founding philosophy, core values, team profiles, certifications |
| 4 | Services | `services.html` | Master services listing with icons, brief descriptions, and CTAs to individual service pages |
| 5 | Contact | `contact.html` | Contact form, embedded map, working hours, phone, email, social links |
| 6 | 404 | `404.html` | Custom error page with navigation options and a light-hearted garden illustration |
| 7 | Coming Soon | `coming-soon.html` | Pre-launch / maintenance page with countdown timer and email capture |

### 3.2 Template-Specific Pages (Based on Niche)

| # | Page | File | Purpose |
|---|---|---|---|
| 8 | Service Detail — Landscape Design | `service-landscape-design.html` | Full detail of landscape architecture and concept design service |
| 9 | Service Detail — Garden Maintenance | `service-garden-maintenance.html` | Recurring maintenance plans, service scope, frequency options |
| 10 | Service Detail — Seasonal Packages | `service-seasonal.html` | Spring planting, summer lawn care, autumn leaf management, winter preparation |
| 11 | Service Detail — Hardscaping & Structures | `service-hardscaping.html` | Patios, pathways, pergolas, retaining walls |
| 12 | Service Detail — Irrigation Systems | `service-irrigation.html` | Smart watering systems, drip irrigation, installation and maintenance |
| 13 | Portfolio / Transformations | `portfolio.html` | Filterable gallery of before-and-after project cards with categories |
| 14 | Portfolio Single / Project Detail | `portfolio-single.html` | Dedicated page for a single transformation — full story, image gallery, timeline, result |
| 15 | Seasonal Maintenance Hub | `seasonal.html` | Educational + sales page dedicated to the full seasonal calendar of care |
| 16 | Testimonials | `testimonials.html` | Full-page client testimonials with star ratings, project type tags, and location |
| 17 | Blog / Garden Tips | `blog.html` | Article listing grid — planting guides, garden trends, seasonal how-tos |
| 18 | Blog Post | `blog-single.html` | Single article page with author card, related posts, social share, comment placeholder |
| 19 | Pricing | `pricing.html` | Maintenance plan tiers (Basic, Standard, Premium) with feature comparison |
| 20 | Free Quote | `quote.html` | Multi-step project inquiry form — property type, services needed, preferred timeline, upload reference images |
| 21 | FAQ | `faq.html` | Accordion-based frequently asked questions — services, pricing, process, warranty |

---

## 4. Homepage Layouts

Both homepages use the same brand colours, typography, and component library. Only layout structure and content depth differ. Home 1 is the classic version; Home 2 is the premium, visually immersive version.

---

### Home 1 — Classic Layout

**Goal:** Clearly and efficiently communicate the brand's value proposition and drive visitors to explore services or request a quote.

| Order | Section | Description |
|---|---|---|
| 1 | **Navbar** | Logo left · Nav links centre · Dark/Light toggle + RTL icon + two CTAs (Primary: "Get Free Quote", Secondary: "Client Login") right |
| 2 | **Hero** | Full-width background image of a finished garden · Bold headline · One-line subheading · Two CTA buttons (Primary + Secondary) · Subtle scroll indicator |
| 3 | **Stats Bar** | 4 counters: Projects Completed · Years of Experience · Happy Clients · Award Wins — animated on scroll |
| 4 | **Services Overview** | 6-card grid with Lucide/Heroicon, service name, one-line description, and "Learn More" link per card |
| 5 | **Before & After Showcase** | 3 featured project cards with before/after image toggle, project name, and category tag |
| 6 | **Why Choose Us** | Left: text (3–4 USP bullet points with icons) · Right: supporting image |
| 7 | **Seasonal Services Banner** | Full-width coloured section showing the four seasonal services with icons — Spring / Summer / Autumn / Winter |
| 8 | **Process / How It Works** | 4-step horizontal timeline: Consultation → Design Proposal → Implementation → Handover |
| 9 | **Testimonials** | 3-card carousel/slider of client quotes with star ratings and project type tags |
| 10 | **Blog Preview** | Latest 3 articles in card format with thumbnail, category tag, date, and "Read More" link |
| 11 | **Call to Action Banner** | Full-width section with headline, subheading, and "Request a Free Quote" button |
| 12 | **Footer** | Logo · About blurb · Quick links · Services links · Contact details · Social icons · Copyright |

---

### Home 2 — Premium Layout

**Goal:** Deliver a rich, immersive experience that showcases visual transformation work and builds aspirational desire in the visitor.

| Order | Section | Description |
|---|---|---|
| 1 | **Navbar** | Same structure as Home 1 — brand consistency required |
| 2 | **Full-Screen Video/Image Hero** | Cinematic full-screen hero with an overlaid headline, animated subtitle typewriter effect, and a scroll-down arrow |
| 3 | **Brand Introduction Strip** | Short bold statement about the company philosophy across the full width |
| 4 | **Featured Transformation** | Large split-screen before-and-after interactive slider for a flagship project — horizontal drag handle |
| 5 | **Services Grid (Asymmetric)** | 2-column alternating layout — image left/right with service headline and paragraph for each of the 4 primary services |
| 6 | **Seasonal Calendar Section** | Visual 4-panel layout — one panel per season with background image tinted to match season theme, icon, and service list |
| 7 | **Project Statistics** | Animated number counters inside a dark-themed section with background texture |
| 8 | **Portfolio Masonry Grid** | 6-image masonry gallery with overlay hover showing project name and category — links to Portfolio page |
| 9 | **Client Success Stories** | Full-width testimonial section with large quote, client photo, name, and property type |
| 10 | **Pricing Teaser** | 3 maintenance plan cards (Basic / Standard / Premium) with "Popular" highlight on Standard |
| 11 | **Blog Feature** | Single featured article (large card, left) with 2 smaller article cards (right column) |
| 12 | **Get a Quote CTA** | Split section — left: image of a garden consultation · Right: quick 3-field inquiry form (name, email, service) |
| 13 | **Footer** | Same structure as Home 1 — brand consistency required |

---

## 5. Authentication Pages

> **Rule:** No navbar or footer on any authentication page. Dark/Light mode and RTL icons must appear at the top-right corner of the card/container. Login and Sign Up are separate standalone pages — no tab-toggle pattern.

### 5.1 Login — `login.html`

- Centred card layout with logo inside the card
- Email input field (vertical stacking)
- Password input field with eye icon for visibility toggle
- "Remember Me" checkbox and "Forgot Password?" link on the same line
- Primary CTA button (full width, matching input field width)
- Divider: "or continue with"
- Social login options: Google · Apple · Facebook (with official logos, no coloured icons)
- "Don't have an account? Sign Up" link at the bottom
- Dark/Light mode + RTL icons at top-right corner of the card

### 5.2 Sign Up — `signup.html`

- Centred card layout with logo inside the card
- Fields (vertical stacking): First Name · Last Name · Email Address · Phone Number · Password · Confirm Password
- No demo credentials shown anywhere on the page
- Eye icon on both password fields
- CTA button (full width, matching input field width): "Create My Account"
- Divider: "or sign up with"
- Social sign-up options: Google · Apple (with official logos)
- "Already have an account? Login" link at bottom
- Dark/Light mode + RTL icons at top-right corner

### 5.3 Forgot Password — `forgot-password.html`

- Centred card with logo
- Single Email Address input field
- Primary CTA: "Send Reset Link"
- "Back to Login" text link below the button
- Inline success state: replace form with a confirmation message and email illustration

### 5.4 Reset Password — `reset-password.html`

- Centred card with logo
- New Password field (with eye icon)
- Confirm New Password field (with eye icon)
- Primary CTA: "Reset Password"
- On success: auto-redirect to Login with a toast notification

---

## 6. User (Client) Dashboard Pages

> **Rule:** No public navbar or footer. Dashboard uses a fixed side navigation bar. Every page has a proper heading, welcome message on the overview, and relevant metrics/data displayed.

### 6.1 Dashboard Overview — `dashboard/index.html`

- Welcome message: "Welcome back, [Client Name]" with the current date
- Quick Stats row (4 cards): Active Projects · Pending Approvals · Upcoming Visits · Outstanding Invoices
- Active Projects summary table (top 3 most recent)
- Upcoming Maintenance Visits mini-calendar or list (next 2 visits)
- Recent Activity feed (last 5 actions — "Design submitted for approval", "Payment received", etc.)
- Quick Actions shortcuts: "Approve Design" · "Schedule Visit" · "Pay Invoice"

### 6.2 My Projects — `dashboard/projects.html`

- List/grid of all client projects with: Project Name · Service Type · Status badge (Planning / In Progress / Completed) · Start Date · Assigned Team
- Filter bar: All · Active · Completed · On Hold
- Each project card links to its dedicated Project Detail page

### 6.3 Project Detail — `dashboard/project-detail.html`

- Project header: name, type, assigned landscape designer, status badge
- Progress Timeline: visual milestone tracker — Consultation → Design Approval → Implementation → Final Walkthrough → Complete
- Design Documents section: attached PDFs / images of design proposals with Approve / Request Changes buttons
- Notes & Comments: threaded message thread between client and admin
- Site Photos: before, in-progress, and final photo uploads from the team
- Project Documents: contracts, scope of work, completion certificate

### 6.4 Design Approvals — `dashboard/approvals.html`

- List of all design proposals submitted by the team, sorted by newest first
- Each approval item shows: Project Name · Proposal Date · Design Version · Status (Pending / Approved / Revision Requested)
- Detail panel / modal: view design image, leave feedback, and submit "Approve" or "Request Changes" action
- History tab: all previously actioned approvals with timestamps

### 6.5 Maintenance Schedule — `dashboard/schedule.html`

- Monthly calendar view of all scheduled maintenance visits
- Each visit shows: Date · Time Slot · Service Type · Assigned Crew · Status (Scheduled / Completed / Cancelled)
- "Request Additional Visit" button → opens a booking form modal with preferred date/time selector and service type
- List view toggle (for mobile usability)
- Past Visits tab: history of all completed maintenance visits with service summary notes

### 6.6 Payments & Invoices — `dashboard/payments.html`

- Summary strip: Total Paid · Pending Amount · Next Payment Due
- Invoice table: Invoice # · Service/Project · Issue Date · Amount · Status (Paid / Pending / Overdue) · Action ("Pay Now" / "Download PDF")
- "Pay Now" opens a payment modal with amount pre-filled and a payment form (card details placeholder — Stripe UI placeholder)
- Payment History tab: all past transactions with receipt download link

### 6.7 Messages — `dashboard/messages.html`

- Conversation thread UI with the GreenScape Pro team
- Client can send text messages and attach files (images, documents)
- Unread message indicator in sidebar
- Each conversation is linked to an optional project context

### 6.8 Notifications — `dashboard/notifications.html`

- Chronological feed of all system notifications: "Your design proposal has been submitted", "Maintenance visit scheduled for [date]", "Invoice #004 is due"
- Mark as Read / Mark All as Read
- Notification type filter: All · Projects · Payments · Schedules · System

### 6.9 Profile — `dashboard/profile.html`

- Editable fields: Full Name · Email · Phone · Property Address · Profile Photo
- Change Password section (current, new, confirm — all with eye icons)
- Preferred Contact Method toggle: Email · Phone · WhatsApp
- Notification Preferences: checkboxes for email and SMS notifications per category

### 6.10 Settings — `dashboard/settings.html`

- Theme Preference: Light / Dark / System Default
- Language & Direction: Language selector + RTL/LTR toggle
- Connected Accounts: Google / Apple sign-in link/unlink
- Danger Zone: "Delete Account" option with confirmation dialog

---

## 7. Admin Dashboard Pages

> **Rule:** Same shell as Client Dashboard (side nav, no public header/footer) but with role-appropriate heading "Admin Dashboard" and access to all client and business data.

### 7.1 Admin Overview — `admin/index.html`

- Welcome message: "Welcome, [Admin Name]" with today's date and day
- Key Metrics row (6 cards): Total Clients · Active Projects · Pending Design Approvals · Maintenance Visits This Week · Revenue This Month · Pending Invoices
- Recent Projects table (latest 5) with quick-status badges
- Upcoming Maintenance Schedule (today + next 7 days) as a mini-list
- Recent Payments feed
- Quick Action buttons: "Add New Client" · "Create Project" · "Schedule Visit" · "Send Invoice"

### 7.2 Client Management — `admin/clients.html`

- Searchable, filterable table of all clients: Name · Email · Phone · Active Projects · Join Date · Status
- "Add New Client" button → inline form or slide-over panel
- Individual client view: profile info, their projects, payment history, messages, and notes
- Deactivate / Delete client with confirmation

### 7.3 Project Management — `admin/projects.html`

- Full project listing with filters: All · Active · Planning · Completed · On Hold
- Add New Project: Client selector · Project Name · Service Type · Start Date · Estimated End Date · Assign Team Member
- Project Detail Admin View: All data visible to the client plus internal admin notes, task checklist, cost tracking, and file management
- Bulk status update capability

### 7.4 Design Approval Management — `admin/design-approvals.html`

- List of all proposals submitted across all clients
- Status filter: All · Pending · Approved · Revision Requested
- "Submit New Design Proposal" → upload design files, add version notes, and select client + project
- When a client requests changes, a notification appears with their feedback visible inline

### 7.5 Maintenance Scheduling — `admin/scheduling.html`

- Full calendar view of all scheduled maintenance visits across all clients
- Create Visit: select client, project, service type, date, time, assigned crew
- Crew Assignment: dropdown of available team members with their schedule capacity
- View by: Day · Week · Month toggle
- Export schedule as a printable list

### 7.6 Team Management — `admin/team.html`

- Manage landscaping crew and staff: Name · Role · Contact · Assigned Projects · Availability
- Add / edit / deactivate team members
- View individual crew member's schedule

### 7.7 Portfolio Management — `admin/portfolio.html`

- Add / edit / delete transformation projects shown on the public portfolio page
- Upload before and after images per project
- Assign project category tag (Residential · Commercial · Garden Design · Hardscaping · Seasonal)
- Toggle visibility: Published / Draft

### 7.8 Service Management — `admin/services.html`

- Add / edit / remove services shown on the public website
- Set service icon, description, and pricing indicator
- Enable / disable services from public view

### 7.9 Blog / Content Management — `admin/blog.html`

- Create, edit, publish, or delete blog articles
- Rich text content area (no dependency — use a textarea with a formatting toolbar placeholder)
- Featured image upload · Category · Tags · Publish Date
- Draft / Published / Archived status

### 7.10 Invoices & Payments — `admin/payments.html`

- All invoices across all clients in a searchable table
- Create New Invoice: select client, line items (service + cost), due date, notes
- Mark invoice as Paid / Send Payment Reminder
- Revenue summary: This Month · Last Month · Year to Date
- Export invoices as CSV or PDF placeholder

### 7.11 Reports & Analytics — `admin/reports.html`

- Revenue Over Time: line chart by month (placeholder canvas/SVG)
- Services Breakdown: pie/donut chart of revenue per service type
- Client Acquisition: new clients per month bar chart
- Project Completion Rate: gauge/percentage metric
- Top Clients by revenue table
- Date range filter: Last 30 Days · Last 3 Months · Last 12 Months · Custom

### 7.12 Testimonials Management — `admin/testimonials.html`

- View, add, edit, or remove testimonials shown on the public website
- Each testimonial: client name, rating (1–5 stars), text, project type, date, photo
- Toggle: Published / Hidden

### 7.13 Admin Settings — `admin/settings.html`

- Business Info: Company name, logo, address, contact details, working hours
- Notification Settings: email triggers for new inquiries, payment received, design approved
- User Roles & Permissions: define what each admin-level user can access
- SEO Settings: meta title, meta description defaults for public pages
- System Preferences: timezone, date format, currency

---

## 8. Navigation Structure

### 8.1 Public Navbar

```
Logo (left)
|
Navigation Links (centre):
  Home ▾
    ├── Home 1 — Classic
    └── Home 2 — Premium
  Services ▾
    ├── Landscape Design
    ├── Garden Maintenance
    ├── Seasonal Packages
    ├── Hardscaping & Structures
    └── Irrigation Systems
  Portfolio
  Seasonal
  Blog
  About
  Contact
  FAQ
|
Controls (right):
  [Dark/Light Mode Icon]  [RTL Icon]  [Get Free Quote — Primary CTA]  [Client Login — Secondary CTA]
```

> **Rule:** Dashboard must be the last navigational link. It appears as "Client Login" CTA in the header. No more than two CTAs in the header. All icons for Dark Mode and RTL must be the same width and height.

---

### 8.2 Client Dashboard Sidebar

```
[Logo]
[Welcome: Client Name + Avatar]
─────────────────────────────
  🏠  Dashboard Overview
  📁  My Projects
  ✅  Design Approvals         [Badge: pending count]
  📅  Maintenance Schedule
  💳  Payments & Invoices
  💬  Messages                 [Badge: unread count]
  🔔  Notifications
─────────────────────────────
  👤  Profile
  ⚙️  Settings
─────────────────────────────
  🚪  Logout
```

---

### 8.3 Admin Dashboard Sidebar

```
[Logo]
[Welcome: Admin Name + Avatar]
─────────────────────────────
  📊  Admin Overview
  👥  Client Management
  📁  Project Management
  🎨  Design Approvals         [Badge: pending count]
  📅  Maintenance Scheduling
  👷  Team Management
─────────────────────────────
  🖼️  Portfolio Management
  🛠️  Service Management
  📝  Blog / Content
  💬  Messages                 [Badge: unread]
  🔔  Notifications
─────────────────────────────
  💳  Invoices & Payments
  📈  Reports & Analytics
  ⭐  Testimonials
─────────────────────────────
  ⚙️  Settings
  🚪  Logout
```

---

## 9. Component Library

All components must be built as reusable, self-contained HTML structures styled through shared CSS classes. No component should carry page-specific inline styles.

### 9.1 Global / Shared Components

| Component | Description |
|---|---|
| `Navbar` | Fixed top bar with logo, nav links (with dropdown), icon controls, and dual CTAs |
| `Footer` | 4-column layout: brand, quick links, services, contact + full-width copyright bar |
| `Hero Banner` | Full-width section with background image/video, headline, subheading, and CTA group |
| `Section Header` | Centred or left-aligned section title + subtitle + optional decorative underline |
| `Breadcrumb` | Accessible page trail for all inner pages |
| `CTA Banner` | Full-width coloured banner with headline and single button |
| `Toast Notification` | Slide-in success / error / warning messages (top-right corner) |
| `Modal / Dialog` | Centred overlay dialog for confirmations, forms, and image previews |
| `Loading Skeleton` | Skeleton placeholder matching the shape of card/table content |
| `404 Block` | Illustration + message + navigation links |
| `Cookie Consent Bar` | Bottom-fixed bar with Accept / Decline options |

### 9.2 Public Website Components

| Component | Description |
|---|---|
| `Service Card` | Icon + title + short description + CTA link — used in grids and listing pages |
| `Before & After Slider` | Side-by-side image with a draggable centre handle to reveal before/after |
| `Project Transformation Card` | Thumbnail pair (before/after) + project name + category tag + "View Project" link |
| `Testimonial Card` | Star rating + quote text + client name + property type tag + optional avatar |
| `Testimonial Carousel` | Auto-scrolling or arrow-navigated wrapper for multiple testimonial cards |
| `Seasonal Panel` | Season icon + name + service list — used in 4-panel seasonal section |
| `Process Step` | Numbered icon + step title + description — used in horizontal timeline |
| `Stat Counter` | Large number with label — animates from 0 to final value on scroll |
| `Blog Card` | Thumbnail + category tag + date + title + excerpt + "Read More" link |
| `Pricing Card` | Plan name + price + feature list + CTA (Primary for popular, Secondary for others) |
| `Team Member Card` | Photo + name + role + short bio + social icons |
| `Image Gallery Grid` | Masonry or uniform grid of images with lightbox-on-click |
| `Quote Form` | Multi-step form — step indicator + field group per step + progress bar |
| `Map Embed` | Google Maps API placeholder iframe with a styled container |
| `FAQ Accordion` | Question row that expands to reveal answer with smooth height animation |
| `Contact Form` | Name, email, phone, service type selector, message textarea, and submit button |

### 9.3 Dashboard Components

| Component | Description |
|---|---|
| `Dashboard Sidebar` | Fixed-position side nav with role-appropriate links, icons, notification badges, logout |
| `Dashboard Top Bar` | Page title on the left · Notification bell + avatar + role label on the right |
| `Stat Card` | Icon + metric label + value + optional delta/trend indicator (up/down arrow) |
| `Project Status Card` | Project name + service type + status badge + progress bar + CTA |
| `Project Progress Timeline` | Horizontal or vertical milestone steps with status indicators |
| `Data Table` | Sortable, filterable table with status badges, action buttons, and pagination |
| `Approval Item` | Design image thumbnail + proposal details + Approve / Request Changes buttons |
| `Calendar Widget` | Monthly calendar grid with visit/event indicators and day-click interaction |
| `Schedule Visit Modal` | Form modal: date picker + time slot selector + service type dropdown |
| `Invoice Row` | Invoice number + client + amount + date + status badge + action buttons |
| `Payment Modal` | Pre-filled invoice summary + card input placeholder (Stripe ready) |
| `Message Thread` | Chat-style thread with timestamps, sender labels, and file attachment display |
| `Notification Item` | Icon + message text + timestamp + "Mark as Read" action |
| `Activity Feed` | Chronological list of recent actions with icons and timestamps |
| `Form Panel` | Labelled form sections with consistent input styling for all admin create/edit forms |
| `Empty State` | Illustration + message + CTA for pages/sections with no data |
| `Chart Placeholder` | Styled canvas containers for line, bar, pie, and donut charts |
| `Confirmation Dialog` | Modal for destructive actions (delete/deactivate) with typed confirmation option |
| `Avatar Upload` | Profile image with overlay camera icon that triggers file input |
| `Badge / Status Pill` | Colour-coded status labels: Active · Pending · Completed · Overdue · Cancelled |

---

## 10. Feature Breakdown

### 10.1 Before & After Transformation Showcase

- Interactive drag-handle slider to reveal before and after states of a garden project
- Works on both desktop (mouse drag) and mobile (touch drag)
- Used on Home 2 hero, Portfolio page, and individual Project Detail pages
- Labels: "Before" · "After" positioned on respective halves

### 10.2 Portfolio Filtering System

- Filter bar with category buttons: All · Residential · Commercial · Hardscaping · Seasonal · Garden Design
- JavaScript-driven show/hide of cards matching the selected filter
- Smooth CSS transition on filter change
- Each project card links to a dedicated project page with full transformation story

### 10.3 Seasonal Maintenance Services Display

- Visually differentiated panels for Spring, Summer, Autumn, and Winter
- Each panel lists the specific services applicable to that season
- Optional: a "Book This Season's Service" CTA that routes to the Quote form with the seasonal service pre-selected

### 10.4 Multi-Step Quote Request Form

- Step 1: Property details (type, size, address)
- Step 2: Services required (checkbox group with icons)
- Step 3: Preferred timeline and budget range
- Step 4: Upload reference images + final contact details
- Progress bar and step counter visible throughout
- Client-side validation on each step before advancing
- Final submission confirmation with reference number

### 10.5 Client Design Approval System

- Admin uploads design files (PDFs, images) against a project in the admin dashboard
- Client receives a notification and sees "Pending Approval" badge in their dashboard
- Client can preview the design, leave a comment, and choose to Approve or Request Changes
- Admin is notified of the client's decision with their feedback
- Version history: previous design rounds are archived and accessible

### 10.6 Maintenance Visit Scheduling

- Client-facing calendar view showing all upcoming scheduled visits
- Client can request additional or rescheduled visits via a date/time picker form
- Admin sees all requests and confirms or suggests alternatives
- Confirmed visits trigger a notification to the client

### 10.7 Project Progress Tracker

- Visual milestone timeline with 5 stages: Consultation → Design Approval → Procurement → Implementation → Handover
- Each milestone has a status: Not Started (grey) · In Progress (primary colour) · Completed (green)
- Admin updates milestone status from the project management panel
- Client sees live updates in their dashboard

### 10.8 Invoice & Payment Management

- Admin generates invoices with itemised services and totals
- Client receives notification and can view the invoice in their dashboard
- "Pay Now" triggers a payment modal with Stripe-ready input fields (placeholder)
- After payment is marked, invoice status updates to "Paid" and a receipt is available to download

### 10.9 Blog / Garden Tips System

- Public article listing with category filter and search bar
- Each article has a featured image, estimated read time, author card, and social share placeholder
- Related articles shown at the bottom of each post
- Admin can create, edit, publish, and archive articles from the admin content panel

### 10.10 Testimonial Management

- Public testimonials page with star ratings, client quotes, and project type tags
- Admin can add, edit, hide, or delete testimonials from the admin panel
- Featured testimonials appear on the homepage carousel

### 10.11 Dark / Light Mode

- Toggle button in the public navbar (icon-only, no text label)
- Toggle in dashboard top bar (same icon set)
- System preference detection on page load using `prefers-color-scheme` media query
- Mode persisted in `localStorage` across sessions
- CSS custom properties switch between light and dark token sets on the `<html>` element

### 10.12 RTL Layout Support

- RTL toggle button in public navbar and dashboard (same width and height as Dark/Light icon)
- Setting `dir="rtl"` on the `<html>` element triggers a separate `rtl.css` stylesheet
- All flex/grid layouts, margin/padding, text alignment, and icon positions reverse correctly
- Tested for: Arabic, Hebrew text direction requirements

### 10.13 Contact Form with Validation

- Client-side validation: required fields, email format, phone number format
- Inline error messages below each field (not alerts)
- Submit button disabled until all required fields pass validation
- Formspree / Netlify Forms placeholder endpoint in the action attribute
- Success state: form replaced by a thank-you message with a reference number

---

## 11. Folder Structure

```
greenscape-pro/
│
├── assets/
│   ├── css/
│   │   ├── style.css              # Master styles — variables, reset, global
│   │   ├── components.css         # All reusable component styles
│   │   ├── dashboard.css          # Dashboard-specific layout and component styles
│   │   ├── dark-mode.css          # Dark mode overrides using CSS custom properties
│   │   └── rtl.css                # RTL layout overrides
│   │
│   ├── js/
│   │   ├── main.js                # Global: navbar, dark/light mode, RTL toggle, scroll effects
│   │   ├── before-after.js        # Before & After image slider logic
│   │   ├── portfolio-filter.js    # Portfolio category filtering
│   │   ├── counter.js             # Animated stat counter on scroll
│   │   ├── form-validation.js     # Generic form validation and multi-step form logic
│   │   ├── calendar.js            # Maintenance schedule calendar widget
│   │   ├── dashboard.js           # Dashboard sidebar toggle, notifications, approval actions
│   │   ├── charts.js              # Admin analytics chart renderers (canvas-based, no library)
│   │   └── plugins/
│   │       ├── lightbox.js        # Lightweight image lightbox (no external dependency)
│   │       └── carousel.js        # Testimonial/image carousel (custom, no library)
│   │
│   ├── images/
│   │   ├── hero/                  # Homepage hero images (WebP + JPEG fallback)
│   │   ├── portfolio/             # Before/after project image pairs
│   │   │   ├── project-01/
│   │   │   │   ├── before.webp
│   │   │   │   └── after.webp
│   │   │   └── project-02/ ...
│   │   ├── services/              # One image per service page
│   │   ├── seasonal/              # One image per season panel
│   │   ├── team/                  # Team member profile photos
│   │   ├── blog/                  # Article featured images
│   │   ├── icons/                 # Any custom SVG icon assets
│   │   └── placeholders/          # Placeholder images for demo content
│   │
│   └── fonts/                     # Self-hosted Google Font files (optional fallback)
│
├── pages/
│   │
│   ├── # — Public Marketing Pages
│   ├── index.html                 # Home 1 — Classic
│   ├── home-2.html                # Home 2 — Premium
│   ├── about.html
│   ├── services.html
│   ├── service-landscape-design.html
│   ├── service-garden-maintenance.html
│   ├── service-seasonal.html
│   ├── service-hardscaping.html
│   ├── service-irrigation.html
│   ├── portfolio.html
│   ├── portfolio-single.html
│   ├── seasonal.html
│   ├── testimonials.html
│   ├── blog.html
│   ├── blog-single.html
│   ├── pricing.html
│   ├── quote.html
│   ├── faq.html
│   ├── contact.html
│   ├── 404.html
│   └── coming-soon.html
│
├── auth/
│   ├── login.html
│   ├── signup.html
│   ├── forgot-password.html
│   └── reset-password.html
│
├── dashboard/                     # Client Dashboard
│   ├── index.html                 # Overview
│   ├── projects.html
│   ├── project-detail.html
│   ├── approvals.html
│   ├── schedule.html
│   ├── payments.html
│   ├── messages.html
│   ├── notifications.html
│   ├── profile.html
│   └── settings.html
│
├── admin/                         # Admin Dashboard
│   ├── index.html                 # Admin Overview
│   ├── clients.html
│   ├── projects.html
│   ├── design-approvals.html
│   ├── scheduling.html
│   ├── team.html
│   ├── portfolio.html
│   ├── services.html
│   ├── blog.html
│   ├── messages.html
│   ├── notifications.html
│   ├── payments.html
│   ├── reports.html
│   ├── testimonials.html
│   └── settings.html
│
├── documentation/
│   ├── installation.md
│   ├── customization.md
│   ├── page-structure.md
│   ├── credits.md
│   └── changelog.md
│
├── sitemap.xml
├── robots.txt
└── README.md
```

---

## 12. Responsive Design Strategy

The template follows a **mobile-first approach**. Base styles target mobile screens, with progressive enhancements applied via `min-width` media queries.

### Breakpoints

```css
/* Mobile  */  @media (min-width: 0px)    — default, base styles
/* Tablet  */  @media (min-width: 640px)  — 2-column layouts activate
/* Desktop */  @media (min-width: 1024px) — full multi-column layouts, sticky sidebar
/* Large   */  @media (min-width: 1280px) — max-width containers, wider spacing
```

### Behaviour by Device

| Element | Mobile | Tablet | Desktop |
|---|---|---|---|
| Navbar | Hamburger menu, full-screen slide-over drawer | Hamburger or condensed links | Full horizontal nav with all links + CTAs |
| Hero | Single column, stacked image and text | Side-by-side if image is below text | Full-bleed with overlay text |
| Services Grid | 1 column | 2 columns | 3 columns |
| Before/After Slider | Touch-drag enabled, full width | Full width | Constrained to content area width |
| Portfolio Grid | 1 column | 2 columns | 3–4 column masonry |
| Stats Bar | 2 stats per row, 2 rows | 4 across one row | 4 across one row with more spacing |
| Seasonal Panels | Stacked vertically | 2×2 grid | 4 across in one row |
| Blog Cards | 1 column | 2 columns | 3 columns |
| Dashboard Sidebar | Hidden, toggled by burger button, slides over content | Icon-only collapsed sidebar | Full expanded sidebar always visible |
| Dashboard Stat Cards | 2 per row | 2–3 per row | 4 per row |
| Data Tables | Horizontal scroll container | Horizontal scroll or simplified view | Full table display |
| Calendar | Compact month view | Standard month view | Month view with visit detail panel |
| Auth Cards | Full viewport width with padding | Centred card, max-width 480px | Centred card, max-width 480px |
| Footer | Stacked single column | 2 columns | 4 columns |

### Mobile-Specific Rules

- Minimum touch target size for all interactive elements: **44px × 44px**
- Reduced animations (honour `prefers-reduced-motion` media query)
- No hover-dependent interactions on portfolio/service cards — use tap states instead
- Hamburger menu closes on any navigation link click or outside-click
- Tables with many columns collapse into a card-based stacked layout

---

## 13. Animation & Interaction Ideas

All animations must be **subtle, purposeful, and performant**. Use CSS transitions and `IntersectionObserver`-triggered class additions wherever possible. Avoid heavy JavaScript animation libraries.

### 13.1 Public Website Animations

| Element | Animation |
|---|---|
| Navbar on scroll | Add a white/dark background and box-shadow after 80px scroll |
| Hero headline | Fade-in + slide-up on page load (150ms delay) |
| Hero subheading | Fade-in + slide-up with 300ms delay after headline |
| Hero CTA buttons | Fade-in with 450ms delay |
| Home 2 hero subtitle | Typewriter effect cycling through "Garden Design · Seasonal Maintenance · Landscape Architecture" |
| Stat counters | Count up from 0 to final value when the section enters the viewport |
| Service cards | Lift (translate-Y: -4px) + subtle box-shadow deepening on hover |
| Portfolio cards | Overlay fades in on hover with project name and "View Project" label |
| Before/After slider | Smooth CSS transition on drag handle position change |
| Testimonial carousel | Fade or slide transition between cards (auto-play with 5s interval, pause on hover) |
| FAQ accordion | Smooth max-height expansion/collapse with ease-in-out timing |
| Blog cards | Subtle image zoom (scale: 1.03) inside its container on card hover |
| CTA buttons (global) | Background colour transition + scale(1.02) on hover |
| Seasonal panels | Background tint overlay deepens on hover |
| Section entry | Fade-in + translate-Y(20px → 0) when scrolled into view using IntersectionObserver |

### 13.2 Dashboard Animations

| Element | Animation |
|---|---|
| Dashboard sidebar | Slide-in from the left on mobile, smooth expand/collapse on desktop |
| Stat cards | Count-up animation on dashboard load |
| Project progress timeline | Steps animate in left-to-right in sequence on page load |
| Status badge changes | Colour cross-fade on status update (admin actions) |
| Approval action buttons | Approval button triggers a green pulse; Request Changes triggers an amber pulse |
| Toast notifications | Slide in from the top-right, auto-dismiss after 4 seconds with a fade-out |
| Calendar visit dots | Pulse animation on dates with upcoming visits |
| Modal open/close | Scale from 0.95 to 1.0 with fade-in; reverse on close |
| Table row hover | Background colour transition to highlight the active row |
| Chart render | Bar and line charts animate in from baseline on page load |
| Sidebar active link | Smooth background highlight transition when navigating between pages |
| Empty state illustration | Gentle floating animation (translate-Y -6px → 0, looping) |

---

## 14. SEO & Performance Strategy

### 14.1 On-Page SEO

| Element | Requirement |
|---|---|
| Title Tags | Unique per page, max 60 characters. Format: `[Page Topic] — GreenScape Pro` |
| Meta Descriptions | Unique per page, 150–160 characters, include primary keyword and location |
| H1 Tags | Exactly one per page, must contain the page's primary keyword |
| Heading Hierarchy | H1 → H2 → H3 — never skip levels |
| Image Alt Text | All `<img>` tags must have descriptive alt attributes — describe what the image shows |
| Image Format | Provide WebP versions of all images with JPEG fallbacks via `<picture>` element |
| Internal Linking | Service pages link to relevant portfolio projects; blog posts link to related service pages |
| Canonical Tags | `<link rel="canonical">` on every page to prevent duplicate content |
| Open Graph Tags | `og:title`, `og:description`, `og:image`, `og:url` on all public pages |
| Twitter Card Tags | `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` |
| JSON-LD Structured Data | LocalBusiness schema on homepage and contact page |
| XML Sitemap | `sitemap.xml` at root — lists all public pages with `<lastmod>` and `<priority>` |
| robots.txt | Allow all public pages; disallow `/dashboard/`, `/admin/`, `/auth/` |

### 14.2 Performance Targets

| Metric | Target |
|---|---|
| PageSpeed Score (Mobile) | 90+ |
| PageSpeed Score (Desktop) | 95+ |
| Largest Contentful Paint (LCP) | < 2.5 seconds |
| First Input Delay (FID) | < 100ms |
| Cumulative Layout Shift (CLS) | < 0.1 |

### 14.3 Performance Implementation

- **Image Optimisation:** All images exported in WebP with JPEG fallback. Use `width` and `height` attributes on all `<img>` tags to prevent layout shift. Use `loading="lazy"` on all images below the fold.
- **Hero Image:** Hero images must be preloaded via `<link rel="preload">` in the `<head>` to ensure LCP is met.
- **CSS:** Critical styles inlined in `<head>`. Non-critical styles loaded with `media="print"` and `onload` swap technique. Production version to be minified.
- **JavaScript:** All scripts use `defer` attribute. No render-blocking scripts in `<head>`. Production version to be minified and concatenated where possible.
- **Fonts:** Google Fonts loaded with `display=swap`. Only load the 2–3 font weights actually used in the design. Provide `font-display: swap` fallback.
- **No Unused Plugins:** Keep external JavaScript dependencies to a minimum. All carousels and lightboxes should be custom-built, not library-dependent.
- **Reduce Animations on Mobile:** Use `@media (prefers-reduced-motion: reduce)` to disable all animations for users who opt out.

---

## 15. Development Notes

### 15.1 CSS Custom Properties (Design Tokens)

Define all design decisions as CSS variables on the `:root` selector. This is the single source of truth for the entire template's visual identity.

```css
/* ── Colour Tokens (Light Mode defaults) ── */
--color-primary:        #2D6A4F;  /* Deep Forest Green */
--color-primary-hover:  #1B4332;
--color-secondary:      #B7832A;  /* Warm Amber — earthy accent */
--color-secondary-hover:#8B6320;
--color-bg:             #FFFFFF;
--color-surface:        #F4F7F4;  /* Light sage tint */
--color-text-primary:   #1A1A1A;
--color-text-secondary: #4A4A4A;
--color-border:         #D9E3D9;

/* ── Colour Tokens (Dark Mode overrides — applied on html[data-theme="dark"]) ── */
--color-bg:             #0F1610;  /* Very dark green-black */
--color-surface:        #1A2B1E;
--color-text-primary:   #F0F5F0;
--color-text-secondary: #A8C0A8;
--color-border:         #2E4033;

/* ── Typography ── */
--font-heading: 'Playfair Display', Georgia, serif;  /* Elegant, nature-inspired */
--font-body:    'Inter', system-ui, sans-serif;       /* Clean and readable */

/* ── Spacing Scale (8px base) ── */
--space-1: 0.5rem;   /* 8px  */
--space-2: 1rem;     /* 16px */
--space-3: 1.5rem;   /* 24px */
--space-4: 2rem;     /* 32px */
--space-6: 3rem;     /* 48px */
--space-8: 4rem;     /* 64px */
--space-12: 6rem;    /* 96px */

/* ── Radius ── */
--radius-sm:  4px;
--radius-md:  8px;
--radius-lg:  16px;
--radius-full: 9999px;

/* ── Shadows ── */
--shadow-sm:  0 1px 3px rgba(0,0,0,.08);
--shadow-md:  0 4px 12px rgba(0,0,0,.1);
--shadow-lg:  0 8px 24px rgba(0,0,0,.12);
```

### 15.2 Dark Mode Implementation

```javascript
// On page load — detect system preference and apply saved preference
const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = savedTheme || (systemDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', theme);

// Toggle function
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}
```

### 15.3 RTL Implementation

```javascript
// Toggle RTL direction
function toggleRTL() {
  const current = document.documentElement.getAttribute('dir');
  const next = current === 'rtl' ? 'ltr' : 'rtl';
  document.documentElement.setAttribute('dir', next);
  localStorage.setItem('dir', next);
  // Dynamically toggle rtl.css link
  document.getElementById('rtl-stylesheet').disabled = (next === 'ltr');
}
```

The `rtl.css` file overrides only the properties that change in RTL: `text-align`, `flex-direction`, `margin-left/right`, `padding-left/right`, `left/right` positions, and `border-radius` for directional elements.

### 15.4 Before & After Slider

The slider uses a single container with two images absolutely positioned, and a clip-path or width constraint on the top image that responds to a draggable handle. This is a pure CSS + Vanilla JS implementation — no external plugin required. Ensure both images have identical dimensions. Use `touch-action: none` on the handle for smooth mobile dragging.

### 15.5 Semantic HTML Conventions

- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` on every page
- Every `<section>` must have an `aria-labelledby` pointing to its heading
- All interactive elements must be reachable via keyboard (`Tab`, `Enter`, `Space`)
- Modals must trap focus and restore it on close — use `aria-modal="true"` and `role="dialog"`
- All icons used decoratively: `aria-hidden="true"`. Icons conveying meaning: add `aria-label`
- Form inputs must have associated `<label>` elements — never use `placeholder` as the only label

### 15.6 Form Integration Placeholders

- Contact Form: `<form action="https://formspree.io/f/REPLACE_WITH_FORM_ID" method="POST">`
- Newsletter: Mailchimp embed `action` URL placeholder in footer form
- Payment: Stripe Elements placeholder `<div id="stripe-card-element">` with a Stripe.js `<script>` tag stub
- Maps: `<iframe src="https://maps.googleapis.com/maps/api/js?key=REPLACE_WITH_API_KEY">` placeholder

### 15.7 Placeholder Content Guidelines

- Use realistic landscaping company name, address, and phone number for demo content
- Portfolio projects must use unique before/after image pairs — no repeated images across sections
- Testimonials must reference specific project types ("Our back garden redesign", "Seasonal maintenance plan")
- Do not use `Lorem Ipsum` — write contextual placeholder copy relevant to landscaping
- Demo client names in the dashboard: use first name + last initial only

### 15.8 Code Quality Rules

- HTML files must pass W3C Validator with zero errors
- CSS: No `!important` unless overriding a third-party style. Use specificity correctly
- JavaScript: `'use strict'` in all JS files. No `var` — use `const` and `let`. No `console.log` in production
- No inline `style=""` attributes on any element — all styles via CSS classes
- Comment every major section in HTML (`<!-- ===== SECTION: SERVICES ===== -->`), every function in JS, and every block in CSS
- All TODO customisation points marked with `/* TODO: Replace with client branding */` in CSS and `<!-- TODO: Replace image src -->` in HTML

### 15.9 Pre-Submission Quality Checklist

- [ ] All 40+ pages validate with W3C HTML Validator
- [ ] No broken internal links — test with a link checker
- [ ] Responsive layout verified at 375px, 640px, 768px, 1024px, 1280px, 1440px
- [ ] Cross-browser tested: Chrome, Firefox, Safari, Edge (latest versions)
- [ ] Dark Mode toggle works on every single page
- [ ] Light Mode is the default; system preference detection works on first visit
- [ ] RTL layout verified with Arabic placeholder text — all elements reverse correctly
- [ ] Before/After slider works on both desktop mouse drag and mobile touch drag
- [ ] Portfolio filter works without page reload
- [ ] Multi-step quote form validates each step before allowing advancement
- [ ] All forms show correct error states and success states
- [ ] Dashboard sidebar collapses correctly on mobile and expands on desktop
- [ ] All stat counters animate only once per page visit (not on every scroll past)
- [ ] Authentication pages have no navbar or footer
- [ ] Dashboard pages have no public navbar or footer
- [ ] Pricing cards: "Popular" plan uses Primary button, others use Secondary button
- [ ] Dashboard heading reads "Client Dashboard" or "Admin Dashboard" appropriately
- [ ] All images have `alt` text, `width`, `height` attributes, and WebP format
- [ ] PageSpeed Insights score of 90+ on mobile before handover
- [ ] Keyboard navigation tested — all interactive elements reachable and operable
- [ ] `sitemap.xml` lists all public pages with correct URLs
- [ ] `robots.txt` disallows `/dashboard/`, `/admin/`, `/auth/`
- [ ] Documentation folder contains all 5 required guides
- [ ] All third-party resources credited in `credits.md`
- [ ] `changelog.md` reflects the current version (1.0.0) with build date

---

*This README.md serves as the authoritative development blueprint for the GreenScape Pro HTML template. All developers and AI coding tools (Cursor, Windsurf, etc.) should reference this document before writing any HTML, CSS, or JavaScript. Do not deviate from the architecture, component conventions, or design guidelines without explicit approval.*

---
