import React, { useState, useEffect } from 'react'

const TypewritterEffect = ({textToType, typeSpeed, deletingSpeed, pauseDuration}) => {
    const [displayedText, setDisplayedText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        let timeout
        if (!isDeleting && currentIndex < textToType.length) {
            timeout = setTimeout(() => {
                setDisplayedText(prevText => prevText + textToType[currentIndex])
                setCurrentIndex(prevIndex => prevIndex + 1)
            }, typeSpeed)
        } else if (isDeleting && currentIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayedText(prevText => prevText.slice(0, -1))
                setCurrentIndex(prevIndex => prevIndex - 1)
            }, deletingSpeed)
        } else if (currentIndex === textToType.length && !isDeleting) {
            timeout = setTimeout(() => {
                setIsDeleting(true)
            }, pauseDuration)
        } else if (currentIndex === 0 && isDeleting) {
            setIsDeleting(false)
        }


        return () => clearTimeout(timeout)
    }, [currentIndex, textToType, isDeleting])


  return (
    <>
        <p className="font-mono text-lg min-h-8 text-xl">{displayedText}</p>
    </>
  )
}

export default TypewritterEffect