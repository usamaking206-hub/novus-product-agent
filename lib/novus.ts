export const novus = {
  track: (event: string, data?: any) => {
    console.log('[Novus]', event, data)
  }
}

export function trackGoal(goal: string, metadata?: any) {
  return novus.track('goal_set', { goal, ...metadata })
}

export function captureToolCall(tool: string, result: any) {
  return novus.track('tool_call', { tool, result, timestamp: Date.now() })
}
