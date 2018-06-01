import React from 'react'
import axe from 'axe-core'
import { shallow, mount, simulate } from 'enzyme'
import utils from '../../../test/utils'

import Menu from '../menu'
import menuData from '../../data/menu-data'

describe('Menu', () => {
    let component
    beforeEach(() => {
        component = mount(
            <Menu menuData={menuData} />
        )
    })
    test('the basics', (done) => {
        expect(component.find('.menu').length).toBe(1)
        done()
    })
    test('keyboard mechanics - level 1', (done) => {
        component.find('button#menuitem0').simulate('keydown', { key: 'ArrowDown' })

        expect(component.find('.menu-item.active button').is('#menuitem1')).toBe(true);
        done()
    })
    test('keyboard mechanics - level 2', (done) => {
        component.find('button#menuitem0').simulate('keydown', { key: 'ArrowRight' })
        expect(component.find('.sub-menu').first().prop('aria-activedescendant')).toBe('submenuitem0_0')
        const focusedElement = document.activeElement
        expect(focusedElement.getAttribute('id')).toEqual('submenuitem0_0')
        done()
    })
})
