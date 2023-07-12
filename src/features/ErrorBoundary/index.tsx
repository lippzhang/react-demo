
import { useErrorBoundary } from "use-error-boundary"
import { ErrorBoundary } from "react-error-boundary";


export default function index() {

  return (
    <>
    <div>index</div>
    <MyComponent/>
    <MyComponent2/>
    <MyComponent3/>
    <MyComponent4/>
    </>
  )
}


const ExplosionErrorMessage = "💥"
const Explosion = () => {
  throw new Error(ExplosionErrorMessage)
}

const JustRenderMe = () => {
  throw new Error("💥")
}

const MyComponent = () => {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary()

  return (
    <>
      {didCatch ? (
        <p>An error has been caught: {error.message}</p>
      ) : (
        <ErrorBoundary>
          <div>normal</div>
          <JustRenderMe />
        </ErrorBoundary>
      )}
    </>
  )
}
const MyComponent2 = () => {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary()

  return (
    <>
      <ErrorBoundary>
          <div>normal</div>
          <JustRenderMe />
        </ErrorBoundary>
    </>
  )
}
const MyComponent3 = () => {

  return (
    <>
    <ErrorBoundary fallback={<div>Something went wrong first </div>}>
      <div>normal 组件</div>
      <ErrorBoundary fallback={<div>Something went wrong two</div>}>
        <JustRenderMe />
      </ErrorBoundary>
      </ErrorBoundary>
    </>
  )
}
const MyComponent4 = () => {

  return (
    <>
      <div>normal 组件</div>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Explosion />
      </ErrorBoundary>
    </>
  )
}