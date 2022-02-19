import DarkThemeFactory from './DarkThemeFactory'
import LightThemeFactory from './LightThemeFactory'
import View from './View'

it('should create a light theme view', () => {
  const view = new View(new LightThemeFactory())
  expect(view.label.color).toBe('black')
  expect(view.button.color).toBe('white')
  expect(view.button.backgroundColor).toBe('blue')
})

it('should create a dark theme view', () => {
  const view = new View(new DarkThemeFactory())
  expect(view.label.color).toBe('white')
  expect(view.button.color).toBe('white')
  expect(view.button.backgroundColor).toBe('black')
})
