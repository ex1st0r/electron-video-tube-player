import React from 'react'
import { Switch, Route } from 'react-router'

import { SeriesList, SeriesVideo } from './components'

export default (
  <Switch>
    <Route exact path="/" component={SeriesList} />
    <Route exact path="/playVideo" component={SeriesVideo} />
  </Switch>
)
