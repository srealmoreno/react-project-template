import { Home } from '@pages/Home'
import { NotFound } from '@pages/NotFound'
import { Route, Switch } from 'wouter'
import { name } from '../package.json'
import { HashRouter } from '@components/HashRouter'

export function App (): JSX.Element {
  return (
    <HashRouter base={`/${name}`}>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  )
}
