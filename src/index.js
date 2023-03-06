// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';

// const navbar = (
//   <nav>
//       <h1>Azhar Nation</h1>
//       <ul>
//           <li>Pricing</li>
//           <li>About</li>
//           <li>Contact</li>
//       </ul>
//   </nav>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   navbar
// );


//Build a React info site- Part-1

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import img from "./assets/react.png"
// import './index.css'

// const page =(
//   <div className='body'>
//     <img src={img} width="100px"></img>
//     <h1>Fun Facts About React</h1>
//     <ul>
      // <li>Was first released in 2013</li>
      // <li>Was Originally created by Jordan Walke</li>
      // <li>Has well over 100K stars on Github</li>
      // <li>Is maintained by facebook</li>
      // <li>Powers thousands of enterprise apps, including mobile apps</li>
      
//     </ul>
//   </div>
// )
// console.log(page)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   page
// );



//Build a React info site - Custom Components(15)

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import img from "./assets/react.png"
// import './index.css'

// function Page(){
//   return (
//     <div className='body'>
//       <header>
//         <nav>
//              <img src={img} width="100px"></img>

//         </nav>
//       </header>
//     <h1>Reasons why I'm excited to Learning react</h1>
//     <ol>
//       <li>It's popular library, so I'll be able to fit in with the cool kids!</li>
//       <li>I'm more likely to get the job as a developer if I know React</li>
      
      
//     </ol>
//     <footer>
//       <small>© 2023 Azh Devlopment. All rights reserved</small> 
//       {/* alt+ 0169 */}
//     </footer>
//   </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Page/>
// );


//Build a React info site - Parent/Child components(16)

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import img from "./assets/react.png"
// import './index.css'

// function Header(){
//   return(
 
//       <header>
//         <nav>
//              <img src={img} width="100px"></img>

//         </nav>
//       </header>
    
//   )
// }

// function MainContent(){
//   return(
//     <div>
//       <h1>Reasons why I'm excited to Learning react</h1>
//     <ol>
//       <li>It's popular library, so I'll be able to fit in with the cool kids!</li>
//       <li>I'm more likely to get the job as a developer if I know React</li>
      
      
//     </ol>
//     </div>
//   )
// }

// function Footer(){
//   return(
//     <footer>
//       <small>© 2023 Azh Devlopment. All rights reserved</small> 
//       {/* alt+ 0169 */}
//     </footer>
//   )
// }

// function Page(){
//   return (
//     <div className='body'>
//       <Header/>
//     <MainContent/>
//     <Footer/>
//   </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Page/>
// );

//Build a React info site - Styling with classes

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import img from "./assets/react.png"
// import './index.css'

// function Header(){
//   return(
 
//       <header className='header'>
//         <nav className='nav'>
//              <img src={img} className="img"></img>
//           <ul className='nav-items'>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//           </ul>
//         </nav>
//       </header>
    
//   )
// }

// function MainContent(){
//   return(
//     <div>
//       <h1>Reasons why I'm excited to Learning react</h1>
//     <ol>
//       <li>It's popular library, so I'll be able to fit in with the cool kids!</li>
//       <li>I'm more likely to get the job as a developer if I know React</li>
      
      
//     </ol>
//     </div>
//   )
// }

// function Footer(){
//   return(
//     <footer className='footer'>
//       <small>© 2023 Azh Devlopment. All rights reserved</small> 
//       {/* alt+ 0169 */}
//     </footer>
//   )
// }

// function Page(){
//   return (
//     <div className='body'>
//       <Header/>
//     <MainContent/>
//     <Footer/>
//   </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Page/>
// );


//Build a React info site - Organize Components

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Header from './Header';
// import MainContent from './MainContent';
// import Footer from './Footer';
// import './index.css'



// function Page(){
//   return (
//     <div className='body'>
//       <Header/>
//     <MainContent/>
//     <Footer/>
//   </div>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Page/>
// );


//Build a React info site - Project Setup(23,24,25)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);
