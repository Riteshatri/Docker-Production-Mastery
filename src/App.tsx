import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('entrypoint');

  const sections = [
    { id: 'entrypoint', label: 'ENTRYPOINT vs CMD', icon: '⚙️' },
    { id: 'multistage', label: 'Multi-Stage', icon: '🏗️' },
    { id: 'security', label: 'Security', icon: '🔐' },
    { id: 'root', label: 'Root vs Non-Root', icon: '👤' },
    { id: 'proxy', label: 'Nginx Proxy', icon: '🔄' },
    { id: 'production', label: 'Production', icon: '🚀' },
    { id: 'complete', label: 'Complete Notes', icon: '📚' }
  ];

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      padding: '0',
      margin: '0'
    }}>
      {/* Hero Title Section (Non-Sticky) */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '30px 20px',
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{
              display: 'inline-flex',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '12px',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
            }}>
              <span style={{ fontSize: '2rem' }}>🐳</span>
            </div>

            <h1 style={{
              fontSize: '1.8rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0,
              letterSpacing: '-0.5px'
            }}>
              Docker Production Mastery
            </h1>
          </div>
        </div>
      </div>

      {/* Sticky Tab Navigation */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '10px 15px',
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            gap: '6px',
            justifyContent: 'center',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            margin: '0 auto'
          }}>
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                style={{
                  background: activeSection === section.id
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : 'white',
                  color: activeSection === section.id ? 'white' : '#64748b',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeSection === section.id
                    ? '0 3px 10px rgba(102, 126, 234, 0.4)'
                    : '0 2px 4px rgba(0,0,0,0.1)',
                  transform: activeSection === section.id ? 'translateY(-1px)' : 'none',
                  whiteSpace: 'nowrap',
                  minWidth: 'fit-content'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== section.id) {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 3px 10px rgba(0,0,0,0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== section.id) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                  }
                }}
              >
                <span style={{ marginRight: '4px' }}>{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {activeSection === 'entrypoint' && <EntrypointSection />}
        {activeSection === 'multistage' && <MultistageSection />}
        {activeSection === 'security' && <SecuritySection />}
        {activeSection === 'root' && <RootSection />}
        {activeSection === 'proxy' && <ProxySection />}
        {activeSection === 'production' && <ProductionSection />}
        {activeSection === 'complete' && <CompleteNotesSection />}
      </div>

      {/* Author Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 20px 40px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
          borderRadius: '20px',
          padding: '30px 40px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>👨‍💼</div>
          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '8px',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            opacity: 0.9
          }}>Created By</h2>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '800',
            color: '#fff',
            marginBottom: '12px'
          }}>Ritesh Sharma</h3>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.95)',
            fontWeight: '500',
            marginBottom: '8px',
            lineHeight: '1.5'
          }}>
            DevOps Engineer | Cloud Architect
          </p>
          <p style={{
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.85)',
            fontWeight: '500',
            marginBottom: '0'
          }}>
            Azure • Terraform • CI/CD • Kubernetes • Cloud Automation
          </p>

          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '18px'
          }}>
            <a
              href="https://www.linkedin.com/in/riteshatri"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#0077b5',
                color: 'white',
                padding: '10px 25px',
                borderRadius: '10px',
                fontSize: '0.9rem',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 15px rgba(0, 119, 181, 0.3)',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 119, 181, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            <a
              href="https://github.com/Riteshatri"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#181717',
                color: 'white',
                padding: '10px 25px',
                borderRadius: '10px',
                fontSize: '0.9rem',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 15px rgba(24, 23, 23, 0.3)',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(24, 23, 23, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        padding: '30px',
        textAlign: 'center',
        color: 'white',
        fontSize: '0.95rem',
        fontWeight: '500'
      }}>
        <p>🐳 Docker Production Best Practices | Complete Guide 2024</p>
      </div>
    </div>
  );
}

function EntrypointSection() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <GlassCard>
        <h2 style={styles.sectionTitle}>⚙️ ENTRYPOINT vs CMD</h2>

        <InfoBox type="concept">
          <h3 style={styles.h3}>Core Concept</h3>
          <p><strong style={styles.highlight}>ENTRYPOINT:</strong> Defines the main executable (fixed)</p>
          <p><strong style={styles.highlight}>CMD:</strong> Provides default arguments (overridable)</p>
        </InfoBox>

        <div style={styles.keyPoint}>
          <strong>⭐ Golden Rule:</strong> ENTRYPOINT = main command | CMD = default parameters
        </div>

        <h3 style={styles.h3}>Basic Example</h3>
        <CodeBlock lang="Dockerfile">{`FROM ubuntu:22.04
RUN apt-get update && apt-get install -y curl

ENTRYPOINT ["curl"]
CMD ["https://example.com"]`}</CodeBlock>

        <CodeBlock lang="bash">{`# Normal run
docker run myimage
→ Executes: curl https://example.com

# Override CMD
docker run myimage https://google.com
→ Executes: curl https://google.com`}</CodeBlock>

        <h3 style={styles.h3}>Why Both Together?</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '20px 0' }}>
          <FeatureCard icon="🎯" title="Flexibility" desc="Different environments can use different args" />
          <FeatureCard icon="☸️" title="K8s/Compose" desc="Override CMD via YAML configuration" />
          <FeatureCard icon="⚡" title="No Rebuild" desc="Config changes without rebuilding image" />
        </div>

        <InfoBox type="tip">
          <strong>✅ Best Practice:</strong> Always use exec form (JSON array)
          <CodeBlock lang="Dockerfile">{`# ✅ Correct (Exec form)
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]

# ❌ Avoid (Shell form)
ENTRYPOINT nginx -g "daemon off;"`}</CodeBlock>
        </InfoBox>
      </GlassCard>
    </div>
  );
}

function MultistageSection() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <GlassCard>
        <h2 style={styles.sectionTitle}>🏗️ Multi-Stage Docker Builds</h2>

        <InfoBox type="concept">
          <h3 style={styles.h3}>What is Multi-Stage Build?</h3>
          <p>Build your application in one stage, run it in another. Only copy what you need for production.</p>
        </InfoBox>

        <div style={styles.keyPoint}>
          <strong>🎯 Result:</strong> Smaller images (~25MB vs ~800MB) + Better security + No build tools in production
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', margin: '30px 0' }}>
          <StatCard value="~800MB" label="Single Stage" color="#ef4444" />
          <StatCard value="→" label="Optimize" color="#f59e0b" />
          <StatCard value="~25MB" label="Multi Stage" color="#10b981" />
        </div>

        <CodeBlock lang="Dockerfile">{`# ========================================
# STAGE 1: BUILD
# ========================================
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ========================================
# STAGE 2: RUNTIME
# ========================================
FROM nginx:1.25-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/public /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]`}</CodeBlock>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', margin: '30px 0' }}>
          <ComparisonCard title="Image Size" bad="❌ ~800MB" good="✅ ~25MB" />
          <ComparisonCard title="Security" bad="❌ Build tools exposed" good="✅ Minimal surface" />
          <ComparisonCard title="Deploy Speed" bad="❌ Slow" good="✅ Fast" />
        </div>
      </GlassCard>
    </div>
  );
}

function SecuritySection() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <GlassCard>
        <h2 style={styles.sectionTitle}>🔐 Security Best Practices</h2>

        <InfoBox type="concept">
          <h3 style={styles.h3}>Three Pillars of Docker Security</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', margin: '20px 0' }}>
            <SecurityPillar icon="📦" title="Minimal Image" desc="Only include what's necessary" />
            <SecurityPillar icon="👤" title="Non-Root User" desc="Run with least privileges" />
            <SecurityPillar icon="🔑" title="No Secrets" desc="Inject at runtime only" />
          </div>
        </InfoBox>

        <InfoBox type="danger">
          <strong>⚠️ Critical:</strong> Without .dockerignore, secrets WILL leak into your image!
        </InfoBox>

        <h3 style={styles.h3}>Essential .dockerignore</h3>
        <CodeBlock lang=".dockerignore">{`node_modules
.git
.env
.env.local
*.log
Dockerfile
docker-compose.yml`}</CodeBlock>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '30px 0' }}>
          <div>
            <h4 style={{ ...styles.h4, color: '#ef4444' }}>❌ Wrong</h4>
            <CodeBlock lang="Dockerfile">{`ENV DB_PASSWORD=secret123
# Baked into image!`}</CodeBlock>
          </div>
          <div>
            <h4 style={{ ...styles.h4, color: '#10b981' }}>✅ Correct</h4>
            <CodeBlock lang="bash">{`docker run -e DB_PASSWORD=secret123
# Injected at runtime`}</CodeBlock>
          </div>
        </div>

        <div style={styles.keyPoint}>
          <strong>🎯 Golden Rule:</strong> Image = blueprint | Secrets = keys (attached at runtime)
        </div>
      </GlassCard>
    </div>
  );
}

function RootSection() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <GlassCard>
        <h2 style={styles.sectionTitle}>👤 Root vs Non-Root Users</h2>

        <InfoBox type="concept">
          <h3 style={styles.h3}>Understanding Root</h3>
          <p><strong style={styles.highlight}>Root:</strong> Superuser with unlimited permissions (dangerous!)</p>
          <p><strong style={styles.highlight}>Non-root:</strong> Limited user with restricted access (safe!)</p>
        </InfoBox>

        <InfoBox type="danger">
          <strong>⚠️ Security Risk:</strong> If attacker exploits your app running as root, they have FULL system access
        </InfoBox>

        <InfoBox type="warning">
          <strong>🔔 Nginx Special Case:</strong> Nginx needs root to bind port 80, but workers run as non-root
        </InfoBox>

        <CodeBlock lang="bash">{`docker exec -it frontend ps aux

# Output:
USER     PID  COMMAND
root       1  nginx: master process  ← Binds port 80 only
nginx      7  nginx: worker process  ← Handles ALL traffic
nginx      8  nginx: worker process  ← Handles ALL traffic`}</CodeBlock>

        <div style={{
          background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
          padding: '40px',
          borderRadius: '16px',
          margin: '30px 0',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <ProcessBox title="Master Process" user="root" role="Opens port 80" color="#ef4444" />
            <div style={{ fontSize: '2rem', color: '#667eea' }}>→</div>
            <ProcessBox title="Worker Processes" user="nginx" role="Handle ALL traffic" color="#10b981" />
          </div>
        </div>

        <div style={styles.keyPoint}>
          <strong>🎯 Key Takeaway:</strong> Root only opens the gate, non-root does ALL the work
        </div>

        <h3 style={styles.h3}>Strict Non-Root Setup (Port 8080)</h3>
        <CodeBlock lang="Dockerfile">{`FROM nginx:alpine

RUN addgroup -S app && adduser -S app -G app
RUN sed -i 's/listen 80;/listen 8080;/' /etc/nginx/conf.d/default.conf
RUN chown -R app:app /var/cache/nginx /var/run /usr/share/nginx/html

USER app
EXPOSE 8080`}</CodeBlock>
      </GlassCard>
    </div>
  );
}

function ProxySection() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <GlassCard>
        <h2 style={styles.sectionTitle}>🔄 Nginx Reverse Proxy</h2>

        <InfoBox type="concept">
          <h3 style={styles.h3}>What is Reverse Proxy?</h3>
          <p>Nginx sits between browser and backend, forwarding requests transparently</p>
        </InfoBox>

        <div style={{
          background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
          padding: '40px',
          borderRadius: '16px',
          margin: '30px 0',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <FlowBox icon="🌐" title="Browser" />
            <div style={{ fontSize: '2rem', color: '#667eea' }}>→</div>
            <FlowBox icon="🔄" title="Nginx" highlight />
            <div style={{ fontSize: '2rem', color: '#667eea' }}>→</div>
            <FlowBox icon="⚡" title="Backend API" />
          </div>
        </div>

        <div style={styles.keyPoint}>
          <strong>🎯 Why?</strong> Browser only knows ONE address. Nginx decides: frontend files or backend API?
        </div>

        <h3 style={styles.h3}>nginx.conf Configuration</h3>
        <CodeBlock lang="nginx">{`upstream backend_api {
    server YOUR_BACKEND_IP:8000;
}

server {
    listen 80;
    root /usr/share/nginx/html;

    # Frontend routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API proxy - THE MAGIC ✨
    location /api/ {
        proxy_pass http://backend_api;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`}</CodeBlock>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', margin: '30px 0' }}>
          <BenefitCard icon="✅" title="No CORS" />
          <BenefitCard icon="🔒" title="Backend Hidden" />
          <BenefitCard icon="🔐" title="SSL Termination" />
          <BenefitCard icon="⚖️" title="Load Balancing" />
        </div>
      </GlassCard>
    </div>
  );
}

function ProductionSection() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <GlassCard>
        <h2 style={styles.sectionTitle}>🚀 Production-Ready Dockerfile</h2>

        <InfoBox type="concept">
          <h3 style={styles.h3}>Gold Standard Template</h3>
          <p>Combines: Multi-stage + Security + Nginx proxy + Proper user management</p>
        </InfoBox>

        <CodeBlock lang="Dockerfile">{`# ============================================
# STAGE 1: BUILD
# ============================================
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ============================================
# STAGE 2: RUNTIME
# ============================================
FROM nginx:1.25-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/public /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]`}</CodeBlock>

        <h3 style={styles.h3}>Build & Deploy</h3>
        <CodeBlock lang="bash">{`# Build image
docker build -t frontend-app:v1.0 .

# Run container
docker run -d -p 80:80 --restart always frontend-app:v1.0

# Test
curl http://localhost
curl http://localhost/api/health`}</CodeBlock>

        <h3 style={styles.h3}>Production Checklist</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', margin: '30px 0' }}>
          <CheckItem text="Multi-stage build" />
          <CheckItem text=".dockerignore present" />
          <CheckItem text="ENTRYPOINT + CMD" />
          <CheckItem text="Non-root workers" />
          <CheckItem text="Reverse proxy config" />
          <CheckItem text="Health endpoint" />
        </div>

        <InfoBox type="tip">
          <h4 style={styles.h4}>Interview-Ready Answer</h4>
          <p><strong>Q: Why use multi-stage builds?</strong></p>
          <p>A: To reduce final image size and attack surface. Build tools stay in build stage, only runtime artifacts go to production. Results in ~25MB vs ~800MB images.</p>
        </InfoBox>
      </GlassCard>
    </div>
  );
}

function CompleteNotesSection() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <GlassCard>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📚</div>
          <h2 style={{
            ...styles.sectionTitle,
            fontSize: '3rem',
            borderBottom: 'none',
            paddingBottom: '10px'
          }}>Complete Docker Production Guide</h2>
          <p style={{ fontSize: '1.2rem', color: '#64748b', fontWeight: '500' }}>
            A to Z - Everything You Need to Know
          </p>
        </div>
      </GlassCard>

      {/* ENTRYPOINT vs CMD */}
      <GlassCard>
        <h2 style={styles.sectionTitle}>⚙️ ENTRYPOINT vs CMD</h2>

        <InfoBox type="concept">
          <h3 style={styles.h3}>Core Concept</h3>
          <p><strong style={styles.highlight}>ENTRYPOINT:</strong> Defines the main executable (fixed)</p>
          <p><strong style={styles.highlight}>CMD:</strong> Provides default arguments (overridable)</p>
        </InfoBox>

        <div style={styles.keyPoint}>
          <strong>⭐ Golden Rule:</strong> ENTRYPOINT = main command | CMD = default parameters
        </div>

        <h3 style={styles.h3}>Basic Example</h3>
        <CodeBlock lang="Dockerfile">{`FROM ubuntu:22.04
RUN apt-get update && apt-get install -y curl

ENTRYPOINT ["curl"]
CMD ["https://example.com"]`}</CodeBlock>

        <CodeBlock lang="bash">{`# Normal run
docker run myimage
# Executes: curl https://example.com

# Override CMD
docker run myimage https://google.com
# Executes: curl https://google.com`}</CodeBlock>

        <h3 style={styles.h3}>Why Both Together?</h3>
        <ul style={{ fontSize: '1rem', lineHeight: '1.8', marginLeft: '25px' }}>
          <li><strong style={styles.highlight}>Flexibility:</strong> Different environments (dev/prod) can use different args</li>
          <li><strong style={styles.highlight}>Kubernetes/Compose:</strong> Can override CMD via YAML</li>
          <li><strong style={styles.highlight}>No Rebuild:</strong> Configuration changes without rebuilding image</li>
        </ul>

        <InfoBox type="tip">
          <strong>✅ Best Practice:</strong> Always use exec form (JSON array)
          <CodeBlock lang="Dockerfile">{`# ✅ Correct (Exec form)
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]

# ❌ Avoid (Shell form)
ENTRYPOINT nginx -g "daemon off;"`}</CodeBlock>
        </InfoBox>
      </GlassCard>

      {/* Multi-Stage Builds */}
      <GlassCard>
        <h2 style={styles.sectionTitle}>🏗️ Multi-Stage Docker Builds</h2>

        <InfoBox type="concept">
          <h3 style={styles.h3}>What is Multi-Stage Build?</h3>
          <p>Build your application in one stage, run it in another. Only copy what you need for production.</p>
        </InfoBox>

        <div style={styles.keyPoint}>
          <strong>🎯 Result:</strong> Smaller images (~25MB vs ~800MB), better security, no build tools in production
        </div>

        <h3 style={styles.h3}>Complete Example</h3>
        <CodeBlock lang="Dockerfile">{`# ========================================
# STAGE 1: BUILD
# ========================================
FROM node:20-alpine AS build

WORKDIR /app

# Copy deps first (caching optimization)
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ========================================
# STAGE 2: RUNTIME
# ========================================
FROM nginx:1.25-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy ONLY build output
COPY --from=build /app/dist/public /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]`}</CodeBlock>

        <div style={{
          background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
          padding: '40px',
          borderRadius: '16px',
          margin: '30px 0',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <FlowBox icon="🏗️" title="Stage 1: Build" />
            <div style={{ fontSize: '2rem', color: '#667eea' }}>→</div>
            <FlowBox icon="⚙️" title="Compile Code" />
            <div style={{ fontSize: '2rem', color: '#667eea' }}>→</div>
            <FlowBox icon="🚀" title="Stage 2: Runtime" highlight />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', margin: '30px 0' }}>
          <ComparisonCard title="Image Size" bad="❌ ~800MB" good="✅ ~25MB" />
          <ComparisonCard title="Security" bad="❌ Build tools exposed" good="✅ Minimal attack surface" />
          <ComparisonCard title="Deployment" bad="❌ Slow" good="✅ Fast" />
        </div>
      </GlassCard>

      {/* Security */}
      <GlassCard>
        <h2 style={styles.sectionTitle}>🔐 Security Best Practices</h2>

        <InfoBox type="concept">
          <h3 style={styles.h3}>Three Pillars of Docker Security</h3>
          <ol style={{ fontSize: '1rem', lineHeight: '1.8', marginLeft: '25px' }}>
            <li><strong style={styles.highlight}>Minimal Image:</strong> Only include what's necessary</li>
            <li><strong style={styles.highlight}>Non-Root User:</strong> Run with least privileges</li>
            <li><strong style={styles.highlight}>No Secrets in Image:</strong> Inject at runtime</li>
          </ol>
        </InfoBox>

        <h3 style={styles.h3}>1. Use .dockerignore</h3>
        <InfoBox type="danger">
          <strong>⚠️ Critical:</strong> Without .dockerignore, secrets WILL leak into your image!
        </InfoBox>

        <CodeBlock lang=".dockerignore">{`node_modules
.git
.env
.env.local
*.log
Dockerfile
docker-compose.yml`}</CodeBlock>

        <h3 style={styles.h3}>2. Never Hardcode Secrets</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', margin: '30px 0' }}>
          <div>
            <h4 style={{ ...styles.h4, color: '#ef4444' }}>❌ Wrong</h4>
            <CodeBlock lang="Dockerfile">{`ENV DB_PASSWORD=secret123`}</CodeBlock>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '10px' }}>Baked into image</p>
          </div>
          <div>
            <h4 style={{ ...styles.h4, color: '#10b981' }}>✅ Correct</h4>
            <CodeBlock lang="bash">{`docker run -e DB_PASSWORD=secret123`}</CodeBlock>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '10px' }}>Injected at runtime</p>
          </div>
        </div>

        <div style={styles.keyPoint}>
          <strong>🎯 Golden Rule:</strong> Image = blueprint | Secrets = keys (attached at runtime)
        </div>
      </GlassCard>

      {/* Root vs Non-Root */}
      <GlassCard>
        <h2 style={styles.sectionTitle}>👤 Root vs Non-Root Users</h2>

        <InfoBox type="concept">
          <h3 style={styles.h3}>Understanding Root</h3>
          <p><strong style={styles.highlight}>Root:</strong> Superuser with unlimited permissions</p>
          <p><strong style={styles.highlight}>Non-root:</strong> Limited user with restricted access</p>
        </InfoBox>

        <InfoBox type="danger">
          <strong>⚠️ Security Risk:</strong> If attacker exploits your app running as root, they have full system access
        </InfoBox>

        <h3 style={styles.h3}>Nginx Special Case</h3>
        <InfoBox type="warning">
          <strong>🔔 Important:</strong> Nginx needs root to bind port 80, but workers run as non-root
        </InfoBox>

        <CodeBlock lang="bash">{`docker exec -it frontend ps aux

# Output:
# USER     PID  COMMAND
# root       1  nginx: master process  ← Binds port 80
# nginx      7  nginx: worker process  ← Handles traffic
# nginx      8  nginx: worker process  ← Handles traffic`}</CodeBlock>

        <div style={{
          background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
          padding: '40px',
          borderRadius: '16px',
          margin: '30px 0',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <ProcessBox title="Master (root)" user="root" role="Binds Port 80" color="#ef4444" />
            <div style={{ fontSize: '2rem', color: '#667eea' }}>↓</div>
            <ProcessBox title="Workers (nginx)" user="nginx" role="Handle All Traffic" color="#10b981" />
          </div>
        </div>

        <div style={styles.keyPoint}>
          <strong>🎯 Key Takeaway:</strong> Root only opens the gate, non-root does all the work
        </div>

        <h3 style={styles.h3}>Strict Non-Root (Port 8080)</h3>
        <CodeBlock lang="Dockerfile">{`FROM nginx:alpine

RUN addgroup -S app && adduser -S app -G app
RUN sed -i 's/listen 80;/listen 8080;/' /etc/nginx/conf.d/default.conf
RUN chown -R app:app /var/cache/nginx /var/run /usr/share/nginx/html

USER app
EXPOSE 8080`}</CodeBlock>
      </GlassCard>

      {/* Nginx Reverse Proxy */}
      <GlassCard>
        <h2 style={styles.sectionTitle}>🔄 Nginx Reverse Proxy</h2>

        <InfoBox type="concept">
          <h3 style={styles.h3}>What is Reverse Proxy?</h3>
          <p>Nginx sits between browser and backend, forwarding requests transparently</p>
        </InfoBox>

        <div style={{
          background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
          padding: '40px',
          borderRadius: '16px',
          margin: '30px 0',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <FlowBox icon="🌐" title="Browser" />
            <div style={{ fontSize: '2rem', color: '#667eea' }}>→</div>
            <FlowBox icon="🔄" title="Nginx" highlight />
            <div style={{ fontSize: '2rem', color: '#667eea' }}>→</div>
            <FlowBox icon="⚡" title="Backend API" />
          </div>
        </div>

        <div style={styles.keyPoint}>
          <strong>🎯 Why?</strong> Browser only knows ONE address. Nginx decides: frontend files or backend API?
        </div>

        <h3 style={styles.h3}>nginx.conf Configuration</h3>
        <CodeBlock lang="nginx">{`upstream backend_api {
    server 74.234.94.110:8000;
}

server {
    listen 80;
    root /usr/share/nginx/html;

    # Frontend routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API proxy - THE MAGIC
    location /api/ {
        proxy_pass http://backend_api;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`}</CodeBlock>

        <h3 style={styles.h3}>How It Works</h3>
        <div style={{
          background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
          padding: '30px',
          borderRadius: '16px',
          margin: '30px 0'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', flexWrap: 'wrap', fontSize: '0.95rem' }}>
            <div style={boxStyle}>1. Browser → /api/users</div>
            <div style={{ fontSize: '1.5rem', color: '#667eea' }}>→</div>
            <div style={boxStyle}>2. Nginx sees "/api"</div>
            <div style={{ fontSize: '1.5rem', color: '#667eea' }}>→</div>
            <div style={boxStyle}>3. Forwards to backend</div>
            <div style={{ fontSize: '1.5rem', color: '#667eea' }}>→</div>
            <div style={boxStyle}>4. Returns response</div>
          </div>
        </div>

        <InfoBox type="tip">
          <strong>✅ Benefits:</strong>
          <ul style={{ fontSize: '1rem', lineHeight: '1.8', marginLeft: '25px', marginTop: '10px' }}>
            <li>No CORS issues</li>
            <li>Backend IP hidden from public</li>
            <li>SSL termination at one point</li>
            <li>Load balancing capabilities</li>
          </ul>
        </InfoBox>
      </GlassCard>

      {/* Production Dockerfile */}
      <GlassCard>
        <h2 style={styles.sectionTitle}>🚀 Production-Ready Dockerfile</h2>

        <InfoBox type="concept">
          <h3 style={styles.h3}>Gold Standard</h3>
          <p>Combines: multi-stage + security + nginx proxy + proper user management</p>
        </InfoBox>

        <CodeBlock lang="Dockerfile">{`# ============================================
# STAGE 1: BUILD
# ============================================
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ============================================
# STAGE 2: RUNTIME
# ============================================
FROM nginx:1.25-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/public /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]`}</CodeBlock>

        <h3 style={styles.h3}>Required Files</h3>
        <CodeBlock lang="tree">{`project-root/
├── Dockerfile
├── nginx.conf
├── .dockerignore
├── package.json
└── src/`}</CodeBlock>

        <h3 style={styles.h3}>Build & Run</h3>
        <CodeBlock lang="bash">{`# Build
docker build -t frontend-app:v1.0 .

# Run
docker run -d -p 80:80 --restart always frontend-app:v1.0

# Test
curl http://localhost
curl http://localhost/api/health`}</CodeBlock>

        <h3 style={styles.h3}>Deployment Checklist</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', margin: '30px 0' }}>
          <CheckItem text="Multi-stage build (~25MB)" />
          <CheckItem text=".dockerignore present" />
          <CheckItem text="ENTRYPOINT + CMD flexible" />
          <CheckItem text="Non-root workers" />
          <CheckItem text="Reverse proxy configured" />
          <CheckItem text="No secrets in image" />
        </div>
      </GlassCard>

      {/* Interview Ready */}
      <GlassCard>
        <h2 style={styles.sectionTitle}>💼 Interview-Ready Answers</h2>

        <InfoBox type="concept">
          <h4 style={styles.h4}>Q: What's the difference between ENTRYPOINT and CMD?</h4>
          <p><strong>A:</strong> ENTRYPOINT defines the main executable that always runs. CMD provides default arguments that can be overridden at runtime. Together, they provide flexibility with safety.</p>
        </InfoBox>

        <InfoBox type="concept">
          <h4 style={styles.h4}>Q: Why use multi-stage builds?</h4>
          <p><strong>A:</strong> To reduce final image size and attack surface. Build tools stay in the build stage, only runtime artifacts go to production. This results in images of ~25MB instead of ~800MB.</p>
        </InfoBox>

        <InfoBox type="concept">
          <h4 style={styles.h4}>Q: Is running Nginx as root insecure?</h4>
          <p><strong>A:</strong> The master process runs as root only to bind privileged ports (80/443). All request-handling workers run as the unprivileged nginx user. For stricter security, use port 8080 with full non-root setup.</p>
        </InfoBox>

        <InfoBox type="concept">
          <h4 style={styles.h4}>Q: How does Nginx reverse proxy work?</h4>
          <p><strong>A:</strong> Nginx receives all requests. Based on URL path (e.g., /api), it forwards to backend while serving static files directly. Client only knows one endpoint, eliminating CORS issues.</p>
        </InfoBox>
      </GlassCard>

      {/* Final Recommendations */}
      <GlassCard>
        <h2 style={styles.sectionTitle}>✨ Final Recommendations</h2>

        <InfoBox type="tip">
          <strong>✅ Always Do:</strong>
          <ul style={{ fontSize: '1rem', lineHeight: '1.8', marginLeft: '25px', marginTop: '10px' }}>
            <li>Use multi-stage builds for production</li>
            <li>Include .dockerignore file</li>
            <li>Inject secrets at runtime, never hardcode</li>
            <li>Use specific version tags, not :latest</li>
            <li>Scan images for vulnerabilities regularly</li>
            <li>Run workers as non-root users</li>
            <li>Use nginx for reverse proxy in production</li>
          </ul>
        </InfoBox>

        <InfoBox type="danger">
          <strong>❌ Never Do:</strong>
          <ul style={{ fontSize: '1rem', lineHeight: '1.8', marginLeft: '25px', marginTop: '10px' }}>
            <li>Include secrets in Dockerfile or image layers</li>
            <li>Use :latest tag in production environments</li>
            <li>Run applications as root unnecessarily</li>
            <li>Skip .dockerignore file</li>
            <li>Expose build tools in production images</li>
            <li>Hardcode environment-specific configs</li>
          </ul>
        </InfoBox>

        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '40px',
          borderRadius: '16px',
          margin: '40px 0',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎓</div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '15px' }}>You're Production Ready!</h3>
          <p style={{ fontSize: '1.1rem', opacity: 0.95 }}>
            You now have complete knowledge of Docker production best practices.
            From ENTRYPOINT/CMD to multi-stage builds, security, and nginx proxy configuration.
          </p>
        </div>
      </GlassCard>
    </div>
  );
}

const boxStyle = {
  background: 'white',
  padding: '12px 20px',
  borderRadius: '8px',
  fontWeight: '600',
  color: '#1e293b',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

// Helper Components
function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      padding: '40px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
      marginBottom: '30px',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    }}>
      {children}
    </div>
  );
}

