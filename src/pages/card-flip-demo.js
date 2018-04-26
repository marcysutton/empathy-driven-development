import React, { Component } from 'react'
import CardFlip from '../components/card-flip'

const member = {
  name: 'Rainier McCheddarton',
  headshot: require('../images/rainier-headshot.jpg'),
  subtitle: 'Labradoodle, squeaker, cheese fan',
  bio: 'Doggo ipsum very hand that feed shibe heckin good boys and girls fat boi much ruin diet you are doing me the shock wrinkler length boy, I am bekom fat lotsa pats dat tungg tho shooberino.'
}

class CardFlipDemo extends Component {
  render() {
    return (
        <div>
            <CardFlip
              memberName={member.name}
              image={member.headshot}
              subtitle={member.subtitle}
              bio={member.bio}
            />
        </div>
    )
  }
}

export default CardFlipDemo
