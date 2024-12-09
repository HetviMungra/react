const http = require("http");
const port = 1006;

const portHandler = (req,res)=>{
    res.write (`
     <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node.js</title>
      <style>
        body {
          margin: 0;
          padding: 0;
        }
          a{
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    font-weight: bold;
}

          header{
            /* position: fixed; */
            border: 1px solid black;

        }
        .navbar{
            display: flex;
            height: 5rem;
            justify-content: space-between;
            align-items: center;
            padding-top: 1rem;

            border-bottom: 1px solid rgb(255, 255, 255);
            background-color: rgb(12,60,96);
        }

        /* logo style  */
        .logo h1{
            /* width: rem; */
            height: 4rem;
            font-size: 20px;
            line-height: 50px;
            color: white;
            margin-left:1rem;
            letter-spacing: 1px;
            font-weight: lighter;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            

        }

        .hamburger-menu{
            padding-right: 1.5rem;
            cursor: pointer;
        }

        .hamburger-menu .line{
          display: block;
          width:2.5rem;
          height: 2px;
          margin-bottom: 10px;
          background-color: black;
          cursor: pointer;
        }

        .nav-menu{
            position: fixed;
            width: 94%;
            top: 6rem;
            left: 18px;
            line-height: 50px;
            background-color: rgb(255, 255, 255);
            font-weight: 600;

        }
        .nav-menu a{
            display: block;
            text-align: center;
            padding: 5px 0;
            color: white;
            font-size: 18px;
            font-weight: lighter;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        .nav-menu a:hover{
        text-decoration: underline;
        color: aqua;

        }

        .hide{
            display: none;
        }
            @media screen and (min-width:576px){
    .navbar{
        justify-content: space-around;
    }
    .nav-menu{
        display: block;
        position: static;
        width: auto;
        margin-right:20px;
        background: none;
    }
    .nav-menu a{
        display: inline-block;
        padding: 15px 20px;
    }
    .nav-menu a:hover{
        color: aqua;
    }
    .hamburger-menu{
        display: none;
    }
}

        .container {
          height: 600px;
          width: 100%;
          background: url("https://static.wixstatic.com/media/82fcd3_47a465bb9c6f4b52a0cc83f281806af8~mv2.jpg") no-repeat center center;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .text{
         height: 260px;
          width: 650px;
           margin-top: 22%;
          background-color :white;
        }
        .text h1 {
          color: rgb(7,33,54);
          font-size: 3rem;
          text-align: center;
        }
          .text h4 {
         color: rgb(7,33,54);
          font-size: 2rem;
          text-align: center;
        }
          .text button{
                border: 1px solid rgb(7,33,54);
                height: 50px;
                width: 200px;
                color:rgb(7,33,54) ;
                font-weight: 600;
                background-color: transparent;
                margin-top: -45%;
                margin-left: 35%;
          }
          .part{
            width: 90%;
            height: 30rem;   
            /* border: 3px double black; */
            margin: 20PX;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            justify-items: center;
        }


        .service{
            width: 30%;
            height: 25rem;
            /* border: 3px double black; */

        }
        .service h1{
            font-size: 2rem;
            font-weight: lighter;
            letter-spacing: 5px;
            padding: 20px;
        }
        .service p{
            width: 80%;
            font-size: 0.90rem;
            letter-spacing: 1px;
            line-height: 25px;
            padding: 10px;
            font-family: "RobotoLight", sans-serif;

        }
        .service button{
            height: 3rem;
            width:10rem;
            padding: 2px;
            margin: 20px;
            background-color: white;
            border: 2px solid rgb(12,59,95);
            font-weight: bold;
            color: rgb(12,59,95);
        } 
         footer{
         height: auto;
          width: 100%; 
       object-fit: contain;

         } 
          footer img{
              height: 100%;
            width:100%;

          }    
      </style>
    </head>
    <body>
    <header>
        <nav class="navbar">
            <div class="logo">
                <a href="/">
                    <h1>
                        JAMES CONSULTING
                    </h1>
                </a>
            </div>
            <div class="hamburger-menu">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
            <div class="nav-menu hide">
                <a href="#">About</a>
                <a href="#">Project</a>
                <a href="#">Tools & Tipe</a>
                <a href="#">Plans</a>
                <a href="#">Contact</a>
                <a href=""><i class="fa-solid fa-user" style="color: #ffffff;"></i> &nbsp;Log In</a>
            </div>
        </nav>
    </header>

      <div class="container">
        <div class="text">
        <h4>Developing Innovative Strategies </h4>
        <h1>ACHIEVING GROWTH</h1>
        <button> Free Consultation </button>
        </div>
      </div>

      <center>
        <section>
            <div class="part">
                <div class="service">
                    <h1>SERVICES</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text”
                        or double click me to add your own content and make changes to the font. I’m a great place for
                        you to tell a story and let your users know a little more about you.</p>
                    <button>More Info</button>
                </div>
                <div class="service">
                    <h1>PROJECTS</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text”
                        or double click me to add your own content and make changes to the font. I’m a great place for
                        you to tell a story and let your users know a little more about you.</p>
                    <button>More Info</button>
                </div>
                <div class="service">
                    <h1>CLIENTS</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text”
                        or double click me to add your own content and make changes to the font. I’m a great place for
                        you to tell a story and let your users know a little more about you.</p>
                    <button>More Info</button>
                </div>
            </div>
        </section>
        <footer>
        <img src="https://jetpack.com/wp-content/uploads/2022/01/image11.png" />
        </footer>
    </center>
    </body>
    </html>
        
        `);
    res.end();  

}
const server = http.createServer(portHandler);
server.listen(port,(err)=>{
    err ? console.log (err):console.log("server started in port:" + port) 

})

