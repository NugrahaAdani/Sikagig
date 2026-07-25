import { useEffect, useState } from 'react'

interface TypewriterTextProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

type Phase = 'typing' | 'pausing' | 'deleting'

export default function TypewriterText({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1200,
  className = '',
}: TypewriterTextProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [phase, setPhase] = useState<Phase>('typing')

  useEffect(() => {
    const currentWord = words[wordIndex]

    const delay =
      phase === 'typing'
        ? typingSpeed
        : phase === 'deleting'
          ? deletingSpeed
          : pauseDuration

    const timeoutId = window.setTimeout(() => {
      if (phase === 'typing') {
        const nextLength = displayedText.length + 1

        setDisplayedText(currentWord.slice(0, nextLength))

        if (nextLength === currentWord.length) {
          setPhase('pausing')
        }

        return
      }

      if (phase === 'pausing') {
        setPhase('deleting')
        return
      }

      const nextText = displayedText.slice(0, -1)
      setDisplayedText(nextText)

      if (nextText.length === 0) {
        setWordIndex((currentIndex) => {
          return (currentIndex + 1) % words.length
        })

        setPhase('typing')
      }
    }, delay)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [
    displayedText,
    deletingSpeed,
    pauseDuration,
    phase,
    typingSpeed,
    wordIndex,
    words,
  ])

  return (
    <span className={className}>
      <span>{displayedText}</span>
      <span className="typewriter-caret" aria-hidden="true">
        |
      </span>
    </span>
  )
}