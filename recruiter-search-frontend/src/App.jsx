import React, { useState } from 'react'

export default function App() {
  const [company, setCompany] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  async function handleSearch(e) {
    e.preventDefault()
    if (!company) return
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const resp = await fetch(`http://localhost:4000/api/search?company=${encodeURIComponent(company)}`)
      if (!resp.ok) throw new Error('Search failed: ' + resp.status)
      const data = await resp.json()
      setResult(data)
    } catch (err) {
      setError(err.message || 'Error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>Recruiter Search</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Enter company name" />
        <button disabled={!company || loading}>{loading ? 'Searching...' : 'Search'}</button>
      </form>
      {error && <div className="error">{error}</div>}
      {result && (
        <div className="results">
          <h2>Results for: {result.company}</h2>
          <p><strong>Domain:</strong> {result.domain || 'Not found'}</p>
          <p><strong>Phone:</strong> {result.phone || 'Not found'}</p>

          <h3>Emails</h3>
          {result.emails && result.emails.length > 0 ? (
            <ul>
              {result.emails.map((e, idx) => (
                <li key={idx}>{e.value} {e.position ? `- ${e.position}` : ''} (confidence: {e.confidence})</li>
              ))}
            </ul>
          ) : <p>No emails found.</p>}

          <h3>LinkedIn Profiles</h3>
          {result.linkedinProfiles && result.linkedinProfiles.length > 0 ? (
            <ul>
              {result.linkedinProfiles.map((p, idx) => (
                <li key={idx}><a href={p.link} target="_blank" rel="noreferrer">{p.title}</a> — {p.snippet}</li>
              ))}
            </ul>
          ) : <p>No LinkedIn profiles found.</p>}
        </div>
      )}
    </div>
  )
}
