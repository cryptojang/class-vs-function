import { Component } from "react";

class ClassComp extends Component {
  // 정의해놓은 component 를 extend 해서 classcomp 만듬. 컴포의 모든 기능 내포

  //solidity에도 등장하는 개념. 클래스 컴포넌트가 생성할 때 실행되는 함수. 생성자. 생성될 때 실행되어야 하는 것들.
  constructor() {
    //super는 부모 지칭. 여기서는 Component
    super(); //부모에 접근하는 친구 / ex. props 전달할 때?

    //this ClassComp 지칭한다고 생각하면 됨
    this.state = {
      count: 0,
    };

    this.onClickCount = this.onClickCount.bind(this); //bind 문법 써서 onclick함수를 classcomp에 등록시켰다
  }

  onClickCount() {
    this.setState((state) => ({ count: state.count + 1 })); //setCount 역할함
  }

  //이 함수는 이미 컴포넌트 내장 함수라 bind 시켜주지 않아도 됨
  componentDidMount() {
    console.log(`Mount Comp: ${this.state.count}`);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`Update Comp: ${this.state.count}`);
  }
  componentWillUnmount() {
    console.log(`Remove Comp: ${this.state.count}`); //컴포 완전 파괴될 때, 유즈이펙트 클리어함수처럼 재렌더링 아니라
  }

  //render()는 Component 속에 이미 있던 함수
  render() {
    return (
      <div className="bg-red-300 w-96 h-96 flex justify-center items-center text-4xl">
        {this.state.count}
        <button onClick={this.onClickCount}>+</button>
      </div>
    );
  }
}

export default ClassComp;
