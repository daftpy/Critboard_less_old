# Critboard

**Introduction**

Critboard is web app that allows streamers to simplify the process of providing creative feedback for their audience.

**Function**

Users can open feedback requests, free or paid (if Stripe integration is configured). These feedback requests can then be turned into either File or Link submissions.

Admins can then view these submissions in a streamlined admin interface and provide a constructive critique in return.

**Goals**

This web app is targeted towards streamers who need a better solution for connecting with their creative audience than digging through piles of emails.

# Stack


- Django (DRF)
- Next.js
- PostgreSQL
- Docker

# Testing


- Jest
- Playwright

```bash
npm run test # Jest
npm run test:e2e # Playwright
```

# Deployment

**Frontend**

It is recommended that the frontend be deployed on a service such as Vercel, Netlify, or Render.

**Backend**

It is recommended you use Docker to deploy the backend on a vps through a service such as Digital Ocean, Linode, or Vultr.


```bash
docker-compose up -d --build
```