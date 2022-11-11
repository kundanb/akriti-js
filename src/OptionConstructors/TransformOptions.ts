import Vector, { VectorBaseType } from '../Vector'

export interface TransformOptionsInputInterface {
  center: VectorBaseType
}

class TransformOptions {
  center: Vector

  static is(value: unknown): value is TransformOptions {
    return value instanceof TransformOptions
  }

  constructor(options: Partial<TransformOptionsInputInterface>) {
    options = options || {}
    this.center = Vector.from(options.center)
  }
}

export default TransformOptions
