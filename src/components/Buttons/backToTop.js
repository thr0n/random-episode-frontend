import React from 'react'
import { Link } from 'gatsby'
import { FaArrowUp } from 'react-icons/fa'
import * as backToTopStyles from './backToTop.module.scss'

export class BackToTop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  componentDidMount() {
    var scrollComponent = this
    document.addEventListener('scroll', function (e) {
      scrollComponent.toggleVisibility()
    })
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      })
    } else {
      this.setState({
        is_visible: false
      })
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  render() {
    const { is_visible } = this.state
    const visibleContainer = is_visible ? backToTopStyles.visible : null
    return (
      <div className={`${backToTopStyles.container} ${visibleContainer}`}>
        {is_visible && (
          <Link to="#top">
            <FaArrowUp />
          </Link>
        )}
      </div>
    )
  }
}
