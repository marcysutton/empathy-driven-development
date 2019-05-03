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
    let output = '\n'
    violations.forEach((violation) => {
      let nodes = violation.nodes.map((node) => '  - ' + node.target).join('\n')

      output += '---- ' + violation.id + ' ----\n'
      output += 'Help: ' + violation.help + '\n'
      output += 'Affected Nodes: \n'

      violation.nodes.forEach((node) => {
        if (node.any.length) {
          output += '\n Target: ' + node.target + '\n\n'
          output += '  Fix ANY of the following:\n'
          node.any.forEach((item) => {
            output += '  - ' + item.message + '\n'
          })
        }

        if (node.all.length) {
          output += '\n Target: ' + node.target + '\n\n'
          output += '  Fix ALL of the following: \n'
          node.all.forEach((item) => {
            output += '  - ' + item.message + '\n'
          })
        }
      })
    })
    return output
  }
}

module.exports = utils
