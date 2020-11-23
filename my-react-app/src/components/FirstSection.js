import React from 'react'
import IronhackLogo from '../ironhack-logo.svg'
import MenuIcon from '../menu-top.svg'
import ReactLogo from '../react-logo.svg'


function FirstSection () {
    return (
       <div class="section1">
       <img src={ReactLogo} class="React-logo"/>
       <img src={ReactLogo} class="React-logo1"/>
       <img src={ReactLogo} class="React-logo2"/>
       <img src={ReactLogo} class="React-logo3"/>
       <img src={ReactLogo} class="React-logo4"/>
       <img src={ReactLogo} class="React-logo5"/>
        <div class="logos">
        <img src={IronhackLogo} class="ironhacklogo"/>
        <img src={MenuIcon} class="menu-icon"/>
        </div>
        <div class="text-section1">
        <h1 class="say-hello">Say hello to ReactJS</h1>
        <p class="say-hello-p">You will learn how to use the most popular frontend libray, and become a super ninja developer</p>
        <button type="button" class="button">Awesome!</button>
        </div>
       </div>
    )
}
export default FirstSection