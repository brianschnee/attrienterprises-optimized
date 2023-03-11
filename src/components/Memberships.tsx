type MembershipProps = {
  imgSrc: string
  altText: string
}

const membershipData = [
  {
    imgSrc: './assets/memberships/abc.png',
    altText: 'Assosciated Builders and Contractors Logo'
  },
  {
    imgSrc: './assets/memberships/goldshovelstandard.png',
    altText: 'Gold Shovel Standard Logo'
  },
  {
    imgSrc: './assets/memberships/greenbuildingcouncil.png',
    altText: 'U.S. Green Building Council Logo'
  },
  {
    imgSrc: './assets/memberships/nrca.png',
    altText: 'National Roofing Contractors Assosciation'
  },
  {
    imgSrc: './assets/memberships/regionalalliance.png',
    altText: 'The Regional Alliance for Small Contractors Logo'
  },
  {
    imgSrc: './assets/memberships/uschamber.png',
    altText: 'U.S. Chamber of Commerce Logo'
  },
  {
    imgSrc: './assets/memberships/rwca.png',
    altText: 'Roofing Assosciation of New York Logo'
  }
]

const Membership = ({ imgSrc, altText }: MembershipProps) => {
  return <img src={imgSrc} alt={altText} />
}

export default function Memberships() {
  return (
    <section id="memberships" className="horizontal-padding">
      <h2 className="section-title">Associations and Memberships</h2>

      <div id="membership-logos" className="row">
        {membershipData.map(({ imgSrc, altText }) => {
          return <Membership imgSrc={imgSrc} altText={altText} />
        })}
      </div>
    </section>
  )
}