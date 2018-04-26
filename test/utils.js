
var utils = {
    printViolations: function(violations) {
      violations.forEach((violation) => {
        let output = '';
        let nodes = violation.nodes.map((node) => '  - ' + node.target).join('\n');
  
        output += '---- ' + violation.id + ' ----\n';
        output += 'Help: ' + violation.help + '\n';
        output += 'Affected Nodes: \n';
  
        violation.nodes.forEach((node) => node.any.forEach((item) => {
          output += '- ' + item.message + '\n';
          output += '  Target: ' + node.target + '\n\n';
        }));
  
        console.log(output);
      });
    }
  }
  
  module.exports = utils;