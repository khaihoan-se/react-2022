import React, { useEffect, useState } from 'react'
import { Nav, Container } from "components/partials/Header.style"
const Header = () => {
  const [isTop, setIsTop] = useState(false);
  useEffect(() => {
    const handleActiveHeader = () => {
      setIsTop(window.scrollY > 80)
    }
    document.addEventListener('scroll', handleActiveHeader)
  }, [])
  return (
    <Nav isTop={isTop}>
      <Container>
        Header
      </Container>
    </Nav>
  )
}

export default Header