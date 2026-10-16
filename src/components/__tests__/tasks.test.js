import { describe, it, expect } from 'vitest'
import { countTasks, addTask } from '../tasks.js'

describe('countTasks', () => {
  it('zählt alle Aufgaben', () => {
    expect(countTasks([
      { id: 1, title: 'Lernen', done: false },
      { id: 2, title: 'Testen', done: true },
    ])).toBe(2)
  })

  it('liefert 0 bei einer leeren Liste', () => {
    expect(countTasks([])).toBe(0)
  })
})

describe('addTask', () => {
  it('fügt eine Aufgabe hinzu', () => {
    const result = addTask([], 'CI/CD lernen')

    expect(result).toHaveLength(1)
    expect(result[0].title).toBe('CI/CD lernen')
    expect(result[0].done).toBe(false)
  })

  it('fügt keine leere Aufgabe hinzu', () => {
    expect(addTask([], '   ')).toHaveLength(0)
  })
})