import { useState, useEffect } from 'react'
import './App.css'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://jjultmnftsfaeceborib.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqdWx0bW5mdHNmYWVjZWJvcmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg4NDgwOTcsImV4cCI6MjA4NDQyNDA5N30.XxQapLH6d9ytglyljnH4z0WPQ3qsCLvLYY-KuL79b_8'
)

function App() {
  const [messages, setMessages] = useState([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

const fetchMessages = async () => {
  const { data } = await supabase
    .from('guestbook')
    .select('*')
    .order('created_at', { ascending: false })
  if (data) setMessages(data)
}

const submit = async () => {
  if (!name || !message) return alert('Fill in all fields!')
  await supabase.from('guestbook').insert([{ name, message }])
  setName('')
  setMessage('')
  fetchMessages()
}

  useEffect(() => { fetchMessages() }, [])

  return (
    <div className="app">

      {/* HEADER */}
      <header>
        <div className="logo-row">
          <div className="pacman"></div>
          <h1>JULIUS C. NARIO</h1>
          <div className="pacman flip"></div>
        </div>
        <p className="subtitle">// PROFILE.EXE — WEBPROG IT242 //</p>
        <div className="score-bar">
          <span>HI-SCORE: 99999</span>
          <span className="blink">▶ INSERT COIN ◀</span>
          <span>LIVES: 🟡🟡🟡</span>
        </div>
      </header>

      <nav>
        <a href="#about">[ ABOUT ]</a>
        <a href="#skills">[ SKILLS ]</a>
        <a href="#projects">[ PROJECTS ]</a>
        <a href="#guestbook">[ GUESTBOOK ]</a>
      </nav>

      {/* GHOST PARADE */}
      <div className="ghost-parade">
        <div className="pac-runner"></div>
        <div className="ghost-runner g1">👻</div>
        <div className="ghost-runner g2">👻</div>
        <div className="ghost-runner g3">👻</div>
        <div className="ghost-runner g4">👻</div>
      </div>

      <main>

        {/* ABOUT */}
        <section id="about" className="card">
          <h2 className="section-title">▶ PLAYER 1 — ABOUT</h2>
          <div className="hero">
            <div className="avatar-wrap">
              <div className="avatar">
                <div className="avatar-pacman"></div>
                <div className="avatar-eye"></div>
              </div>
              <span className="ghost-deco top">👻</span>
              <span className="ghost-deco bottom">🔵</span>
            </div>
            <div className="profile-info">
              <h2 className="profile-name">JULIUS CESAR L. NARIO</h2>
              <div className="tags">
                <span className="tag">IT STUDENT</span>
                <span className="tag">WEBPROG-IT242</span>
                <span className="tag">FULL STACK</span>
              </div>
              <p className="bio">Player character pursuing a degree in Information Technology. Skilled in crafting arcade-grade web applications using React, Nest.js, Flask, Supabase, and more. Currently on Level: Finals.</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="card">
          <h2 className="section-title">▶ POWER-UPS — SKILLS</h2>
          <div className="skills-grid">
            {[['REACT','85'],['NEST.JS','75'],['SUPABASE','80'],['VUE.JS','70'],['GITHUB','90'],['VERCEL','88'],['RENDER','78'],['FLASK','65']].map(([skill, lvl]) => (
              <div className="skill-item" key={skill}>
                <div className="skill-name">{skill}</div>
                <div className="skill-bar-wrap">
                  <div className="skill-bar" style={{width: lvl+'%'}}></div>
                </div>
                <div className="skill-lvl">LVL {lvl}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="card">
          <h2 className="section-title">▶ HIGH SCORES — PROJECTS</h2>
          <div className="projects-grid">

            <div className="project-card">
              <h3>🟡 STUDY N GO ARCADE</h3>
              <p>Task tracker with arcade theme. React + NestJS + Supabase.</p>
              <div className="btn-row">
                <a className="btn btn-green" href="https://study-scheduler-webprog-git-main-juls-narios-projects.vercel.app" target="_blank">PLAY ►</a>
                <a className="btn btn-yellow" href="https://github.com/JulsNario/study-scheduler-webprog" target="_blank">CODE</a>
              </div>
            </div>

            <div className="project-card">
              <h3>🎮 NFS PORTFOLIO</h3>
              <div className="img-box">
                <img src="/nfs_portfolio.png" alt="NFS Portfolio"/>
              </div>
              <p>Personal portfolio with Need for Speed theme. Built with Flutter.</p>
              <span className="btn-locked">LOCKED 🔒</span>
            </div>

            <div className="project-card">
              <h3>📢 CAMPUS HUB</h3>
              <div className="img-box">
                <img src="/campus_hub.png" alt="Campus Hub"/>
              </div>
              <p>Decentralized community platform for campus news.</p>
              <span className="btn-locked">LOCKED 🔒</span>
            </div>

            <div className="project-card">
              <h3>🛒 SARI-SARI TRADE</h3>
              <div className="img-box">
                <img src="/sari_sari.png" alt="Sari-Sari Trade"/>
              </div>
              <p>Local barter hub for food and goods. UI/UX Design.</p>
              <span className="btn-locked">LOCKED 🔒</span>
            </div>

          </div>
        </section>

        {/* GUESTBOOK */}
        <section id="guestbook" className="card">
          <h2 className="section-title">▶ GUESTBOOK</h2>
          <div className="gb-form">
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="YOUR NAME" />
            <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="LEAVE A MESSAGE..." />
            <button className="btn btn-green" onClick={submit}>▶ INSERT COIN</button>
          </div>
          <div className="messages">
            {messages.map(m => (
              <div className="message-item" key={m.id}>
                <div className="msg-name">🟡 {m.name}</div>
                <div className="msg-text">{m.message}</div>
                <div className="msg-time">{new Date(m.created_at).toLocaleString()}</div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <div className="ghost-parade">
        <div className="pac-runner"></div>
        <div className="ghost-runner g1">👻</div>
        <div className="ghost-runner g2">👻</div>
        <div className="ghost-runner g3">👻</div>
      </div>

      <footer>
        <p>© 2026 JULIUS CESAR L. NARIO // WEBPROG-IT242</p>
      </footer>

    </div>
  )
}

export default App