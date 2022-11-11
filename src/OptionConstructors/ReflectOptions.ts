import TransformOptions, { TransformOptionsInputInterface } from './TransformOptions'

export type ReflectOptionsInputInterface = TransformOptionsInputInterface

class ReflectOptions extends TransformOptions {
  static is(value: unknown): value is ReflectOptions {
    return value instanceof ReflectOptions
  }

  constructor(options?: Partial<ReflectOptionsInputInterface>) {
    super(options)
  }
}

export default ReflectOptions
