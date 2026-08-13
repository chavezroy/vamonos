const memories = [
  {
    number: "01",
    title: "The Sunday storyteller",
    text: "Steve had a way of turning an ordinary Sunday afternoon into a story worth remembering. He made time slow down, and everyone feel at home.",
  },
  {
    number: "02",
    title: "A steady hand",
    text: "He taught us that showing up matters — for the big milestones, the quiet struggles, and all the everyday moments in between.",
  },
  {
    number: "03",
    title: "His kind of wisdom",
    text: "Work hard. Stay curious. Call your family. And never leave without saying ‘I love you.’ Those lessons live on in all of us.",
  },
];

const values = ["Kindness", "Patience", "Curiosity", "Family"];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="nav-mark" href="#top" aria-label="Steve Walker memorial home">
          SW<span>·</span>
        </a>
        <div className="nav-links">
          <a href="#story">His story</a>
          <a href="#memories">Memories</a>
          <a className="nav-button" href="#tribute">Leave a tribute</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">In loving memory</p>
          <h1>
            Steve
            <br />
            Walker<span className="period">.</span>
          </h1>
          <div className="life-dates">
            <span>1954</span>
            <span className="date-line" aria-hidden="true" />
            <span>2024</span>
          </div>
          <p className="hero-intro">
            A loving father, a loyal friend,
            <br />
            and the heart of our family.
          </p>
        </div>

        <div className="portrait-card" aria-label="Photo placeholder for Steve Walker">
          <div className="portrait-glow" />
          <div className="portrait-initials" aria-hidden="true">SW</div>
          <div className="portrait-label">
            <span>Forever in our hearts</span>
            <span aria-hidden="true">↗</span>
          </div>
        </div>

        <a className="scroll-cue" href="#story">
          <span>Scroll to remember</span>
          <span className="scroll-arrow" aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="story section" id="story">
        <div className="section-index">01 / HIS STORY</div>
        <div className="story-content">
          <p className="story-lead">
            Steve believed the best things in life were simple:
            <em> a full table, an honest laugh, and time together.</em>
          </p>
          <div className="story-columns">
            <p>
              Born in 1954, Steve built a life around the people he loved. As a father, he was our calm in the storm and our loudest cheerleader. He never needed grand gestures to show how much he cared.
            </p>
            <p>
              His legacy is found in the small things: the advice we still hear in his voice, the recipes he never wrote down, and the way he taught us to meet the world with warmth and good humor.
            </p>
          </div>
        </div>
      </section>

      <section className="values" aria-label="What Steve stood for">
        {values.map((value, index) => (
          <div className="value" key={value}>
            <span>0{index + 1}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </section>

      <section className="memories section" id="memories">
        <div className="memories-heading">
          <div className="section-index light">02 / MEMORIES</div>
          <h2>Stories we’ll<br />carry forward.</h2>
          <p>The moments that made him unforgettable.</p>
        </div>
        <div className="memory-list">
          {memories.map((memory) => (
            <article className="memory" key={memory.number}>
              <span className="memory-number">{memory.number}</span>
              <div>
                <h3>{memory.title}</h3>
                <p>{memory.text}</p>
              </div>
              <span className="memory-plus" aria-hidden="true">+</span>
            </article>
          ))}
        </div>
      </section>

      <section className="quote section">
        <div className="quote-mark" aria-hidden="true">“</div>
        <blockquote>
          A father’s love leaves a mark<br />
          that time can never erase.
        </blockquote>
        <p>— The Walker family</p>
      </section>

      <section className="tribute section" id="tribute">
        <div>
          <div className="section-index">03 / CELEBRATE HIS LIFE</div>
          <h2>Share a memory<br />of Steve.</h2>
        </div>
        <div className="tribute-card">
          <p>
            Your stories help keep his spirit close. Add a favorite memory, a lesson he taught you, or simply a few words from the heart.
          </p>
          <a href="mailto:family@example.com?subject=A memory of Steve Walker">
            Leave a tribute <span aria-hidden="true">↗</span>
          </a>
          <small>Opens your email app</small>
        </div>
      </section>

      <footer>
        <div className="footer-mark">SW<span>·</span></div>
        <p>Made with love for Steve Walker</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
