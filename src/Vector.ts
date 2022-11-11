import { VectorArrayType } from './Types'
import { DEG } from './Constants'
import { ScaleOptions, RotateOptions, ReflectOptions } from './OptionConstructors'

export type VectorBaseType = number | VectorArrayType | Vector

class Vector {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  static from(value?: VectorBaseType) {
    if (typeof value === 'number') {
      return new Vector(value, value)
    } else if (Vector.is(value)) {
      return new Vector(value.x, value.y)
    } else if (value instanceof Array) {
      return new Vector(value[0], value[1])
    } else {
      return new Vector(0, 0)
    }
  }

  static is(value: unknown): value is Vector {
    return value instanceof Vector
  }

  add(adder: VectorBaseType) {
    adder = Vector.from(adder)
    this.x += adder.x
    this.y += adder.y
    return this
  }

  subtract(subtractor: VectorBaseType) {
    subtractor = Vector.from(subtractor)
    this.x -= subtractor.x
    this.y -= subtractor.y
    return this
  }

  multiply(multiplier: VectorBaseType) {
    multiplier = Vector.from(multiplier)
    this.x *= multiplier.x
    this.y *= multiplier.y
    return this
  }

  divide(divisor: VectorBaseType) {
    divisor = Vector.from(divisor)
    this.x /= divisor.x
    this.y /= divisor.y
    return this
  }

  translate(translator: VectorBaseType) {
    translator = Vector.from(translator)
    this.add(translator)
    return this
  }

  scale(scalar: VectorBaseType, options?: Partial<ScaleOptions>) {
    const { center } = new ScaleOptions(options)
    scalar = Vector.from(scalar)
    return this.subtract(center).multiply(scalar).add(center)
  }

  rotate(angle: VectorBaseType, options?: Partial<RotateOptions>) {
    const { center, deg, clockwise } = new RotateOptions(options)
    angle = Vector.from(angle)
    angle.x = (deg ? angle.x * DEG : angle.x) * (clockwise ? 1 : -1)
    angle.y = (deg ? angle.y * DEG : angle.y) * (clockwise ? 1 : -1)
    this.subtract(center)
    const x = this.x * Math.cos(angle.x) - this.y * Math.sin(angle.x)
    const y = this.x * Math.sin(angle.x) + this.y * Math.cos(angle.x)
    this.x = x
    this.y = y
    return this.add(center)
  }

  reflect(options?: Partial<ReflectOptions>) {
    const { center } = new ReflectOptions(options)
    return Vector.from(this).multiply(-1).add(center.multiply(2))
  }
}

export default Vector
