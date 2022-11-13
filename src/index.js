import Xlact from './Xlact'

const element = Xlact.createElement(
  'div',
  { id: 'foo' },
  Xlact.createElement('h1', null, 'bar'),
  Xlact.createElement('h2', null, 333)
)
const container = document.getElementById('root')

Xlact.render(element, container)
