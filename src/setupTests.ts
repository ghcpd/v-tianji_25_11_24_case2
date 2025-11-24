import '@testing-library/jest-dom/vitest'
import { vi, beforeAll, afterAll } from 'vitest'

// Mock ResizeObserver for recharts in jsdom environment
class ResizeObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
}

// @ts-expect-error - attach mock to global
global.ResizeObserver = ResizeObserver

// Silence recharts width/height warnings in tests
const originalError = console.error

beforeAll(() => {
	vi.spyOn(console, 'error').mockImplementation((...args) => {
		const msg = args[0]
		if (typeof msg === 'string' && msg.includes('The width(') && msg.includes('height(')) {
			return
		}
		// @ts-expect-error preserve console signature
		originalError(...args)
	})
})

afterAll(() => {
	// @ts-expect-error vite spy
	console.error.mockRestore?.()
})
