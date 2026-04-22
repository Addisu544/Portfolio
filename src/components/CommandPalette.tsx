import { useEffect, useMemo, useRef, useState } from 'react'
import { portfolio } from '../data/portfolio'

type Command = {
  id: 'resume' | 'github' | 'contact'
  label: string
  hint: string
  run: () => void
}

export function CommandPalette() {
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const commands = useMemo<Command[]>(() => {
    const { person } = portfolio
    return [
      {
        id: 'resume',
        label: 'resume',
        hint: 'Download CV',
        run: () => {
          window.location.assign(person.links.resumePath)
        },
      },
      {
        id: 'github',
        label: 'github',
        hint: 'Open GitHub',
        run: () => {
          window.open(person.links.github, '_blank', 'noreferrer')
        },
      },
      {
        id: 'contact',
        label: 'contact',
        hint: 'Scroll to contact',
        run: () => {
          document.getElementById('contact')?.scrollIntoView({ block: 'start', behavior: 'smooth' })
        },
      },
    ]
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) => c.label.includes(q))
  }, [commands, query])

  function open() {
    const dialog = dialogRef.current
    if (!dialog) return
    setIsOpen(true)
    setQuery('')
    if (!dialog.open) dialog.showModal()
    queueMicrotask(() => inputRef.current?.focus())
  }

  function close() {
    const dialog = dialogRef.current
    if (!dialog) return
    setIsOpen(false)
    setQuery('')
    if (dialog.open) dialog.close()
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const isK = e.key.toLowerCase() === 'k'
      const isCmdK = (e.ctrlKey || e.metaKey) && isK
      if (isCmdK) {
        e.preventDefault()
        if (dialogRef.current?.open) close()
        else open()
        return
      }
      if (e.key === 'Escape' && dialogRef.current?.open) {
        e.preventDefault()
        close()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <dialog
      ref={dialogRef}
      className="palette"
      aria-label="Command palette"
      onClose={close}
      onClick={(e) => {
        if (e.target === dialogRef.current) close()
      }}
    >
      <form
        method="dialog"
        className="paletteInner"
        onSubmit={(e) => {
          e.preventDefault()
          const first = filtered[0]
          if (!first) return
          close()
          first.run()
        }}
      >
        <label className="srOnly" htmlFor="palette-input">
          Command
        </label>
        <input
          id="palette-input"
          ref={inputRef}
          className="paletteInput"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type: resume · github · contact"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          disabled={!isOpen}
        />

        <div className="paletteList" role="listbox" aria-label="Commands">
          {filtered.map((c) => (
            <button
              key={c.id}
              type="button"
              className="paletteItem"
              onClick={() => {
                close()
                c.run()
              }}
              disabled={!isOpen}
            >
              <span className="paletteCmd">{c.label}</span>
              <span className="paletteHint">{c.hint}</span>
            </button>
          ))}
          {!filtered.length ? <div className="paletteEmpty">No matches</div> : null}
        </div>
      </form>
    </dialog>
  )
}

