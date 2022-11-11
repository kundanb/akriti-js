import TransformOptions, { TransformOptionsInputInterface } from './TransformOptions'

export interface RotateOptionsInputInterface extends TransformOptionsInputInterface {
  deg: boolean
  clockwise: boolean
}

class RotateOptions extends TransformOptions {
  deg: boolean
  clockwise: boolean

  static is(value: unknown): value is RotateOptions {
    return value instanceof RotateOptions
  }

  constructor(options?: Partial<RotateOptionsInputInterface>) {
    options = options || {}
    super(options)
    this.clockwise = options.clockwise ?? true
    this.deg = options.deg ?? true
  }
}

export default RotateOptions
