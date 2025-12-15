# 🐳 Docker Production Mastery - Complete Guide

<div align="center">

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Production-Ready Docker Guide with Interactive Learning**

[🚀 Live Demo](#) • [📚 Documentation](#) • [🎯 Quick Start](#quick-start)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Docker Concepts](#-docker-concepts-covered)
  - [ENTRYPOINT vs CMD](#1-entrypoint-vs-cmd)
  - [Multi-Stage Builds](#2-multi-stage-builds)
  - [Security Best Practices](#3-security-best-practices)
  - [Root vs Non-Root Users](#4-root-vs-non-root-users)
  - [Nginx Reverse Proxy](#5-nginx-reverse-proxy)
  - [Production-Ready Dockerfile](#6-production-ready-dockerfile)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Deployment](#-deployment)
- [Interview Questions](#-interview-questions--answers)
- [Best Practices](#-docker-best-practices)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)

---

## 🎯 Overview

**Docker Production Mastery** is a comprehensive, interactive guide designed to teach you everything you need to know about Docker in production environments. This project combines theory with hands-on examples, making it perfect for both learning and as a quick reference guide.

### What Makes This Special?

- ✨ **Interactive Learning**: Beautiful UI with tabbed navigation
- 📚 **Comprehensive Content**: 7 major Docker topics covered in-depth
- 💻 **Two Versions**: React app + Standalone HTML (no dependencies)
- 🎨 **Modern Design**: Glass-morphism UI with smooth animations
- 📱 **Fully Responsive**: Works on mobile, tablet, and desktop
- 🚀 **Production-Ready**: Real-world examples you can use immediately
- 💡 **Interview Prep**: Common interview questions with detailed answers

---

## ✨ Features

### 🎓 Educational Content

- **Step-by-step explanations** of complex Docker concepts
- **Visual diagrams** showing architecture and data flow
- **Code examples** with syntax highlighting
- **Best practices** highlighted throughout
- **Common pitfalls** and how to avoid them

### 💻 Technical Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **No Dependencies Required**: Standalone HTML version available
- **Fast Performance**: Optimized build with code splitting
- **Accessibility**: Keyboard navigation and screen reader support
- **Dark/Light Mode**: Automatic based on system preference

### 🎨 Design Features

- **Glass-morphism UI**: Modern, beautiful interface
- **Smooth Animations**: Fade-ins, hover effects, transitions
- **Color-coded Sections**: Different colors for tips, warnings, errors
- **Syntax Highlighting**: Code blocks with language labels
- **Responsive Grid**: Adapts to all screen sizes

---

## 🚀 Quick Start

### Option 1: React Application

```bash
# Clone the repository
git clone https://github.com/yourusername/docker-production-mastery.git

# Navigate to project directory
cd docker-production-mastery

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost:5173
```

### Option 2: Standalone HTML

Simply open `standalone-index.html` in any modern web browser. No installation, no dependencies, no build step required!

```bash
# Just open the file
open standalone-index.html  # macOS
xdg-open standalone-index.html  # Linux
start standalone-index.html  # Windows
```

---

## 🐳 Docker Concepts Covered

### 1. ENTRYPOINT vs CMD

**Understanding the Difference**

The most confusing part of Docker for beginners! This section breaks down:

#### Core Concepts

- **ENTRYPOINT**: Defines the main executable (fixed command)
- **CMD**: Provides default arguments (overridable parameters)

#### Why Both?

```dockerfile
FROM ubuntu:22.04
RUN apt-get update && apt-get install -y curl

# ENTRYPOINT = the program to run
ENTRYPOINT ["curl"]

# CMD = default arguments to that program
CMD ["https://example.com"]
```

**Usage Examples:**

```bash
# Uses default CMD
docker run myimage
→ Executes: curl https://example.com

# Overrides CMD, keeps ENTRYPOINT
docker run myimage https://google.com
→ Executes: curl https://google.com

# Override everything
docker run --entrypoint /bin/bash myimage
→ Executes: /bin/bash
```

#### Real-World Benefits

1. **Flexibility**: Dev/staging/prod can use different arguments
2. **Kubernetes/Compose**: Override CMD via YAML without rebuilding image
3. **No Rebuild**: Change configuration without rebuilding the entire image

#### Best Practices

✅ **Always use exec form** (JSON array):
```dockerfile
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
```

❌ **Avoid shell form**:
```dockerfile
ENTRYPOINT nginx -g "daemon off;"
```

**Why?** Exec form:
- Doesn't spawn a shell
- Signals (SIGTERM) go directly to the process
- Faster startup
- Cleaner process tree

---

### 2. Multi-Stage Builds

**The Secret to Small, Secure Images**

#### The Problem

Single-stage Dockerfile includes EVERYTHING:
- Source code
- Development dependencies
- Build tools (compilers, npm, etc.)
- Runtime dependencies
- Final application

**Result:** ~800MB image! 🔴

#### The Solution

Multi-stage builds let you:
1. **Build** in one stage (with all tools)
2. **Copy** only artifacts to runtime stage
3. **Discard** everything else

**Result:** ~25MB image! 🟢 (97% smaller!)

#### Complete Example

```dockerfile
# ========================================
# STAGE 1: BUILD
# ========================================
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files (for caching)
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# ========================================
# STAGE 2: RUNTIME
# ========================================
FROM nginx:1.25-alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy our nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy ONLY the built files (not source, not node_modules!)
COPY --from=build /app/dist/public /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
```

#### Image Size Comparison

| Type | Size | Build Tools | Security |
|------|------|-------------|----------|
| Single-stage | ~800MB | ❌ Included | ❌ High risk |
| Multi-stage | ~25MB | ✅ Excluded | ✅ Low risk |

#### Benefits

1. **97% Smaller**: Faster deploys, less bandwidth
2. **More Secure**: No build tools = smaller attack surface
3. **Faster Pulls**: Less data to download
4. **Cleaner Images**: Only what you need to run

---

### 3. Security Best Practices

**The Three Pillars of Docker Security**

#### Pillar 1: Minimal Images

**Use the smallest base image possible:**

```dockerfile
# ❌ Bad: 1GB+
FROM ubuntu:latest

# ✅ Good: ~5MB
FROM alpine:3.18

# ✅ Better: ~2MB
FROM gcr.io/distroless/static

# ✅ Best: 0 bytes (for static binaries)
FROM scratch
```

#### Pillar 2: Non-Root Users

**Never run as root in production:**

```dockerfile
# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Switch to non-root user
USER appuser

# Now all commands run as appuser
CMD ["./myapp"]
```

#### Pillar 3: No Secrets in Images

**Critical Rule: Secrets MUST be injected at runtime!**

##### ❌ WRONG: Hardcoded in Image

```dockerfile
FROM node:alpine
ENV DATABASE_PASSWORD=super_secret_123
ENV API_KEY=abc123xyz
COPY . .
CMD ["node", "app.js"]
```

**Problem:** Anyone with the image can extract secrets!

```bash
# Attacker can do this:
docker history myimage
docker inspect myimage
```

##### ✅ CORRECT: Runtime Injection

```dockerfile
FROM node:alpine
COPY . .
# No secrets here!
CMD ["node", "app.js"]
```

```bash
# Inject at runtime
docker run \
  -e DATABASE_PASSWORD=super_secret_123 \
  -e API_KEY=abc123xyz \
  myimage
```

#### .dockerignore - Your Security Shield

**Without .dockerignore, ALL files go into the image!**

```dockerignore
# Dependencies
node_modules/
vendor/

# Environment files
.env
.env.local
.env.*.local

# Git
.git/
.gitignore

# Logs
*.log
logs/

# IDE
.vscode/
.idea/

# Build artifacts
dist/
build/

# Docker files themselves
Dockerfile
docker-compose.yml
.dockerignore
```

#### Vulnerability Scanning

**Always scan images before production:**

```bash
# Using Docker Scout
docker scout cves myimage:latest

# Using Trivy
trivy image myimage:latest

# Using Snyk
snyk container test myimage:latest
```

---

### 4. Root vs Non-Root Users

**Understanding Linux Users in Containers**

#### What's the Difference?

- **Root (UID 0)**: Superuser with unlimited permissions
- **Non-root (UID > 0)**: Limited user with restricted access

#### Security Impact

If an attacker exploits a process running as root:
- ❌ Full system access
- ❌ Can read/modify any file
- ❌ Can install malware
- ❌ Can access other containers

If an attacker exploits a process running as non-root:
- ✅ Limited to user permissions
- ✅ Cannot modify system files
- ✅ Cannot access other users' files
- ✅ Blast radius contained

#### Nginx Special Case

**Question:** "But Nginx runs as root, isn't that insecure?"

**Answer:** Only the master process runs as root, and it does only one thing!

```bash
$ docker exec mycontainer ps aux

USER       PID  COMMAND
root         1  nginx: master process    # Binds port 80 ONLY
nginx       29  nginx: worker process    # Handles ALL traffic
nginx       30  nginx: worker process    # Handles ALL traffic
nginx       31  nginx: worker process    # Handles ALL traffic
nginx       32  nginx: worker process    # Handles ALL traffic
```

**Process Breakdown:**

1. **Master Process (root)**:
   - Binds to port 80 (requires root)
   - Reads configuration
   - Spawns worker processes
   - Goes to sleep

2. **Worker Processes (nginx user)**:
   - Handle ALL incoming HTTP requests
   - Process ALL traffic
   - Run with limited permissions
   - 99.99% of actual work

**Key Insight:** Root opens the door, non-root does all the work!

#### Strict Non-Root Setup

For maximum security, use port 8080+ (doesn't require root):

```dockerfile
FROM nginx:alpine

# Create non-root user
RUN addgroup -S app && adduser -S app -G app

# Change nginx to listen on port 8080 (doesn't require root)
RUN sed -i 's/listen 80;/listen 8080;/' /etc/nginx/conf.d/default.conf

# Give permissions to non-root user
RUN chown -R app:app /var/cache/nginx /var/run /usr/share/nginx/html

# Switch to non-root user
USER app

EXPOSE 8080
```

Now EVERYTHING runs as non-root!

---

### 5. Nginx Reverse Proxy

**The Magic Router**

#### What is a Reverse Proxy?

A reverse proxy sits between clients and backend servers, forwarding requests:

```
┌─────────┐      ┌───────┐      ┌─────────┐
│ Browser │ ───> │ Nginx │ ───> │ Backend │
│         │ <─── │       │ <─── │   API   │
└─────────┘      └───────┘      └─────────┘
```

#### Why Use It?

**Problem:** You have:
- Frontend files (HTML, CSS, JS)
- Backend API (running on port 8000)

Browser can only connect to ONE address!

**Solution:** Nginx routes based on URL path:
- `/` → Frontend files
- `/api/*` → Backend API

#### Complete nginx.conf

```nginx
# Define backend servers
upstream backend_api {
    server 74.234.94.110:8000;
    # You can add more servers for load balancing:
    # server 74.234.94.111:8000;
    # server 74.234.94.112:8000;
}

server {
    listen 80;
    server_name myapp.com;

    root /usr/share/nginx/html;
    index index.html;

    # Frontend routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API proxy - THE MAGIC ✨
    location /api/ {
        proxy_pass http://backend_api;

        # Important headers
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}
```

#### Request Flow Example

1. **Browser requests:** `http://myapp.com/api/users`
2. **Nginx receives:** Request on port 80
3. **Nginx checks:** Path starts with `/api/`
4. **Nginx forwards:** To `backend_api` (74.234.94.110:8000)
5. **Backend processes:** Returns user data
6. **Nginx returns:** Data back to browser
7. **Browser thinks:** Response came from myapp.com (same origin!)

#### Benefits

| Feature | Without Proxy | With Proxy |
|---------|---------------|------------|
| CORS Issues | ❌ Yes | ✅ No |
| Backend IP | ❌ Exposed | ✅ Hidden |
| SSL Management | ❌ Multiple certs | ✅ One cert |
| Load Balancing | ❌ No | ✅ Yes |
| Caching | ❌ No | ✅ Yes |
| Rate Limiting | ❌ No | ✅ Yes |

#### Load Balancing Example

```nginx
upstream backend_api {
    # Round-robin (default)
    server backend1:8000;
    server backend2:8000;
    server backend3:8000;

    # With weights
    # server backend1:8000 weight=3;
    # server backend2:8000 weight=2;
    # server backend3:8000 weight=1;

    # Health checks
    # server backend1:8000 max_fails=3 fail_timeout=30s;
}
```

---

### 6. Production-Ready Dockerfile

**The Gold Standard Template**

#### Complete Production Dockerfile

```dockerfile
# ============================================
# STAGE 1: BUILD
# ============================================
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files first (for layer caching)
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# ============================================
# STAGE 2: RUNTIME
# ============================================
FROM nginx:1.25-alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from build stage
COPY --from=build /app/dist/public /usr/share/nginx/html

# Expose port
EXPOSE 80

# Use exec form for proper signal handling
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
```

#### Required Files

```
project-root/
├── Dockerfile
├── .dockerignore
├── nginx.conf
├── package.json
├── package-lock.json
└── src/
    └── (your source code)
```

#### Build Commands

```bash
# Build the image
docker build -t myapp:v1.0 .

# Tag for registry
docker tag myapp:v1.0 myregistry.com/myapp:v1.0

# Push to registry
docker push myregistry.com/myapp:v1.0

# Run locally for testing
docker run -d -p 80:80 --name myapp myapp:v1.0

# Test the container
curl http://localhost
curl http://localhost/api/health

# View logs
docker logs myapp

# Stop and remove
docker stop myapp
docker rm myapp
```

#### Production Checklist

Before deploying to production, verify:

- ✅ Multi-stage build (image < 50MB)
- ✅ .dockerignore present and comprehensive
- ✅ No secrets in Dockerfile or image
- ✅ ENTRYPOINT + CMD using exec form
- ✅ Non-root user for workers
- ✅ Reverse proxy configured (if needed)
- ✅ Health check endpoint available
- ✅ Graceful shutdown handling
- ✅ Vulnerability scan passed
- ✅ Version tag (not :latest)

#### Environment-Specific Configs

```bash
# Development
docker run -p 3000:80 \
  -e NODE_ENV=development \
  -e API_URL=http://localhost:8000 \
  myapp:v1.0

# Staging
docker run -p 80:80 \
  -e NODE_ENV=staging \
  -e API_URL=https://api.staging.com \
  myapp:v1.0

# Production
docker run -d \
  -p 80:80 \
  -e NODE_ENV=production \
  -e API_URL=https://api.prod.com \
  --restart always \
  --memory="512m" \
  --cpus="1.0" \
  myapp:v1.0
```

---

## 📁 Project Structure

```
docker-production-mastery/
│
├── src/
│   ├── App.tsx                 # Main React application
│   ├── main.tsx                # Entry point
│   ├── index.css               # Global styles
│   └── vite-env.d.ts           # TypeScript definitions
│
├── public/
│   └── docker-docs.html        # Additional documentation
│
├── standalone-index.html       # Standalone version (no dependencies)
├── index.draw.io              # Architecture diagrams
├── index.html                  # HTML entry point
│
├── package.json                # Dependencies
├── package-lock.json           # Locked dependencies
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # App-specific TS config
├── tsconfig.node.json          # Node-specific TS config
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── eslint.config.js            # ESLint configuration
│
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

---

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Docker (optional, for testing examples)

### Step-by-Step Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/docker-production-mastery.git
cd docker-production-mastery

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173

# 5. Build for production
npm run build

# 6. Preview production build
npm run preview
```

### Troubleshooting

**Port 5173 already in use?**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill

# Or use a different port
npm run dev -- --port 3000
```

**Dependencies not installing?**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

---

## 🎯 Usage

### Development Mode

```bash
# Start dev server with hot reload
npm run dev

# Run linter
npm run lint

# Run type check
npm run typecheck
```

### Production Build

```bash
# Build for production
npm run build

# Preview build locally
npm run preview

# Analyze bundle size
npm run build -- --mode analyze
```

### Docker Deployment

```bash
# Build Docker image
docker build -t myapp .

# Run container
docker run -d -p 80:80 myapp

# With environment variables
docker run -d -p 80:80 \
  -e API_URL=https://api.example.com \
  myapp
```

---

## 🚀 Deployment

### Deploy to Production

#### Using Docker

```bash
# Build and tag
docker build -t myregistry.com/myapp:v1.0 .

# Push to registry
docker push myregistry.com/myapp:v1.0

# Deploy on server
docker run -d \
  -p 80:80 \
  --restart always \
  --name myapp \
  myregistry.com/myapp:v1.0
```

#### Using Docker Compose

```yaml
version: '3.8'

services:
  frontend:
    image: myapp:v1.0
    ports:
      - "80:80"
    environment:
      - API_URL=https://api.prod.com
    restart: always
```

```bash
docker-compose up -d
```

#### Using Kubernetes

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:v1.0
        ports:
        - containerPort: 80
        env:
        - name: API_URL
          value: "https://api.prod.com"
```

---

## 💼 Interview Questions & Answers

### Q1: What's the difference between ENTRYPOINT and CMD?

**Answer:**

ENTRYPOINT defines the main executable that always runs, while CMD provides default arguments that can be overridden at runtime. Together, they provide flexibility with safety.

**Example:**
```dockerfile
ENTRYPOINT ["curl"]
CMD ["https://example.com"]
```

- `docker run myimage` → `curl https://example.com`
- `docker run myimage https://google.com` → `curl https://google.com`

The ENTRYPOINT (`curl`) always runs, but CMD can be overridden.

---

### Q2: Why use multi-stage builds?

**Answer:**

Multi-stage builds reduce the final image size and attack surface by separating build-time dependencies from runtime dependencies. This results in:

- **97% smaller images** (25MB vs 800MB)
- **Better security** (no build tools in production)
- **Faster deployments** (less data to transfer)
- **Cleaner images** (only runtime artifacts)

Build tools (compilers, npm, etc.) stay in the build stage and are discarded. Only the compiled application goes to the final image.

---

### Q3: Is running Nginx as root insecure?

**Answer:**

The master process runs as root only to bind privileged port 80, but all request-handling workers run as the unprivileged `nginx` user. This means:

- **Master (root)**: Binds port 80, reads config, spawns workers (1 process)
- **Workers (nginx)**: Handle ALL HTTP traffic (multiple processes)

99.99% of traffic is handled by non-root processes, limiting the blast radius of any exploit. For maximum security, configure Nginx to use port 8080 and run everything as non-root.

---

### Q4: How does Nginx reverse proxy work?

**Answer:**

Nginx sits between the client and backend servers. It examines incoming requests and forwards them to appropriate backends based on URL path:

```nginx
location / {
    # Serve frontend files
    try_files $uri /index.html;
}

location /api/ {
    # Forward to backend
    proxy_pass http://backend:8000;
}
```

**Benefits:**
- No CORS issues (single origin to browser)
- Backend IP hidden from public
- SSL termination at one point
- Load balancing across multiple backends
- Caching layer for better performance

---

### Q5: How do you handle secrets in Docker?

**Answer:**

Never hardcode secrets in Dockerfile or ENV directives. Instead, inject at runtime:

**Methods:**

1. **Environment variables:**
   ```bash
   docker run -e DB_PASSWORD=secret myapp
   ```

2. **Docker secrets (Swarm):**
   ```bash
   echo "secret" | docker secret create db_password -
   ```

3. **Kubernetes secrets:**
   ```bash
   kubectl create secret generic app-secrets --from-literal=db-password=secret
   ```

4. **External services:**
   - HashiCorp Vault
   - AWS Secrets Manager
   - Azure Key Vault
   - Google Secret Manager

**Key principle:** Image = Blueprint (public), Secrets = Keys (attached at runtime)

---

### Q6: What's the purpose of .dockerignore?

**Answer:**

`.dockerignore` prevents sensitive files and unnecessary data from being copied into the Docker image during build. Without it:

- ❌ Secrets in `.env` files leak into image
- ❌ Large `node_modules` folders increase build time
- ❌ Git history exposes sensitive commits
- ❌ Logs may contain confidential data

It improves security, reduces image size, and speeds up builds.

---

### Q7: How do you optimize Docker build times?

**Answer:**

**Strategies:**

1. **Layer Caching**: Order Dockerfile commands from least to most frequently changing

   ```dockerfile
   # ✅ Good: Dependencies cached unless package.json changes
   COPY package*.json ./
   RUN npm ci
   COPY . .

   # ❌ Bad: Cache invalidated on any file change
   COPY . .
   RUN npm ci
   ```

2. **Multi-stage Builds**: Separate build and runtime stages

3. **.dockerignore**: Exclude unnecessary files

4. **BuildKit**: Enable BuildKit for parallel builds
   ```bash
   DOCKER_BUILDKIT=1 docker build .
   ```

5. **Specific COPY**: Copy only what's needed
   ```dockerfile
   COPY package*.json ./    # Not COPY . .
   ```

---

### Q8: What's the difference between ADD and COPY?

**Answer:**

**COPY:**
- Simple file/directory copy
- Preferred for most use cases
- Transparent and predictable

**ADD:**
- Can download files from URLs
- Auto-extracts tar archives
- Has "magic" behavior

**Best Practice:** Use COPY unless you specifically need ADD's extra features.

```dockerfile
# ✅ Preferred
COPY package.json ./

# ⚠️ Only if you need URL/extraction
ADD https://example.com/file.tar.gz /tmp/
```

---

### Q9: How do you debug a Docker container?

**Answer:**

**Techniques:**

1. **View logs:**
   ```bash
   docker logs container_name
   docker logs -f container_name  # Follow
   ```

2. **Execute shell:**
   ```bash
   docker exec -it container_name /bin/sh
   docker exec -it container_name /bin/bash
   ```

3. **Inspect container:**
   ```bash
   docker inspect container_name
   docker top container_name
   ```

4. **Check resource usage:**
   ```bash
   docker stats container_name
   ```

5. **Port mapping:**
   ```bash
   docker port container_name
   ```

6. **Network inspection:**
   ```bash
   docker network inspect bridge
   ```

---

### Q10: What is Docker layer caching and how does it work?

**Answer:**

Docker builds images in layers. Each instruction in a Dockerfile creates a new layer. Docker caches these layers and reuses them if the instruction hasn't changed.

**Example:**

```dockerfile
FROM node:alpine          # Layer 1: Base image
COPY package*.json ./     # Layer 2: Package files
RUN npm ci               # Layer 3: Install deps
COPY . .                 # Layer 4: Source code
RUN npm run build        # Layer 5: Build
```

**On first build:**
- All layers are created and cached

**On subsequent builds (if only source code changed):**
- Layers 1-3: ✅ Reused from cache (fast!)
- Layers 4-5: ❌ Rebuilt (source changed)

**Best Practice:** Place frequently changing instructions at the bottom to maximize cache hits.

---

## 📚 Docker Best Practices

### ✅ Always Do

1. **Use multi-stage builds** for production
2. **Include .dockerignore** file
3. **Inject secrets at runtime**, never hardcode
4. **Use specific version tags**, not `:latest`
5. **Scan images** for vulnerabilities regularly
6. **Run as non-root user** when possible
7. **Use nginx** for reverse proxy in production
8. **Keep base images minimal** (Alpine, Distroless)
9. **Optimize layer caching** (deps before source)
10. **Add health checks** for containers

### ❌ Never Do

1. **Include secrets** in Dockerfile or image layers
2. **Use :latest** tag in production
3. **Run as root** unnecessarily
4. **Skip .dockerignore** file
5. **Expose build tools** in production images
6. **Hardcode environment configs**
7. **Copy entire project** without filtering
8. **Use shell form** for ENTRYPOINT/CMD
9. **Ignore security** vulnerabilities
10. **Skip testing** images before production

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/AmazingFeature

# 3. Make your changes
# 4. Run linter
npm run lint

# 5. Commit your changes
git commit -m 'Add some AmazingFeature'

# 6. Push to the branch
git push origin feature/AmazingFeature

# 7. Open a Pull Request
```

### Guidelines

- Follow existing code style
- Add comments for complex logic
- Update documentation if needed
- Test your changes thoroughly
- Write meaningful commit messages

---

## 👨‍💼 Author

**Ritesh Sharma**
*DevOps Engineer | Cloud Architect*

### Skills & Expertise

- ☁️ **Cloud Platforms**: Azure
- 🏗️ **Infrastructure as Code**: Terraform
- 🔄 **CI/CD**: GitHub Actions, Azure DevOps
- 🐳 **Containers**: Docker, Kubernetes
- ⚡ **Automation**: Bash, Python, PowerShell
- 🔧 **Configuration Management**: Ansible
- 📊 **Monitoring**: Prometheus, Grafana
- 🔐 **Security**: DevSecOps practices

### Connect with Me

- 💼 LinkedIn: [linkedin.com/in/riteshatri](https://www.linkedin.com/in/riteshatri)
- 🐙 GitHub: [github.com/Riteshatri](https://github.com/Riteshatri)
- 📧 Email: your.email@example.com
- 🌐 Website: your-website.com

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Docker documentation and community
- Nginx documentation
- React and TypeScript communities
- All contributors and supporters

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/docker-production-mastery?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/docker-production-mastery?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/docker-production-mastery)
![GitHub license](https://img.shields.io/github/license/yourusername/docker-production-mastery)

---

<div align="center">

## 🎓 You're Production Ready!

✅ ENTRYPOINT/CMD flexibility
✅ Multi-stage builds (97% smaller)
✅ Security best practices
✅ Root vs non-root management
✅ Nginx reverse proxy
✅ Production deployment checklist

### 🚀 Ready to ship production-grade Docker applications!

---

**Made with ❤️ by [Ritesh Sharma](https://github.com/Riteshatri)**

⭐ Star this repo if you found it helpful!

</div>
