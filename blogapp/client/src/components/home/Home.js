import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Home.css';
function Home() {
  return (
    <div>
        <div id="menu" className="menu">
        <div id="menu-bar" onclick="onClickMenu()">
        <div id="bar1" className="bar"></div>
        <div id="bar2" className="bar"></div>
        <div id="bar3" className="bar"></div>

    <ul id="nav" className="nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    </div>
</div>
    <header className="header ">
        
    <div className="position-absolute top-50 start-50 translate-middle">
  <h1 className="title text-white">Food For Health</h1>
  <a href="#" className="hero-button pulsate allign-item-center">Book a table</a>
</div>
            </header>
            <section id="about">
            <div>
                <h2 className="title-text">About Us</h2>
            </div>

        <div className="about-center">
        
        <article className="about">
            <div className="about-icon"><i className="fas fa-mug-hot"></i></div>
            <div className="about-text">
                <h2 className="about-subtitle">Drinks</h2>
                <p className="about-info">Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Quisquam, temporibus!</p>
            </div>
        </article>
        <article className="about">
            <div className="about-icon"><i className="fas fa-utensils"></i></div>
            <div className="about-text">
                <h2 className="about-subtitle">Healthy Food</h2>
                <p className="about-info">Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Quisquam, temporibus!</p>
            </div>
        </article>

        <article className="about">
            <div className="about-icon"><i className="fas fa-mortar-pestle"></i></div>
            <div className="about-text">
                <h2 className="about-subtitle">Organic Food</h2>
                <p className="about-info">Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Quisquam, temporibus!</p>
            </div>
        </article>

        <article className="about">
            <div className="about-icon"><i className="fas fa-drumstick-bite"></i></div>
            <div className="about-text">
                <h2 className="about-subtitle">White Meat</h2>
                <p className="about-info">Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Quisquam, temporibus!</p>
            </div>
        </article>

        <article className="about">
            <div className="about-icon"><i className="fas fa-fish"></i></div>
            <div className="about-text">
                <h2 className="about-subtitle">Sea Food</h2>
                <p className="about-info">Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Quisquam, temporibus!</p>
            </div>
        </article>

        <article className="about">
            <div className="about-icon"><i className="fas fa-pepper-hot "></i></div>
            <div className="about-text">
                <h2 className="about-subtitle">Hot & Spicy</h2>
                <p className="about-info">Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Quisquam, temporibus!</p>
            </div>
        </article>

    </div>   
   </section>

   <section className="menu" id="menu">
       <article className="menu-image"></article>
       <article className="menu-text">
           <div className="menu-text-center">
               <h1>Our Menu</h1>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
                elit. Aut omnis nam iusto praesentium inventore vitae 
                esse tempora repellendus.</p>
                <a href="#">Explore</a>
           </div>
       </article>
   </section>

   <section id="social-icons">
       <a href="#"><i className="fab fa-facebook facebook"></i></a>
       <a href="#"><i className="fab fa-twitter twitter"></i></a>
       <a href="#"><i className="fab fa-instagram instagram"></i></a>
       <a href="#"><i className="fab fa-google-plus plus"></i></a>
   </section>

      <section id="numbers">
       <article className="number">
           <i className="fas fa-cloud-meatball"></i>
           <p>50</p>
          <h3> Meat dishes</h3>
        </article>
        <article className="number">
            <i className="fas fa-cheese"></i>
            <p>35</p>
           <h3> Cheese Variations</h3>
         </article>
         <article className="number">
            <i className="fas fa-pizza-slice"></i>
            <p>25</p>
           <h3> Pizzas</h3>
         </article>
         <article className="number">
            <i className="fas fa-ice-cream"></i>
            <p>40</p>
           <h3> Desserts</h3>
         </article>
   </section>

   <section id="food">
       <div>
       <h2 className="title-text"> Food Fusion</h2>
        </div>
      <div className="food-container">

      <article className="food-card">
              <img src="https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="food-img"alt=""/>
              <div className="img-text">
                  <h1>Breakfast</h1>
              </div>
              <div className="img-footer">
                  
                  <div className="footer-btn">
                    <button type="button"className="food-btn">Go To Recipe</button>  
                  </div>
              </div>
              </article>
              <article className="food-card">
                <img src="https://images.pexels.com/photos/14457194/pexels-photo-14457194.jpeg?auto=compress&cs=tinysrgb&w=600" className="food-img"alt=""/>
                <div className="img-text">
                    <h1>Lunch</h1>
                </div>
                <div className="img-footer">
                    
                    <div className="footer-btn">
                      <button type="button"className="food-btn">Go To Recipe</button>  
                    </div>
                </div>
                </article>
                <article className="food-card">
                    <img src="https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=600" className="food-img"alt=""/>
                    <div className="img-text">
                        <h1>Dinner</h1>
                    </div>
                    <div className="img-footer">
                        
                        <div className="footer-btn">
                          <button type="button"className="food-btn">Go To Recipe</button>  
                        </div>
                    </div>
                    </article>
       </div>
       
      
       
   </section>

    <section id="gallery">
        <div>
        <h2 className="title-text">Main Cuisines</h2>
     </div>
     <div id="gallery-center">
         <article className="gallery-item">
             <a href="https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&w=600g">
                <img src="https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </a>
         </article>
         <article className="gallery-item">
            <a href="https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg?auto=compress&cs=tinysrgb&w=600">
                <img src="https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </a>
        </article>
        <article className="gallery-item">
            <a href="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600">
                <img src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </a>
        </article>
        <article className="gallery-item">
            <a href="https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&w=600">
                <img src="https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </a>
        </article>
        <article className="gallery-item">
            <a href="https://images.pexels.com/photos/1263870/pexels-photo-1263870.jpeg?auto=compress&cs=tinysrgb&w=600">
                <img src="https://images.pexels.com/photos/1263870/pexels-photo-1263870.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </a>
        </article>
        <article className="gallery-item">
            <a href="https://images.pexels.com/photos/2773940/pexels-photo-2773940.jpeg?auto=compress&cs=tinysrgb&w=600">
                <img src="https://images.pexels.com/photos/2773940/pexels-photo-2773940.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            </a>
        </article>
        <article className="gallery-item">
            <a href="https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&w=600">
                <img src="https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </a>
        </article>
        <article className="gallery-item">
            <a href="https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=600">
                <img src="https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </a>
        </article>
     </div>
     </section>
       <footer className="footer">

        <div className="section-center">
            <p className="text">
                &copy; <span>Food For Health</span> 
            </p>
        </div>

       </footer>

    </div>
  )
}

export default Home