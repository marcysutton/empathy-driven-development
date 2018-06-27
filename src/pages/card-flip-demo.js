import React, { Component } from 'react'
import CardFlip from '../components/card-flip'

const members = [{
  name: 'Rainier McCheddarton',
  headshot: require('../images/rainier-headshot.jpg'),
  subtitle: 'Labradoodle, squeaker, cheese fan',
  bio: 'Doggo ipsum very hand that feed shibe heckin good boys and girls fat boi much ruin diet you are doing me the shock wrinkler length boy, I am bekom fat lotsa pats dat tungg tho shooberino.',
  twitterLink: 'http://twitter.com'
},
{
  name: 'Bagley Fluffpants',
  headshot: require('../images/bagley.jpg'),
  subtitle: 'Cheshire cat, supreme loaf',
  bio: "The door is opening! how exciting oh, it's you, meh drink water out of the faucet. Spend six hours per day washing, but still have a crusty butthole, so lies down or sit on human they not getting up ever, but lick human with sandpaper tongue.",
  twitterLink: 'http://twitter.com'
}]

class CardFlipDemo extends Component {
  render() {
    return (
        <div>
            <CardFlip
              member={members[0]}
              memberName={members[0].name}
              image={members[0].headshot}
              subtitle={members[0].subtitle}
              bio={members[0].bio}
              twitterLink={members[0].twitterLink}
            />
            <CardFlip
              memberName={members[1].name}
              image={members[1].headshot}
              subtitle={members[1].subtitle}
              bio={members[1].bio}
              twitterLink={members[1].twitterLink}
            />
        </div>
    )
  }
}

export default CardFlipDemo
