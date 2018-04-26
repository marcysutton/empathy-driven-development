const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

let wrapper

var utils = {
  mountToDoc: function(reactElm) {
    if (!document) {
      // Set up a basic DOM
      global.document = jsdom('<!doctype html><html><body></body></html>')
    }
    if (!wrapper) {
      wrapper = document.createElement('main')
      document.body.appendChild(wrapper)
    }
  
    const container = Enzyme.mount(reactElm)
    wrapper.innerHTML = ''
    wrapper.appendChild(container.getDOMNode())
    return container
  },
  printViolations: function(violations) {
    violations.forEach((violation) => {
      let output = ''
      let nodes = violation.nodes.map((node) => '  - ' + node.target).join('\n')

      output += '---- ' + violation.id + ' ----\n'
      output += 'Help: ' + violation.help + '\n'
      output += 'Affected Nodes: \n'

      violation.nodes.forEach((node) => node.any.forEach((item) => {
        output += '- ' + item.message + '\n'
        output += '  Target: ' + node.target + '\n\n'
      }))

      return output
    })
  }
}

module.exports = utils