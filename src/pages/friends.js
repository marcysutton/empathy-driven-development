import React from 'react'
import CardFlip from '../components/card-flip/'

import Layout from "../components/layout"
import SEO from "../components/seo"
import friends from "../data/friend-data"

const FriendsPage = () => (
  <Layout>
    <SEO title="Which friends can come" />
    <div>
      <CardFlip
        member={friends[0]}
        memberName={friends[0].name}
        image={friends[0].headshot}
        subtitle={friends[0].subtitle}
        bio={friends[0].bio}
        twitterLink={friends[0].twitterLink}
      />
      <CardFlip
        memberName={friends[1].name}
        image={friends[1].headshot}
        subtitle={friends[1].subtitle}
        bio={friends[1].bio}
        twitterLink={friends[1].twitterLink}
      />
      <CardFlip
        memberName={friends[2].name}
        image={friends[2].headshot}
        subtitle={friends[2].subtitle}
        bio={friends[2].bio}
        twitterLink={friends[2].twitterLink}
      />
    </div>
  </Layout>
)

export default FriendsPage
