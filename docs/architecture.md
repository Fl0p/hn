# AI Assistant for Administrative Decision-Making - Architecture

## Overview

This document describes the technical architecture of the AI Assistant system designed to support adjudicators in public administration with administrative case management, document analysis, and decision generation.

## Technology Stack

### Backend
- **Next.js 14** - Full-stack framework with App Router
- **TypeScript** - Type-safe development
- **PostgreSQL** - Primary database for metadata and case management
- **Prisma ORM** - Type-safe database access
- **Dify Platform** - AI orchestration and workflow management

### AI Engine
- **Dify Platform** (self-hosted or cloud):
  - Workflow orchestration
  - Built-in RAG (Retrieval-Augmented Generation)
  - Vector database (Qdrant/Weaviate)
  - LLM management
  - Prompt management and versioning
  - Built-in guardrails and safety mechanisms
  - Monitoring and analytics

### LLM Options (via Dify)
- **Open-source**: Mistral-7B, Llama 3 (via Ollama)
- **Commercial**: OpenAI GPT-4, Claude (for demo/production)

### Frontend
- **Next.js 14** - App Router with Server Components
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/ui** - Component library

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Frontend Layer                           │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│  │  Dashboard   │ │  Case View   │ │  Document    │       │
│  │              │ │              │ │  Analysis    │       │
│  └──────────────┘ └──────────────┘ └──────────────┘       │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│  │  Decision    │ │  Risk        │ │  Audit       │       │
│  │  Generator   │ │  Assessment  │ │  Logs        │       │
│  └──────────────┘ └──────────────┘ └──────────────┘       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              Next.js API Layer (Orchestration)              │
│                                                             │
│  /api/cases          - CRUD operations for cases           │
│  /api/documents      - Document upload and management      │
│  /api/analyze        - Proxy to Dify analysis workflows    │
│  /api/generate       - Proxy to Dify generation workflows  │
│  /api/search         - Similar case search                 │
│  /api/risk           - Risk assessment                     │
│  /api/audit          - Audit log management                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                      Dify Platform                          │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │              AI Workflows (Pipelines)                 │ │
│  │                                                       │ │
│  │  ┌──────────────────┐    ┌──────────────────┐       │ │
│  │  │ Document         │    │ Decision         │       │ │
│  │  │ Analysis         │    │ Generator        │       │ │
│  │  │                  │    │                  │       │ │
│  │  │ • Parse PDF      │    │ • RAG Search     │       │ │
│  │  │ • Summarize      │    │ • Template       │       │ │
│  │  │ • Extract facts  │    │ • Generate draft │       │ │
│  │  │ • Identify risks │    │ • Add sources    │       │ │
│  │  └──────────────────┘    └──────────────────┘       │ │
│  │                                                       │ │
│  │  ┌──────────────────┐    ┌──────────────────┐       │ │
│  │  │ Risk             │    │ Similar Case     │       │ │
│  │  │ Assessment       │    │ Search           │       │ │
│  │  │                  │    │                  │       │ │
│  │  │ • Check regs     │    │ • Semantic       │       │ │
│  │  │ • Find precedent │    │   search         │       │ │
│  │  │ • Score risk     │    │ • Rank results   │       │ │
│  │  │ • Recommend      │    │ • Return top 5   │       │ │
│  │  └──────────────────┘    └──────────────────┘       │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │            Knowledge Base (RAG System)                │ │
│  │                                                       │ │
│  │  • Historical administrative decisions (~300)        │ │
│  │  • Legal regulations and statutes                    │ │
│  │  • Court decisions database (CBOSA)                  │ │
│  │  • Internal guidelines and procedures                │ │
│  │  • Case templates and examples                       │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │              Built-in Dify Features                   │ │
│  │                                                       │ │
│  │  • Vector Database (Qdrant/Weaviate)                 │ │
│  │  • Embedding generation                              │ │
│  │  • Prompt template management                        │ │
│  │  • Content moderation & guardrails                   │ │
│  │  • Usage monitoring & analytics                      │ │
│  │  • API key management                                │ │
│  │  • Conversation history                              │ │
│  └───────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              PostgreSQL Database (Prisma ORM)               │
│                                                             │
│  • Cases metadata and status                               │
│  • Documents metadata and references                       │
│  • Generated decisions and drafts                          │
│  • Analysis results and summaries                          │
│  • User actions and audit logs                             │
│  • Deadlines and notifications                             │
│  • System configuration                                    │
└─────────────────────────────────────────────────────────────┘
```

## Core Components

### 1. Frontend Layer (Next.js App)

**Dashboard**
- Overview of all cases
- Deadline notifications
- Recent activities
- Quick statistics

**Case View**
- Case details and timeline
- Document list
- Decision history
- Status management

**Document Analysis**
- Document upload interface
- AI-powered summarization
- Key facts extraction
- Risk identification

**Decision Generator**
- Interactive decision drafting
- Template selection
- Historical precedent search
- Source citation

**Risk Assessment**
- Automated risk scoring
- Compliance checking
- Recommendation engine

**Audit Logs**
- Complete action history
- User activity tracking
- Compliance reporting

### 2. API Layer (Next.js Routes)

**Case Management** (`/api/cases`)
- `GET /api/cases` - List all cases with filters
- `GET /api/cases/:id` - Get case details
- `POST /api/cases` - Create new case
- `PUT /api/cases/:id` - Update case
- `DELETE /api/cases/:id` - Archive case

**Document Management** (`/api/documents`)
- `POST /api/documents` - Upload document
- `GET /api/documents/:id` - Download document
- `POST /api/documents/:id/analyze` - Trigger analysis

**AI Operations** (`/api/analyze`, `/api/generate`)
- `POST /api/analyze/document` - Analyze document via Dify
- `POST /api/analyze/risk` - Assess risk via Dify
- `POST /api/generate/decision` - Generate decision draft
- `POST /api/search/similar` - Find similar cases

**Audit** (`/api/audit`)
- `GET /api/audit/logs` - Retrieve audit logs
- `POST /api/audit/log` - Create audit entry

### 3. Dify Platform Integration

**Workflow 1: Document Analysis**
```
Input: PDF/Document file
↓
Parse document (PDF.js/Tesseract OCR)
↓
Chunk text into segments
↓
Generate embeddings
↓
LLM: Summarize content
↓
LLM: Extract key facts
↓
LLM: Identify potential risks
↓
Output: Structured analysis JSON
```

**Workflow 2: Decision Generator**
```
Input: Case summary + context
↓
RAG: Search similar historical decisions
↓
RAG: Retrieve relevant legal regulations
↓
LLM: Select appropriate template
↓
LLM: Generate decision draft
↓
LLM: Add citations and sources
↓
Output: Draft decision with references
```

**Workflow 3: Similar Case Search**
```
Input: Case description
↓
Generate query embedding
↓
Vector search in knowledge base
↓
Rank by semantic similarity
↓
Filter by relevance threshold
↓
Output: Top 5 similar cases with scores
```

**Workflow 4: Risk Assessment**
```
Input: Case details
↓
RAG: Check against regulations
↓
RAG: Find precedent cases
↓
LLM: Analyze compliance issues
↓
LLM: Calculate risk score
↓
LLM: Generate recommendations
↓
Output: Risk report with score (0-100)
```

### 4. Knowledge Base (Dify RAG)

**Content Types:**
1. **Historical Decisions** (~300 archived cases)
   - Full text of decisions
   - Case metadata
   - Outcomes and reasoning

2. **Legal Regulations**
   - Tourism law
   - Administrative procedures
   - Relevant statutes

3. **Court Decisions** (CBOSA database)
   - Supreme Administrative Court decisions
   - Regional court decisions
   - Legal interpretations

4. **Internal Guidelines**
   - Department procedures
   - Decision templates
   - Best practices

**Indexing Strategy:**
- Chunk size: 512-1024 tokens
- Overlap: 128 tokens
- Embedding model: multilingual-e5-large or similar
- Metadata: date, type, category, author

### 5. Database Schema (Prisma)

```prisma
model Case {
  id          Int       @id @default(autoincrement())
  caseNumber  String    @unique
  title       String
  description String    @db.Text
  status      String    // "open", "in_progress", "closed"
  priority    String    // "low", "medium", "high"
  category    String    // "hotel_categorization", "ban", etc.
  deadline    DateTime?
  assignedTo  String?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  
  documents   Document[]
  decisions   Decision[]
  analyses    Analysis[]
  auditLogs   AuditLog[]
}

