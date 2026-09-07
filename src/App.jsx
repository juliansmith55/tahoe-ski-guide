import { useEffect, useState } from 'react'

const resorts = [
  {
    rank: 1,
    name: 'Palisades Tahoe',
    label: 'Best overall',
    location: 'Olympic Valley, CA',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Palisades_Tahoe_Village_Elevated.jpg',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat nibh sed justo gravida, vitae pretium neque luctus. Sed feugiat, ipsum at interdum volutpat, nunc arcu dictum neque, sed porttitor urna nibh eget velit.',
    detail:
      'Praesent euismod lacus at sapien finibus, vitae feugiat mauris vestibulum. Cras faucibus justo vitae lorem pulvinar, et tristique massa efficitur. Donec sit amet arcu non augue feugiat feugiat.',
  },
  {
    rank: 2,
    name: 'Kirkwood Mountain',
    label: 'Best for serious terrain',
    location: 'Kirkwood, CA',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Kirkwood_Mountain_Resort%2C_Kirkwood%2C_California_%2821385611049%29.jpg',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Pellentesque at urna vitae dui cursus interdum. Nulla facilisi. Aliquam erat volutpat. Integer tincidunt sem sit amet justo posuere.',
    detail:
      'Mauris aliquam, sapien a feugiat placerat, erat mauris tincidunt tortor, a luctus purus lectus eget nulla. Proin eget tincidunt arcu. Fusce pretium ipsum quis tellus luctus volutpat.',
  },
  {
    rank: 3,
    name: 'Heavenly',
    label: 'Best for views + nightlife',
    location: 'South Lake Tahoe, CA / NV',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Heavenly_Mountain_Resort%2C_Lake_Tahoe%2C_Nevada_%2821581093841%29.jpg',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat enim non odio convallis, at finibus mi fermentum. Vestibulum sed lacus consequat, semper ipsum in, aliquet dui.',
    detail:
      'Aenean gravida eros at mauris facilisis, id varius odio tincidunt. Nunc vulputate magna nec suscipit efficitur. Integer porttitor, sem et luctus eleifend, elit augue gravida purus.',
  },
  {
    rank: 4,
    name: 'Northstar California',
    label: 'Best polished resort experience',
    location: 'Truckee, CA',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Northstar_California_Resort%2C_California%2C_US.jpg',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique lectus quis consequat porta. Nam tincidunt lorem at metus suscipit, a tincidunt urna ultrices. Donec sit amet erat vel turpis feugiat posuere.',
    detail:
      'Sed vitae erat in dolor pretium malesuada. Pellentesque tempor purus vitae orci ultricies, a dignissim tortor pretium. Duis sit amet ex sed erat imperdiet faucibus vel vitae neque.',
  },
  {
    rank: 5,
    name: 'Mt. Rose Ski Tahoe',
    label: 'Best quick-hit mountain',
    location: 'Reno / Incline Village, NV',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Mount_Rose_Ski_Tahoe_-_panoramio.jpg',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra, sapien id luctus congue, lectus enim sollicitudin risus, sed mattis sem velit nec neque. Phasellus ac augue vel sapien pretium luctus.',
    detail:
      'Quisque sit amet lorem in nisl pellentesque congue. Sed a semper risus. Nam feugiat felis non arcu congue, eget egestas libero cursus. In hac habitasse platea dictumst.',
  },
]

const quickLinks = [
  ['01', 'Palisades', 'Best overall'],
  ['02', 'Kirkwood', 'Terrain'],
  ['03', 'Heavenly', 'Views'],
  ['04', 'Northstar', 'Polish'],
  ['05', 'Mt. Rose', 'Access'],
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M14 6l6 6-6 6" />
    </svg>
  )
}

