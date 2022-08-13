## JSX 문법
1. className

<div class="APP"></div> x
<div className="APP"></div> 0

2. 변수 꽃을 땐 중괄호 문법 {변수명}
let post = 'test';   
<h3 id={post}>{post}</h3>   

3. style 넣을 때
 style={{이름:'값', 이름2:'값2'}}

## useState

- let data1 = [1,2,3];   
let data2 = data1;   
console.log(data1 === data2);   
true   
--- 메모리에 할당된 주소 값의 복사 한 것이라 true   

- let data1 = [1,2,3];   
let data2 = [...data1];   
console.log(data1 === data2)   
false   
--- date2가 data1을 복사하여 메모리에 할당시 주소 값을 새로 생성하여 false   

 
- let data1 = [1,2,3];   
let data2 = data1;  //복사   
data2[0] = 1000;  //data2 내부 변경   
console.log(data2 === data1)   
true   
--- 주소 값이 같아서 true   


## 컴포넌트
컴포넌트 만드는 세 가지 스텝   
1. function 만들기   
2. return () 안에 html 담기   
3. <함수명></함수명> 쓰기   

- 의미 없는 div는   
<>   
</>   
이렇게 사용 가능   

--- 

## 외워야 하는 것 들   
1. state 만드는 법   
2. props 전송하는 법   
3. 컴포넌트 만든느 법   
4. UI 만드는 step   

--- 


## spread 연산자를 사용하기   
기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열을 만들어줍니다.
...users 를 통해 기존 배열을 복사해서 새 배열을 생성했습니다.
user 는 복사한 배열에 새 항목을 추가하기 위해 작성했습니다.   

setUsers([...users, user]);   
