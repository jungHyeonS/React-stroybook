import React from "react";

//메인 버튼 컴포넌트 가져오기
import Button from "./Button";


//버튼 컴포넌트를 사용한다(버튼 스토리에 기본 값이다)
export default {
    component : Button,
    title : "Button",
    argTypes : {clickHandler : {action : "clicked"}}
}

//재사용성을 위해 템플릿 생성
const Template = (args) => <Button {...args}/>


//이후 인수 들만 변경해서 button 컴포넌트에 해당 값들을 전달한다
export const Red = Template.bind({});
Red.args = {
    label : "Red",
    backgroundColor : "red",
    size : "md",
    color:"white"
}

export const Blue = Template.bind({});
Blue.args = {
    label : "Blue",
    backgroundColor : "blue",
    size : "md",
    color:"white" 
}