function MountainMark() {
  return (
    <svg viewBox="0 0 58 38" aria-hidden="true" className="mountain-mark">
      <path d="M2 34 17 10l8 13L34 4l22 30H2Z" />
      <path d="m14 15 3-5 4 7M28 14l6-10 8 11" className="snow-line" />
    </svg>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Tahoe Ski Guide home">
        <MountainMark />
        <span>TAHOE / SKI GUIDE</span>
      </a>
      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
        <a href="#rankings" onClick={() => setOpen(false)}>Rankings</a>
        <a href="#method" onClick={() => setOpen(false)}>Method</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
      </nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        <span />
        <span />
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img
        className="hero-image"
        src="https://upload.wikimedia.org/wikipedia/commons/9/97/Palisades_Tahoe_Village_Elevated.jpg"
        alt="Snowy slopes and village at Palisades Tahoe"
      />
      <div className="hero-shade" />
      <div className="hero-snow" />
      <div className="hero-content">
        <div className="eyebrow light"><span /> Independent Tahoe ski guide</div>
        <h1>Top Resorts<br />in Tahoe</h1>
        <div className="hero-footer">
          <p>
            Five mountains. One ranking. A simple guide to choosing where to ski next.
          </p>
          <a href="#rankings" className="round-link" aria-label="Jump to rankings">
            <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="hero-index">01—05</div>
    </section>
  )
}

function QuickCompare() {
  return (
    <section className="quick-wrap" aria-label="Quick ranking overview">
      <div className="quick-grid">
        {quickLinks.map(([num, name, note]) => (
          <a key={num} href={`#resort-${Number(num)}`} className="quick-item">
            <span className="quick-num">{num}</span>
            <span className="quick-name">{name}</span>
            <span className="quick-note">{note}</span>
            <span className="quick-arrow">↘</span>
          </a>
        ))}
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section className="intro" id="rankings">
      <div className="section-kicker">The ranking</div>
      <div className="intro-copy">
        <h2>Where should you ski<br />in Tahoe?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, est sed
          tincidunt posuere, mauris sapien dictum nulla, sit amet blandit eros ligula vitae erat.
          This is placeholder copy for your point of view, criteria, and caveats.
        </p>
      </div>
    </section>
  )
}

function ResortCard({ resort, index }) {
  const reverse = index % 2 === 1
  return (
    <article className={`resort-card ${reverse ? 'reverse' : ''}`} id={`resort-${resort.rank}`}>
      <div className="resort-media">
        <img src={resort.image} alt={`${resort.name} ski resort`} loading="lazy" />
        <div className="image-rank">{String(resort.rank).padStart(2, '0')}</div>
        <div className="image-tag">{resort.label}</div>
      </div>
      <div className="resort-copy">
        <div className="resort-meta">
          <span>#{resort.rank}</span>
          <span>{resort.location}</span>
        </div>
        <h3>{resort.name}</h3>
        <p className="resort-lead">{resort.blurb}</p>
        <p className="resort-detail">{resort.detail}</p>
        <button className="text-link" type="button" onClick={(event) => {
          const detail = event.currentTarget.closest('.resort-copy')?.querySelector('.resort-detail')
          detail?.classList.toggle('show')
          event.currentTarget.textContent = detail?.classList.contains('show') ? 'Show less ↑' : 'Read more →'
        }}>
          Read more →
        </button>
      </div>
    </article>
  )
}

function Method() {
  return (
    <section className="method" id="method">
      <div>
        <div className="section-kicker light-kicker">How this works</div>
        <h2>A ranking with<br />a point of view.</h2>
      </div>
      <div className="method-copy">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor eros vitae lorem
          commodo, ac condimentum nibh facilisis. Use this area to explain how you weigh terrain,
          snow, crowds, access, food, cost, and whatever else matters to you.
        </p>
        <div className="method-grid">
          <div><strong>01</strong><span>Terrain</span></div>
          <div><strong>02</strong><span>Snow</span></div>
          <div><strong>03</strong><span>Access</span></div>
          <div><strong>04</strong><span>Experience</span></div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about" id="about">
      <div className="about-rule" />
      <div className="about-grid">
        <div className="section-kicker">About the guide</div>
        <div>
          <p className="about-large">
            Built for people who want an opinion, not another list of resort stats.
          </p>
          <p className="about-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id libero posuere,
            pulvinar massa et, suscipit lorem. Replace this with a little about you and why anyone
            should care about your ranking.
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <MountainMark />
        <div className="footer-title">TAHOE / SKI GUIDE</div>
        <a href="#top">Back to top ↑</a>
      </div>
      <div className="footer-bottom">
        <span>Sample editorial site · React + Vite</span>
        <span>Photography: Wikimedia Commons · see IMAGE_CREDITS.md</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <QuickCompare />
        <Intro />
        <section className="resort-list">
          {resorts.map((resort, index) => (
            <ResortCard key={resort.name} resort={resort} index={index} />
          ))}
        </section>
        <Method />
        <About />
      </main>
      <Footer />
    </>
  )
}