function InfoBox({ type, children }: { type: 'concept' | 'tip' | 'warning' | 'danger'; children: React.ReactNode }) {
  const colors = {
    concept: { bg: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)', border: '#667eea' },
    tip: { bg: '#ecfdf5', border: '#10b981' },
    warning: { bg: '#fef3c7', border: '#f59e0b' },
    danger: { bg: '#fee2e2', border: '#ef4444' }
  };

  return (
    <div style={{
      background: colors[type].bg,
      borderLeft: `5px solid ${colors[type].border}`,
      borderRadius: '12px',
      padding: '25px',
      margin: '20px 0'
    }}>
      {children}
    </div>
  );
}

function CodeBlock({ lang, children }: { lang: string; children: string }) {
  return (
    <div style={{ position: 'relative', margin: '20px 0' }}>
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'rgba(102, 126, 234, 0.9)',
        color: 'white',
        padding: '4px 12px',
        borderRadius: '8px',
        fontSize: '0.75rem',
        fontWeight: '600',
        zIndex: 1
      }}>
        {lang}
      </div>
      <pre style={{
        background: '#0f172a',
        color: '#e2e8f0',
        padding: '25px',
        borderRadius: '12px',
        overflow: 'auto',
        fontFamily: '"Fira Code", "Courier New", monospace',
        fontSize: '0.9rem',
        lineHeight: '1.6',
        margin: 0,
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
      }}>
        <code>{children}</code>
      </pre>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
      padding: '25px',
      borderRadius: '16px',
      textAlign: 'center',
      border: '2px solid rgba(102, 126, 234, 0.2)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{icon}</div>
      <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px', color: '#1e293b' }}>{title}</h4>
      <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>{desc}</p>
    </div>
  );
}

