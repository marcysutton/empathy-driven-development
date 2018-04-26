import React from 'react'
import axe from 'axe-core'
import utils from '../../../test/utils'

import LoginForm from '../login-form'

test('Form has no accessibility violations', (done) => {
    const fields = [ 'Dogs', 'Cats' ]

    const FormComponent = utils.mountToDoc(
        <LoginForm headline="Woof and hiss" fields={fields} />
    )
    const formNode = FormComponent.getDOMNode()

    let config = {
      "rules": {
        "color-contrast": { enabled: false },
        "link-in-text-block": { enabled: false }
      }
    }

    axe.run(formNode, config)
        .then(({ violations }) => {
            if (violations.length) {
                const err = utils.printViolations(violations)
                done.fail(err)
            } else {
                done()
            }
        })
})