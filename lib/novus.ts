import { Novus } from '@pendo/novus-js'

export const novus = new Novus({
  apiKey: process.env.NOVUS_API_KEY || 'demo_key',
  autoCapture: true,
  agentTracing: true,
  sessionReplay: true
})

export function trackGoal(goal: string, metadata?: any) {
  return novus.track('goal_set', { goal, ...metadata })
}

export function captureToolCall(tool: string, result: any) {
  return novus.track('tool_call', { tool, result, timestamp: Date.now() })
}
