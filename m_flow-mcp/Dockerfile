# M-flow MCP Server Image
# Model Context Protocol server for M-flow knowledge graphs

FROM python:3.11-slim AS builder

# Build dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential git curl && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /srv/mcp

# Install Python dependencies first (for layer caching)
COPY m_flow-mcp/pyproject.toml ./
RUN pip install --no-cache-dir -e ".[all]"

# Copy M-flow source
COPY m_flow/ /srv/mcp/m_flow/
COPY m_flow-mcp/ /srv/mcp/

FROM python:3.11-slim AS runtime

WORKDIR /srv/mcp
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY --from=builder /srv/mcp /srv/mcp

# MCP HTTP/SSE server default port
EXPOSE 8000

# Install curl for health checks
RUN apt-get update && apt-get install -y --no-install-recommends curl && \
    rm -rf /var/lib/apt/lists/*

COPY m_flow-mcp/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Health check - verify MCP server is responding
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
    CMD curl -sf http://localhost:8000/health || exit 1

ENTRYPOINT ["/entrypoint.sh"]
CMD ["serve"]
