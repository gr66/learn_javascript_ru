import React from 'react'
import {render} from 'react-dom'
import Article from './article'
import {articles} from './fixtures'

render(<Article article = {articles[0]} />, document.getElementById('container'))
