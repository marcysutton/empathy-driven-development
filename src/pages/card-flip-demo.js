import React, { Component } from 'react'
import AnnounceDocTitle from 'react-announce-doc-title'
import CardFlip from '../components/card-flip'

const member = {
  name: 'Rainier McCheddarton',
  headshot: require('../images/rainier-headshot.jpg'),
  subtitle: 'Labradoodle, squeaker, cheese fan',
  bio: 'Doggo ipsum very hand that feed shibe heckin good boys and girls fat boi much ruin diet you are doing me the shock wrinkler length boy, I am bekom fat lotsa pats dat tungg tho shooberino.',
  twitterLink: 'http://twitter.com'
}

class CardFlipDemo extends Component {
  render() {
    return (
      <AnnounceDocTitle title='Card Flip - Component Library'>
        <div>
            <CardFlip
              memberName={member.name}
              image={member.headshot}
              subtitle={member.subtitle}
              bio={member.bio}
              twitterLink={member.twitterLink}
            />
        </div>
      </AnnounceDocTitle>
    )
  }
}

export default CardFlipDemo
