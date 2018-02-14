import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './LikeButton.css'
import HeartGrey from '../images/heart-grey.svg'
import HeartRed from '../images/heart-red.svg'

class LikeButton extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    liked: PropTypes.bool
  }

  classNames() {
    const { liked } = this.props
    let classes = 'like'

    if (liked) { classes += ' liked'}

    return classes
  }
  toggleLike() {
    // this.props.onChange()
    // this.setState({
    //   liked: !this.state.liked
    // })
  }
  render() {
    const { liked } = this.props
    return (
      <div className={ this.classNames() }>
        <button >
          <img className="heart" src={ liked ? HeartRed : HeartGrey } />
          <span className="copy">
            <img className="heart" src={ liked ? HeartRed : HeartGrey } />
          </span>
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </div>
    )
  }
}

export default LikeButton
