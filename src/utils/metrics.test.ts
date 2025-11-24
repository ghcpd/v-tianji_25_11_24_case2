import { describe, expect, it } from 'vitest'
import { calculateSummary, buildGoalProgress } from './metrics'
import { weeklyData, weeklyGoals } from '../data/mockData'

describe('metrics utils', () => {
  it('calculates weekly summary correctly', () => {
    const summary = calculateSummary(weeklyData, 'week', weeklyGoals)

    expect(summary.totalSteps).toBe(87144)
    expect(summary.totalCalories).toBe(15380)
    expect(summary.totalWorkouts).toBe(5)
    expect(summary.stepGoalHits).toBe(6)
    expect(summary.caloriesGoalHits).toBe(5)
    expect(summary.activeMinutesGoalHits).toBe(4)
    expect(summary.sleepGoalHits).toBe(1)
    expect(Math.round(summary.complianceRate)).toBe(57)
  })

  it('builds goal progress with correct scaling for weekly view', () => {
    const summary = calculateSummary(weeklyData, 'week', weeklyGoals)
    const goals = buildGoalProgress(summary, 'week', weeklyGoals, weeklyData.length)

    const stepsGoal = goals.find((g) => g.id === 'steps')
    expect(stepsGoal?.target).toBe(70000)
    expect(stepsGoal?.current).toBe(87144)
    expect(stepsGoal?.progress).toBeCloseTo(1, 5)
  })
})
