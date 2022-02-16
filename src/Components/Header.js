import React, { Component } from 'react';
import git_logo from './Github.png'
import linkedin_logo from './Linkedin_Logo.png'
import hh_logo from './HeadHunter_logo.png'
import tl_logo from './Telegramm_logo.png'


class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var description= this.props.data.description;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Главная</a></li>
            <li><a className="smoothscroll" href="#about">Обо мне</a></li>
	         <li><a className="smoothscroll" href="#resume">Резюме</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Привет, меня зовут {name} и я IOS-разработчик.</h1>
            <h3> Мой родной город - Москва. {description}.</h3>
            <hr />
            <ul className="social">
               <li><a  href='https://github.com/StuLolka'><img className ="imgLogo" src={git_logo}></img></a>
               <a  href='https://www.linkedin.com/in/анастасия-герасимова-888bb41b6/'><img className ="imgLogo" src={linkedin_logo}></img></a>
               <a  href='http://hh.ru/resume/4ed8dab8ff08044c930039ed1f68546670394b'><img className ="imgLogo" src={hh_logo}></img></a>
               <a  href='http://t.me/Belo4kaS'><img className ="imgLogo" src={tl_logo}></img></a>
               </li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
