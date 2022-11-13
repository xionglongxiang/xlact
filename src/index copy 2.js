import './index.css'
// import App from './App';
import React from 'react'
import reportWebVitals from './reportWebVitals'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const element = <h1 title="foo">Hello</h1>
// const element = React.createElement('h1', { title: 'foo' }, 'Hello')
// const element = {
//   type: 'h1',
//   props: {
//     title: 'foo',
//     children: 'Hello',
//   },
// }

const element = React.createElement(
  'div',
  { id: 'foo' },
  React.createElement('a', null, 'bar'),
  React.createElement('b')
)

const container = document.getElementById('root')

const node = document.createElement(element.type)
node['title'] = element.props.title
const text = document.createTextNode('')
text['nodeValue'] = element.props.children
node.appendChild(text)
container.appendChild(node)

// ReactDOM.render(element, container)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
