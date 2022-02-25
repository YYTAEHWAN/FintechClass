import React from 'react'
import HeaderWhite from '../components/HeaderWhite'

const AuthPage = () => {

    const handleAuthButtonClick = () => {
        console.log("사용자 인증 버튼을 누르셨습니다")
        // opne new window
        let tmpwindow = window.open("about:blank")
        const client_ID = `9e2b2ee7-9f49-44f2-9a17-7b4b8244382d` // 실사용시 보안 주의!
        tmpwindow.location.href = 
        `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${client_ID}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`
                    // 클라이언트 ID 같은 중요한 내용들은 조심해서 push 하기
    
    }


  return (
    <div>
        <HeaderWhite title={"사용자 인증"}></HeaderWhite>
        <button onClick={handleAuthButtonClick}>사용자 인증 받기</button>
    </div>
  )
}

export default AuthPage