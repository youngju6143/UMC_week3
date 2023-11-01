import React, { Component } from 'react'

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn : true}
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }
    
    handleLoginClick() {
        this.setState({isLoggedIn : true})
    }

    handleLogoutClick() {
        this.setState({isLoggedIn : false})
    }

  render() {
      return (
        <div>
            {this.state.isLoggedIn ? 
                (<div  style={{display:"flex"}}>
                    <button className='loginControl_button' onClick={this.handleLogoutClick}>
                        로그인
                    </button>
                    <p className='loginControl_text'>로그인 해주세요!</p>
                </div>)
                :
                (<div  style={{display:"flex"}}>
                    <button className='loginControl_button' onClick={this.handleLoginClick}>
                        로그아웃
                    </button>
                    <p className='loginControl_text'>환영합니다!</p>
                </div>)
            }
        </div>
      )
  }
}

export default LoginControl