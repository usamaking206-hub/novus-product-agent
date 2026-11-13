'use client'
import { useState } from 'react'

export default function Home() {
  const [messages, setMessages] = useState([
    {role:'agent', text:'Hi! I am your Product Agent with Novus tracking. Try: "export invoices to csv"'}
  ])
  const [input, setInput] = useState('')

  const send = () => {
    if(!input.trim()) return
    const newMsgs = [...messages, {role:'user', text:input}]
    setMessages(newMsgs)
    setInput('')
    
    // Simulate Novus catching Tool Gap
    setTimeout(()=>{
      setMessages([...newMsgs, {role:'agent', text:`⚠️ Novus Signal: Tool Gap detected!\nYou asked: "${input}"\n\nTool get_invoices() ✅ found\nTool export_csv() ❌ missing\n\n61 users hit this wall in 14 days. Suggested fix: Add export_csv() path.`}])
    }, 700)
  }

  return (
    <div style={{maxWidth:640, margin:'20px auto', padding:16, fontFamily:'system-ui'}}>
      <div style={{background:'#000', color:'#fff', padding:16, borderRadius:16, marginBottom:16}}>
        <h1 style={{margin:0}}>🚀 novus-product-agent</h1>
        <p style={{margin:'8px 0 0', opacity:0.7}}>npx @pendo/novus-cli@latest init — Working ✅</p>
      </div>

      <div style={{border:'1px solid #ddd', borderRadius:16, padding:16, height:340, overflowY:'auto', background:'#fff'}}>
        {messages.map((m,i)=>(
          <div key={i} style={{margin:'12px 0', textAlign: m.role==='user'?'right':'left'}}>
            <span style={{background: m.role==='user'?'#000':'#f3f3f3', color: m.role==='user'?'#fff':'#000', padding:'8px 12px', borderRadius:12, display:'inline-block', whiteSpace:'pre-wrap', maxWidth:'85%'}}>
              {m.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{display:'flex', gap:8, marginTop:12}}>
        <input 
          value={input} 
          onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>e.key==='Enter' && send()}
          placeholder="can you export all my invoices to csv?"
          style={{flex:1, padding:14, borderRadius:12, border:'1px solid #ccc'}}
        />
        <button onClick={send} style={{padding:'14px 20px', background:'#000', color:'#fff', borderRadius:12, border:0}}>Send</button>
      </div>

      <p style={{textAlign:'center', color:'#888', fontSize:12, marginTop:16}}>Built with Pendo Novus • Signals every morning</p>
    </div>
  )
}
