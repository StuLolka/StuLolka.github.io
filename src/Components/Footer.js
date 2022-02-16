import React, { Component } from 'react';
import git_logo from './Github.png'
import linkedin_logo from './Linkedin_Logo.png'
import hh_logo from './HeadHunter_logo.png'
import tl_logo from './Telegramm_logo.png'

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
        <ul className="social">
               <li><a  href='https://github.com/StuLolka'><img className ="imgLogoFoot" src={git_logo}></img></a>
               <a  href='https://www.linkedin.com/in/анастасия-герасимова-888bb41b6/'><img className ="imgLogoFoot" src={linkedin_logo}></img></a>
               <a  href='http://hh.ru/resume/4ed8dab8ff08044c930039ed1f68546670394b'><img className ="imgLogoFoot" src={hh_logo}></img></a>
               <a  href='http://t.me/Belo4kaS'><img className ="imgLogoFoot" src={tl_logo}></img></a>
               </li>
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2022 DG and I am Hyper</li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
