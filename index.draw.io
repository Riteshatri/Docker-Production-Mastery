<mxfile host="app.diagrams.net" modified="2024-12-15T00:00:00.000Z" agent="5.0" version="22.1.0" etag="draw-io-diagram" type="device">
  <diagram name="Docker Production Mastery Architecture" id="docker-architecture">
    <mxGraphModel dx="1422" dy="794" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1600" pageHeight="1200" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />

        <!-- Title -->
        <mxCell id="title" value="🐳 Docker Production Mastery - System Architecture" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=28;fontStyle=1;fontColor=#667EEA;" vertex="1" parent="1">
          <mxGeometry x="400" y="40" width="800" height="60" as="geometry" />
        </mxCell>

        <!-- Frontend Application Layer -->
        <mxCell id="frontend-container" value="Frontend Application Layer" style="swimlane;whiteSpace=wrap;html=1;fillColor=#E3F2FD;strokeColor=#667EEA;strokeWidth=3;fontSize=18;fontStyle=1;fontColor=#1E293B;" vertex="1" parent="1">
          <mxGeometry x="100" y="140" width="1400" height="320" as="geometry" />
        </mxCell>

        <mxCell id="hero-section" value="Hero Section&#xa;(Non-Sticky)&#xa;&#xa;🐳 Docker Production Mastery" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#8B5CF6;strokeColor=#7C3AED;strokeWidth=2;fontSize=13;fontStyle=1;fontColor=#FFFFFF;" vertex="1" parent="frontend-container">
          <mxGeometry x="40" y="60" width="240" height="100" as="geometry" />
        </mxCell>

        <mxCell id="sticky-tabs" value="Sticky Tab Navigation&#xa;(Always Visible on Scroll)&#xa;&#xa;7 Interactive Tabs" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#EC4899;strokeColor=#DB2777;strokeWidth=2;fontSize=13;fontStyle=1;fontColor=#FFFFFF;" vertex="1" parent="frontend-container">
          <mxGeometry x="320" y="60" width="240" height="100" as="geometry" />
        </mxCell>

        <mxCell id="react-app" value="React Application&#xa;(TypeScript + Vite)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#667EEA;strokeColor=#764BA2;strokeWidth=2;fontSize=13;fontStyle=1;fontColor=#FFFFFF;" vertex="1" parent="frontend-container">
          <mxGeometry x="40" y="180" width="180" height="80" as="geometry" />
        </mxCell>

        <mxCell id="standalone-html" value="Standalone HTML&#xa;(No Dependencies)" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#667EEA;strokeColor=#764BA2;strokeWidth=2;fontSize=13;fontStyle=1;fontColor=#FFFFFF;" vertex="1" parent="frontend-container">
          <mxGeometry x="250" y="180" width="180" height="80" as="geometry" />
        </mxCell>

        <mxCell id="components" value="Interactive Components&#xa;• Tab Navigation&#xa;• Code Blocks&#xa;• Info Boxes&#xa;• Glass Cards" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#10B981;strokeColor=#059669;strokeWidth=2;fontSize=12;fontColor=#FFFFFF;align=left;spacingLeft=10;" vertex="1" parent="frontend-container">
          <mxGeometry x="620" y="60" width="200" height="120" as="geometry" />
        </mxCell>

        <mxCell id="styling" value="Styling Layer&#xa;• Tailwind CSS&#xa;• Gradient Themes&#xa;• Animations&#xa;• Responsive Design" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#0EA5E9;strokeColor=#0284C7;strokeWidth=2;fontSize=12;fontColor=#FFFFFF;align=left;spacingLeft=10;" vertex="1" parent="frontend-container">
          <mxGeometry x="860" y="60" width="200" height="120" as="geometry" />
        </mxCell>

        <mxCell id="icons" value="Icon Library&#xa;• Lucide React&#xa;• SVG Icons&#xa;• Emojis" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F59E0B;strokeColor=#D97706;strokeWidth=2;fontSize=12;fontColor=#FFFFFF;align=left;spacingLeft=10;" vertex="1" parent="frontend-container">
          <mxGeometry x="1100" y="60" width="180" height="100" as="geometry" />
        </mxCell>

        <!-- Docker Concepts Layer -->
        <mxCell id="concepts-container" value="Docker Concepts &amp; Best Practices" style="swimlane;whiteSpace=wrap;html=1;fillColor=#FEF3C7;strokeColor=#F59E0B;strokeWidth=3;fontSize=18;fontStyle=1;fontColor=#1E293B;" vertex="1" parent="1">
          <mxGeometry x="100" y="500" width="1400" height="320" as="geometry" />
        </mxCell>

        <mxCell id="entrypoint-cmd" value="⚙️ ENTRYPOINT vs CMD&#xa;&#xa;• Main executable&#xa;• Default arguments&#xa;• Flexibility" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#8B5CF6;strokeColor=#7C3AED;strokeWidth=2;fontSize=12;fontStyle=1;fontColor=#FFFFFF;align=left;spacingLeft=10;" vertex="1" parent="concepts-container">
          <mxGeometry x="40" y="60" width="180" height="110" as="geometry" />
        </mxCell>

        <mxCell id="multistage" value="🏗️ Multi-Stage Builds&#xa;&#xa;• Build stage&#xa;• Runtime stage&#xa;• 25MB vs 800MB" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#EC4899;strokeColor=#DB2777;strokeWidth=2;fontSize=12;fontStyle=1;fontColor=#FFFFFF;align=left;spacingLeft=10;" vertex="1" parent="concepts-container">
          <mxGeometry x="250" y="60" width="180" height="110" as="geometry" />
        </mxCell>

        <mxCell id="security" value="🔐 Security&#xa;&#xa;• .dockerignore&#xa;• No secrets&#xa;• Minimal image" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#EF4444;strokeColor=#DC2626;strokeWidth=2;fontSize=12;fontStyle=1;fontColor=#FFFFFF;align=left;spacingLeft=10;" vertex="1" parent="concepts-container">
          <mxGeometry x="460" y="60" width="180" height="110" as="geometry" />
        </mxCell>

        <mxCell id="root-user" value="👤 Root vs Non-Root&#xa;&#xa;• Master process&#xa;• Worker processes&#xa;• Port binding" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#06B6D4;strokeColor=#0891B2;strokeWidth=2;fontSize=12;fontStyle=1;fontColor=#FFFFFF;align=left;spacingLeft=10;" vertex="1" parent="concepts-container">
          <mxGeometry x="670" y="60" width="180" height="110" as="geometry" />
        </mxCell>

        <mxCell id="nginx-proxy" value="🔄 Nginx Proxy&#xa;&#xa;• Reverse proxy&#xa;• API forwarding&#xa;• No CORS" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#10B981;strokeColor=#059669;strokeWidth=2;fontSize=12;fontStyle=1;fontColor=#FFFFFF;align=left;spacingLeft=10;" vertex="1" parent="concepts-container">
          <mxGeometry x="880" y="60" width="180" height="110" as="geometry" />
        </mxCell>

        <mxCell id="production" value="🚀 Production Ready&#xa;&#xa;• Gold standard&#xa;• All best practices&#xa;• Deployment ready" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#667EEA;strokeColor=#764BA2;strokeWidth=2;fontSize=12;fontStyle=1;fontColor=#FFFFFF;align=left;spacingLeft=10;" vertex="1" parent="concepts-container">
          <mxGeometry x="1090" y="60" width="180" height="110" as="geometry" />
        </mxCell>

        <mxCell id="complete-notes" value="📚 Complete Notes&#xa;&#xa;• All topics combined&#xa;• Interview Q&amp;A&#xa;• Quick reference" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F59E0B;strokeColor=#D97706;strokeWidth=2;fontSize=12;fontStyle=1;fontColor=#FFFFFF;align=left;spacingLeft=10;" vertex="1" parent="concepts-container">
          <mxGeometry x="460" y="190" width="400" height="100" as="geometry" />
        </mxCell>

        <!-- Deployment Layer -->
        <mxCell id="deployment-container" value="Deployment &amp; Infrastructure" style="swimlane;whiteSpace=wrap;html=1;fillColor=#FEE2E2;strokeColor=#EF4444;strokeWidth=3;fontSize=18;fontStyle=1;fontColor=#1E293B;" vertex="1" parent="1">
          <mxGeometry x="100" y="860" width="1400" height="240" as="geometry" />
        </mxCell>

        <mxCell id="docker-build" value="🐳 Docker Build&#xa;&#xa;Multi-stage Dockerfile&#xa;Build stage + Runtime stage" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#2563EB;strokeColor=#1D4ED8;strokeWidth=2;fontSize=12;fontStyle=1;fontColor=#FFFFFF;" vertex="1" parent="deployment-container">
          <mxGeometry x="80" y="60" width="220" height="100" as="geometry" />
        </mxCell>

        <mxCell id="nginx-container" value="Nginx Container&#xa;&#xa;• Serve static files&#xa;• Reverse proxy&#xa;• Port 80" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#10B981;strokeColor=#059669;strokeWidth=2;fontSize=12;fontStyle=1;fontColor=#FFFFFF;" vertex="1" parent="deployment-container">
          <mxGeometry x="360" y="60" width="220" height="100" as="geometry" />
        </mxCell>

        <mxCell id="backend-api" value="Backend API&#xa;&#xa;• Node.js/Python&#xa;• Port 8000&#xa;• Proxied via Nginx" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#8B5CF6;strokeColor=#7C3AED;strokeWidth=2;fontSize=12;fontStyle=1;fontColor=#FFFFFF;" vertex="1" parent="deployment-container">
          <mxGeometry x="640" y="60" width="220" height="100" as="geometry" />
        </mxCell>

        <mxCell id="production-deploy" value="Production Deployment&#xa;&#xa;• Cloud platforms&#xa;• Container orchestration&#xa;• CI/CD pipelines" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F59E0B;strokeColor=#D97706;strokeWidth=2;fontSize=12;fontStyle=1;fontColor=#FFFFFF;" vertex="1" parent="deployment-container">
          <mxGeometry x="920" y="60" width="240" height="100" as="geometry" />
        </mxCell>

        <!-- Author Section -->
        <mxCell id="author-container" value="Author Information" style="swimlane;whiteSpace=wrap;html=1;fillColor=#DBEAFE;strokeColor=#0EA5E9;strokeWidth=3;fontSize=18;fontStyle=1;fontColor=#1E293B;" vertex="1" parent="1">
          <mxGeometry x="500" y="1140" width="600" height="200" as="geometry" />
        </mxCell>

        <mxCell id="author-info" value="👨‍💼 Ritesh Sharma&#xa;&#xa;DevOps Engineer | Cloud Architect&#xa;Azure | Terraform | CI/CD | Cloud Automation&#xa;&#xa;Tech: Azure | Terraform | GitHub Actions | Azure DevOps" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#0EA5E9;strokeColor=#0284C7;strokeWidth=2;fontSize=12;fontStyle=1;fontColor=#FFFFFF;align=center;" vertex="1" parent="author-container">
          <mxGeometry x="40" y="50" width="240" height="120" as="geometry" />
        </mxCell>

        <mxCell id="social-links" value="Social Links&#xa;&#xa;• LinkedIn: /in/riteshatri&#xa;• GitHub: /Riteshatri" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#0077B5;strokeColor=#005E93;strokeWidth=2;fontSize=12;fontStyle=1;fontColor=#FFFFFF;align=left;spacingLeft=10;" vertex="1" parent="author-container">
          <mxGeometry x="320" y="50" width="240" height="120" as="geometry" />
        </mxCell>

        <!-- Arrows connecting layers -->
        <mxCell id="arrow1" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeColor=#667EEA;strokeWidth=3;endArrow=block;endFill=1;" edge="1" parent="1" source="frontend-container" target="concepts-container">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>

        <mxCell id="arrow2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeColor=#667EEA;strokeWidth=3;endArrow=block;endFill=1;" edge="1" parent="1" source="concepts-container" target="deployment-container">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>

        <!-- Legend -->
        <mxCell id="legend" value="Legend" style="swimlane;whiteSpace=wrap;html=1;fillColor=#F8FAFC;strokeColor=#64748B;strokeWidth=2;fontSize=14;fontStyle=1;fontColor=#1E293B;" vertex="1" parent="1">
          <mxGeometry x="100" y="1140" width="350" height="200" as="geometry" />
        </mxCell>

        <mxCell id="legend1" value="Frontend Components" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#667EEA;strokeColor=#764BA2;strokeWidth=2;fontSize=11;fontColor=#FFFFFF;" vertex="1" parent="legend">
          <mxGeometry x="20" y="40" width="140" height="30" as="geometry" />
        </mxCell>

        <mxCell id="legend2" value="Docker Concepts" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#8B5CF6;strokeColor=#7C3AED;strokeWidth=2;fontSize=11;fontColor=#FFFFFF;" vertex="1" parent="legend">
          <mxGeometry x="20" y="80" width="140" height="30" as="geometry" />
        </mxCell>

        <mxCell id="legend3" value="Infrastructure" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#10B981;strokeColor=#059669;strokeWidth=2;fontSize=11;fontColor=#FFFFFF;" vertex="1" parent="legend">
          <mxGeometry x="20" y="120" width="140" height="30" as="geometry" />
        </mxCell>

        <mxCell id="legend4" value="Security &amp; Best Practices" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#EF4444;strokeColor=#DC2626;strokeWidth=2;fontSize=11;fontColor=#FFFFFF;" vertex="1" parent="legend">
          <mxGeometry x="180" y="40" width="150" height="30" as="geometry" />
        </mxCell>

        <mxCell id="legend5" value="Production Ready" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F59E0B;strokeColor=#D97706;strokeWidth=2;fontSize=11;fontColor=#FFFFFF;" vertex="1" parent="legend">
          <mxGeometry x="180" y="80" width="150" height="30" as="geometry" />
        </mxCell>

        <mxCell id="legend6" value="Author &amp; Social" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#0EA5E9;strokeColor=#0284C7;strokeWidth=2;fontSize=11;fontColor=#FFFFFF;" vertex="1" parent="legend">
          <mxGeometry x="180" y="120" width="150" height="30" as="geometry" />
        </mxCell>

      </root>
    </mxGraphModel>
  </diagram>
</mxfile>