function StatCard({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div style={{
      background: 'white',
      padding: '30px',
      borderRadius: '16px',
      textAlign: 'center',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      border: `3px solid ${color}`
    }}>
      <div style={{ fontSize: '2rem', fontWeight: '800', color, marginBottom: '8px' }}>{value}</div>
      <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '600' }}>{label}</div>
    </div>
  );
}

function ComparisonCard({ title, bad, good }: { title: string; bad: string; good: string }) {
  return (
    <div style={{
      background: 'white',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '15px', color: '#1e293b' }}>{title}</h4>
      <div style={{ fontSize: '0.9rem', color: '#ef4444', marginBottom: '8px' }}>{bad}</div>
      <div style={{ fontSize: '0.9rem', color: '#10b981' }}>{good}</div>
    </div>
  );
}

function SecurityPillar({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div style={{
      background: 'white',
      padding: '25px',
      borderRadius: '16px',
      textAlign: 'center',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{icon}</div>
      <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px', color: '#1e293b' }}>{title}</h4>
      <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>{desc}</p>
    </div>
  );
}

function ProcessBox({ title, user, role, color }: { title: string; user: string; role: string; color: string }) {
  return (
    <div style={{
      background: 'white',
      padding: '25px',
      borderRadius: '16px',
      minWidth: '200px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      border: `3px solid ${color}`
    }}>
      <div style={{ fontSize: '1rem', fontWeight: '700', color: '#1e293b', marginBottom: '10px' }}>{title}</div>
      <div style={{ fontSize: '0.9rem', color, fontWeight: '600', marginBottom: '5px' }}>User: {user}</div>
      <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{role}</div>
    </div>
  );
}

function FlowBox({ icon, title, highlight }: { icon: string; title: string; highlight?: boolean }) {
  return (
    <div style={{
      background: highlight ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white',
      color: highlight ? 'white' : '#1e293b',
      padding: '20px 30px',
      borderRadius: '12px',
      boxShadow: highlight ? '0 10px 30px rgba(102, 126, 234, 0.4)' : '0 4px 12px rgba(0,0,0,0.1)',
      fontWeight: '700',
      minWidth: '150px',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{icon}</div>
      <div>{title}</div>
    </div>
  );
}

function BenefitCard({ icon, title }: { icon: string; title: string }) {
  return (
    <div style={{
      background: 'white',
      padding: '20px',
      borderRadius: '12px',
      textAlign: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{icon}</div>
      <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1e293b' }}>{title}</div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #10b98115 0%, #10b98120 100%)',
      padding: '15px 20px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      border: '2px solid #10b981'
    }}>
      <span style={{ fontSize: '1.5rem' }}>✅</span>
      <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1e293b' }}>{text}</span>
    </div>
  );
}

const styles = {
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: '3px solid #e2e8f0'
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e293b',
    margin: '30px 0 15px 0'
  },
  h4: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#1e293b',
    margin: '20px 0 10px 0'
  },
  keyPoint: {
    background: 'linear-gradient(135deg, #3b82f615 0%, #06b6d415 100%)',
    padding: '20px 25px',
    borderRadius: '12px',
    margin: '20px 0',
    borderLeft: '5px solid #0ea5e9',
    fontSize: '1.05rem',
    fontWeight: '600',
    color: '#1e293b'
  },
  highlight: {
    color: '#667eea',
    fontWeight: '700'
  }
};

export default App;