# Changelog

All notable changes to M-flow will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.2] - 2026-04-05

### Added
- Precise summarization mode (`precise_mode`): preserves all original factual information
  (dates, numbers, names, constraints) with lower compression ratio — RAG context will be
  longer but more accurate. Uses two-step pipeline: JSON topic routing + per-section
  concurrent compression with anchor verification
- Configurable via API parameter, environment variable (`MFLOW_PRECISE_MODE`), or frontend toggle
- KuzuDB adapter: entry-level deduplication and broadened error recovery for batch operations

### Fixed
- KuzuDB "duplicated primary key" crash in UNWIND+MERGE operations
- Edge deduplication key collision in `deduplicate_nodes_and_edges`

## [0.3.1] - 2026-03-28

### Added
- Procedural memory extraction and retrieval
- Model Context Protocol (MCP) server support
- Frontend Knowledge Graph visualization with procedural subgraph
- Structured entry (manual ingest) with display text support
- Episodic retriever with adaptive bundle search
- Multi-dataset search with access control
- Docker Compose profiles for flexible deployment

### Changed
- Improved episodic retrieval scoring with path-cost model
- Enhanced content routing with atomic mode for short inputs
- Structured JSON output for procedural search results
- Unified triplet search with configurable vector collections

### Fixed
- Episode naming using dedicated summarization prompt
- Content inflation from prompt injection in short inputs
- WebSocket authentication token handling
- Pipeline status tracking and stale detection
- Manual ingest graph creation and embedding generation

## [0.3.0] - 2026-02-15

### Added
- Multi-user access control with dataset isolation
- Episodic memory architecture (Episodes, Facets, FacetPoints, Entities)
- Frontend dashboard with real-time pipeline monitoring
- LanceDB vector storage integration
- KuzuDB graph database adapter

For detailed release notes, see [GitHub Releases](https://github.com/FlowElement-ai/m_flow/releases).