model Document {
  id          Int      @id @default(autoincrement())
  caseId      Int
  case        Case     @relation(fields: [caseId], references: [id])
  filename    String
  fileUrl     String   // Storage path or URL
  fileType    String   // "pdf", "docx", "scan"
  fileSize    Int      // bytes
  difyDocId   String?  // Reference to Dify knowledge base
  uploadedAt  DateTime @default(now())
  uploadedBy  String
}

model Decision {
  id          Int      @id @default(autoincrement())
  caseId      Int
  case        Case     @relation(fields: [caseId], references: [id])
  content     String   @db.Text
  status      String   // "draft", "review", "approved", "final"
  version     Int      @default(1)
  difyWorkflowId String?
  sources     Json?    // Citations and references
  createdBy   String
  reviewedBy  String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Analysis {
  id          Int      @id @default(autoincrement())
  caseId      Int
  case        Case     @relation(fields: [caseId], references: [id])
  type        String   // "summary", "risk", "similar_cases"
  content     Json     // Structured output from Dify
  confidence  Float?   // 0.0 - 1.0
  difyWorkflowId String
  createdAt   DateTime @default(now())
}

model AuditLog {
  id          Int      @id @default(autoincrement())
  caseId      Int?
  case        Case?    @relation(fields: [caseId], references: [id])
  action      String   // "view", "edit", "generate", "approve"
  userId      String
  userEmail   String
  details     Json     // Additional context
  ipAddress   String?
  timestamp   DateTime @default(now())
}

model User {
  id          Int      @id @default(autoincrement())
  email       String   @unique
  name        String
  role        String   // "adjudicator", "supervisor", "admin"
  department  String
  active      Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## Security & Compliance

### Data Protection (GDPR)

1. **Personal Data Handling**
   - Automatic PII detection in documents
   - Anonymization before AI processing
   - Encrypted storage (at rest and in transit)
   - Right to erasure implementation

2. **Access Control**
   - Role-based access control (RBAC)
   - Multi-factor authentication (MFA)
   - Session management
   - IP whitelisting for sensitive operations

3. **Audit Trail**
   - Complete action logging
   - Immutable audit logs
   - Regular compliance reports
   - Data access tracking

### AI Safety (Guardrails)

1. **Input Validation**
   - File type and size restrictions
   - Content scanning for malicious code
   - Input sanitization

2. **Output Filtering**
   - Hallucination detection
   - Fact verification against sources
   - Inappropriate content filtering
   - Bias detection

3. **Rate Limiting**
   - API request throttling
   - User quota management
   - DDoS protection

4. **Monitoring**
   - Real-time error tracking
   - Performance metrics
   - Usage analytics
   - Anomaly detection

### Dify Built-in Security

- Content moderation API
- Sensitive information filtering
- Prompt injection prevention
- Output validation rules
- Rate limiting per user/API key

## Deployment Architecture

### Development Environment

```yaml
# docker-compose.yml
services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: hn_dev
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  dify-api:
    image: langgenius/dify-api:latest
    environment:
      - DB_HOST=postgres
      - DB_PORT=5432
      - DB_USERNAME=postgres
      - DB_PASSWORD=postgres
      - DB_DATABASE=dify
      - REDIS_HOST=redis
      - REDIS_PORT=6379
      - VECTOR_STORE=qdrant
      - QDRANT_URL=http://qdrant:6333
    ports:
      - "5001:5001"
    depends_on:
      - postgres
      - redis
      - qdrant

  dify-web:
    image: langgenius/dify-web:latest
    environment:
      - CONSOLE_API_URL=http://dify-api:5001
    ports:
      - "3001:3000"
    depends_on:
      - dify-api

  qdrant:
    image: qdrant/qdrant:latest
    ports:
      - "6333:6333"
    volumes:
      - qdrant_data:/qdrant/storage

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - dify-api
      - dify-web

volumes:
  postgres_data:
  qdrant_data:
  redis_data:
```

### Production Environment

**Infrastructure:**
- **Application**: Kubernetes cluster or VM with Docker Compose
- **Database**: PostgreSQL with replication
- **Vector DB**: Qdrant cluster
- **Cache**: Redis cluster
- **Storage**: S3-compatible object storage for documents
- **CDN**: CloudFlare or similar for static assets
- **Monitoring**: Prometheus + Grafana
- **Logging**: ELK stack or similar

**Scaling Strategy:**
- Horizontal scaling for Next.js API
- Database read replicas
- Redis cluster for session management
- Qdrant sharding for large knowledge base
- Load balancer (nginx/HAProxy)

## Integration Points

### External Systems

1. **Document Management System**
   - API for document upload/download
   - Webhook for document status updates

2. **Authentication Provider**
   - SSO integration (SAML/OAuth)
   - LDAP/Active Directory

3. **Legal Databases**
   - CBOSA court decisions API
   - Legal regulation repositories

4. **Notification System**
   - Email notifications (SMTP)
   - SMS alerts for urgent deadlines
   - In-app notifications

5. **Reporting System**
   - Export to PDF/DOCX
   - Statistical reports
   - Compliance reports

## Performance Targets

### Response Times
- Document upload: < 2s
- Document analysis: < 30s (depending on size)
- Decision generation: < 15s
- Similar case search: < 3s
- Dashboard load: < 1s

### Throughput
- Concurrent users: 50-100
- Documents per day: 500-1000
- API requests per second: 100+

### Availability
- Uptime: 99.5% (excluding maintenance)
- Backup frequency: Daily
- Recovery time objective (RTO): < 4 hours
- Recovery point objective (RPO): < 1 hour

## Quality Assurance

### Testing Strategy

1. **Unit Tests**
   - API route handlers
   - Utility functions
   - Database operations

2. **Integration Tests**
   - Dify workflow integration
   - Database transactions
   - External API calls

3. **End-to-End Tests**
   - User workflows
   - Critical paths
   - Error scenarios

4. **AI Quality Tests**
   - Prompt effectiveness
   - RAG accuracy
   - Hallucination detection
   - Response relevance

### Evaluation Metrics

**Quantitative:**
- Response accuracy: > 85%
- Source citation accuracy: > 90%
- Processing time: within targets
- System uptime: > 99%

**Qualitative:**
- User satisfaction surveys
- Expert review of generated decisions
- Compliance with legal standards
- Usability testing

## Future Enhancements

1. **Advanced Features**
   - Multi-language support (EU languages)
   - Voice input/output
   - Mobile application
   - Real-time collaboration

2. **AI Improvements**
   - Fine-tuned models on domain data
   - Active learning from user feedback
   - Automated workflow optimization
   - Predictive analytics

3. **Integration Expansion**
   - More external legal databases
   - E-signature integration
   - Case management systems
   - Public portal for case status

## Conclusion

This architecture provides a robust, scalable, and secure foundation for an AI-powered administrative decision support system. By leveraging Dify's built-in capabilities, we significantly reduce development complexity while maintaining flexibility and control over the AI workflows. The system is designed to meet strict governmental requirements for security, compliance, and auditability while providing an intuitive user experience for adjudicators.

