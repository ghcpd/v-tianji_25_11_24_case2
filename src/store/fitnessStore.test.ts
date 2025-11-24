import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useFitnessStore } from './fitnessStore';

describe('Fitness Store', () => {
  beforeEach(() => {
    const store = useFitnessStore.getState();
    store.resetData();
  });

  it('should initialize with default data', () => {
    const store = useFitnessStore.getState();
    expect(store.data.currentWeight).toBe(75);
    expect(store.data.currentSteps).toBe(8432);
    expect(store.data.workoutMinutes).toBe(45);
    expect(store.data.calories).toBe(1850);
  });

  it('should have correct goal values', () => {
    const store = useFitnessStore.getState();
    expect(store.data.weightGoal).toBe(72);
    expect(store.data.stepsGoal).toBe(10000);
    expect(store.data.workoutGoal).toBe(60);
    expect(store.data.calorieGoal).toBe(2000);
  });

  it('should update metric values', () => {
    const { result } = renderHook(() => useFitnessStore());

    act(() => {
      result.current.updateMetric('currentWeight', 74);
    });

    expect(result.current.data.currentWeight).toBe(74);
  });

  it('should have 7 days of weekly steps data', () => {
    const store = useFitnessStore.getState();
    expect(store.data.weeklySteps).toHaveLength(7);
    expect(store.data.weeklySteps[0].day).toBe('Mon');
    expect(store.data.weeklySteps[6].day).toBe('Sun');
  });

  it('should have 7 days of weekly workout data', () => {
    const store = useFitnessStore.getState();
    expect(store.data.weeklyWorkouts).toHaveLength(7);
  });

  it('should reset data to initial values', () => {
    const { result } = renderHook(() => useFitnessStore());

    act(() => {
      result.current.updateMetric('currentWeight', 80);
    });

    expect(result.current.data.currentWeight).toBe(80);

    act(() => {
      result.current.resetData();
    });

    expect(result.current.data.currentWeight).toBe(75);
  });
});
