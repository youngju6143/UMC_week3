import React, { Component } from 'react'
import AdPage from './AdPage'

class Ad extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowAd : true}
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }
    
    handleToggleClick() {
        this.setState(prevState => ({
            isShowAd : !prevState.isShowAd
        }))
    }
  render() {
      return (
        <div>
            {this.state.isShowAd ? <AdPage /> : null} 
            <button onClick={this.handleToggleClick}>
                {this.state.isShowAd ? '광고 안보기' : '광고 보기'}
            </button>
        </div>
      )
  }
}

export default Ad