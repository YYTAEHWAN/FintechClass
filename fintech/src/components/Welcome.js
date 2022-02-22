
// 컴포넌트 시작은 대문자로 해야함
const Welcome = (props) => {
    console.log(props);
    return (
    <div>
        안녕하세요! {props.age} {props.username} {props.surplus} 님 반갑습니다!
    </div>
    );
  };

export default Welcome;