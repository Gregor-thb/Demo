import { describe, it, expect } from 'vitest'
import { countTasks, addTask } from '../tasks.js'
import { mount } from '@vue/test-utils'
import ButtonCounter from '../ButtonCounter.vue'
/*import Greetings from '../Greetings.vue'*/
import ToggleButton from '../ToggleButton.vue'

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

describe('CountButtons', () => {
  it('Button counts correctly', async () => {
  const wrapper = mount(ButtonCounter)

  await wrapper.find('button').trigger('click')

  expect(wrapper.text()).toContain('Zähler: 5')
  })
})

describe('Greetings', () => {
  it('Greetings greets the user', () => {
    const wrapper = mount(Greetings)

    expect(wrapper.text()).toContain('Hello, User!')
  })
})

describe('ToggleButton', () => {
  it('toggles the button state', async () => {
    const wrapper = mount(ToggleButton)

    await wrapper.find('button').trigger('click')

    expect(wrapper.text()).toContain('An')
  })
})
