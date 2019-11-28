import { sumar, multiplicar, restar, dividir } from '../maths'

describe('Cálculos matemáticos', ()=>{
  test('Prueba de sumas', ()=>{
    expect(sumar(1, 1)).toBe(2)
  })
})
