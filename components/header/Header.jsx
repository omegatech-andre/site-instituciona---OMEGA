'use client'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import HeaderSec from '../_ui/HeaderSec/HeaderSec'
import Navbar from '../_ui/navBar/Navbar'


export default function Header() {
  const [fixHeader, setFixHeader] = useState(false)
  const headerRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
  }, [])

  const setFixed = useCallback(() => {
    const bottomOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50
    if (window.scrollY >= headerHeight && !bottomOfPage) {
      setFixHeader(true)
    } else {
      setFixHeader(false)
    }
  }, [headerHeight])

  useEffect(() => {
    window.addEventListener("scroll", setFixed)

    return () => {
      window.removeEventListener("scroll", setFixed)
    }
  }, [setFixed])

  return (
    <>
      {
        fixHeader && (
            <Navbar/>
        )
      }
      <div className="header" ref={headerRef}>
        <HeaderSec />
      </div>
    </>
  )
}