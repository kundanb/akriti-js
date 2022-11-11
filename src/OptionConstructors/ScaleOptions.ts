import TransformOptions, { TransformOptionsInputInterface } from './TransformOptions'

export type ScaleOptionsInputInterface = TransformOptionsInputInterface

class ScaleOptions extends TransformOptions {
  static is(value: unknown): value is ScaleOptions {
    return value instanceof ScaleOptions
  }

  constructor(options?: Partial<ScaleOptionsInputInterface>) {
    super(options)
  }
}

export default ScaleOptions
