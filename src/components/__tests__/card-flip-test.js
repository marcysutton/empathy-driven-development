import React from 'react'
import axe from 'axe-core'
import { shallow, mount, simulate } from 'enzyme'
import utils from '../../../test/utils'

import CardFlip from '../card-flip'

describe('Card flipping', () => {
    let member, CardFlipComponent

    beforeEach(() => {
        member = {
            name: 'Sir Humphrey Bone-regard',
            subtitle: 'Hey Dood-le',
            bio: '',
            twitterLink: 'https://twitter.com/'
        }
    });

    test('active state', (done) => {
        const component = shallow(
            <CardFlip 
                memberName={member.name}
                image={member.image}
                subtitle={member.subtitle}
                bio={member.bio}
                twitterLink={member.twitterLink} />
        )
        
        component.setState({ isActive: true })

        expect(component.find('.active').length).toBe(1)
        done()
    })
    
    test('keyboard mechanics', (done) => {
        const component = mount(
            <CardFlip 
                memberName={member.name}
                image={member.image}
                subtitle={member.subtitle}
                bio={member.bio}
                twitterLink={member.twitterLink} />
        )

        component.find('.toggle-button').simulate('keydown', { key: 'Enter' })

        setTimeout(() => {
            expect(component.find('.active').length).toBe(1)
            done()
        })
    })

    test('Accessibility API testing', (done) => {
        const axeConfig = {
            "rules": {
              "color-contrast": { enabled: false },
              "link-in-text-block": { enabled: false }
            }
        }
        let component = utils.mountToDoc(<CardFlip 
            memberName={member.name}
            image={member.image}
            subtitle={member.subtitle}
            bio={member.bio}
            twitterLink={member.twitterLink} />)
        const domNode = component.getDOMNode()
        axe.run(domNode, axeConfig)
            .then(({ violations }) => {
                if (violations.length) {
                    const err = utils.printViolations(violations)
                    done.fail(err)
                } else {
                    done()
                }
            })
    })
})