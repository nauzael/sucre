# Team: Gem Team

## Framework
- **Name**: Gem Team
- **Version**: 1.0.0
- **Type**: Multi-agent orchestration harness

## Conventions
- **Workflow**: Always follow Phase 0-8 (Research -> Plan -> Execute -> Review).
- **Automatic Orchestration**: ALL user prompts must be processed by the ORCHESTRATOR first. The ORCHESTRATOR will analyze the intent and delegate to the most optimal agent (RESEARCHER, PLANNER, IMPLEMENTER, etc.).
- **Documentation**: 
    - `PRD.md`: For task definitions and acceptance criteria.
    - `plan.yaml`: For tracking task execution.
    - `AGENTS.md`: For static conventions and team rules.
- **Learning**: Extract reusable skills to `docs/skills/`.
- **Brutally Brief**: No preambles, no meta-commentary in status updates.

## Agent Roles
- **ORCHESTRATOR**: Coordination and routing.
- **RESEARCHER**: Codebase exploration and context gathering.
- **PLANNER**: Task decomposition and wave scheduling.
- **IMPLEMENTER**: Code changes and TDD.
- **REVIEWER**: Security and quality audit.
- **CRITIC**: Assumptions and edge cases.
- **DEBUGGER**: Diagnosis and root cause analysis.
