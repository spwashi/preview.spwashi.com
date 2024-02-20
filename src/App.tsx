import './App.css'

interface ISocialMediaCluster {
  tiktok: string,
  instagram: string,
  youtube: string
}
function SocialMediaList({handles}: { handles: ISocialMediaCluster }) {
  return (
    <ul>
      <li><a target="_blank" href={`https://www.tiktok.com/@${handles.tiktok}`}>TikTok</a></li>
      <li><a target="_blank" href={`https://www.instagram.com/` + handles.instagram}>Instagram</a></li>
      <li><a target="_blank" href={`https://youtube.com/@` + handles.youtube}>YouTube</a></li>
    </ul>
  );
}
function WebsiteList(params: { mode: 'host', sites: string[] } | { mode: 'map', sites: { [key: string]: string } }) {
  const {sites, mode} = params;
  if (mode === 'map') {
    return (
      <ul>
        {
          Object.entries(sites).map(([href, site]) => <li key={site}><a target="_blank" href={href}>{site}</a></li>)
        }
      </ul>
    )
  }
  if (mode === 'host') {
    return (
      <ul>
        {
          sites.map((site) => <li key={site}><a href={site}>{new URL(site).host}</a></li>)
        }
      </ul>
    );
  }
}
function Links() {
  return (
    <section>
      <h2>Links</h2>
      <ul>
        <li>
          <h3>Starting Points</h3>
          <WebsiteList mode={'map'} sites={{
            'https://www.etsy.com/shop/tealstripesvibes': 'Etsy',
            'https://tiktok.com/@tealstripesvibes':       'TikTok',
            'https://www.instagram.com/tealstripesvibes': 'Instagram',
          }}/>
        </li>
        <li>
          <h3>Flow</h3>
          <WebsiteList mode={'map'} sites={{
            'https://www.instagram.com/from.bane.land': '[ - ]',
            'https://www.instagram.com/to.boon.land':   '[ . ]',
            'https://www.instagram.com/in.boon.land':   '[ + ]',
          }}/>
        </li>
        <li>
          <h3>Social Media</h3>
          <SocialMediaList handles={{
            tiktok:    'spwashi',
            instagram: 'spwashi',
            youtube:   'spwashi',
          }}/>
        </li>
        <li>
          <h3>Websites</h3>
          <WebsiteList
            mode="host"
            sites={[
              'https://spwashi.com',
              'https://tealstripesvibes.com',
              'https://lore.land',
              'https://boon.land',
              'https://bane.land',
              'https://bone.land',
              'https://boonbanebone.com',
              'https://factshift.com',
              'https://bonk.land',
              'https://honk.land',
            ]}
          />
        </li>
        <li>
          <h3>Community</h3>
          <ul>
            <li>
              <h4>Authors</h4>
              <WebsiteList mode={'map'} sites={{
                'https://rskrules.com': 'RSK',
              }}/>
            </li>
          </ul>
        </li>
        <li>
          <h3>Projects</h3>
          <WebsiteList mode={'map'} sites={{
            '/about/domains/lore.land/': 'Lore.Land',
          }}/>
        </li>
      </ul>
    </section>
  );
}
function Main() {
  return (
    <main>
      <h1>I build software and make art.</h1>
      <section>
        <p>Contact me for web design, development, and marketing services.</p>
        <p>Follow me for engineering and design tips and tricks.</p>
      </section>
      <Links/>
    </main>
  );
}
function Header() {
  return (
    <header>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </header>
  );
}
function App() {
  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}

export default App
