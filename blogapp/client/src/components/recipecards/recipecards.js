import React from 'react'
import './recipecards.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
function recipecards() {
  return (
    <div>
        <header>
    <div class="header">
      <div>
        <i class="fa fa-cutlery"></i>
        <span class="head-title">Recipe Sharing Hub</span>
        <i class="fa fa-spoon"></i>
      </div>
      <div class="btn-container">
        <a class="btn-link" href="/">Home</a>
        <a class="btn-link" href="/recipes">Recipes</a>
        <a class="btn-link" href="/about">About</a>
      </div>
    </div>
  </header>

  <main>
    <div class="recipe-container">
      <div class="recipe">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcHIzinb3nJpp5zFEg0asNTehhRBDl7EcnQ&usqp=CAU" alt="Recipe 1"/>
        <div class="title">Recipe 1-chicken biryani</div>
        <div class="rating">Rating: 
          <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </div>
      </div>
      <div class="recipe">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5MO-aXj8u0Y5doee0lsJkDUiskHHYqpGglg&usqp=CAU" alt="Recipe 2"/>
        <div class="title">Recipe 2-cheese cake</div>
        <div class="rating">Rating: 
          <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
        </div>
      </div>
      <div class="recipe">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKIVTfTUulYU6FVcWkFzK3oRQ4RhPH2-nqrA&usqp=CAU" alt="Recipe 3"/>
        <div class="title">Recipe 3-pizza</div>
        <div class="rating">Rating: 
          <span class="stars">&#9733;&#9733;&#9733;&#9734;&#9734;</span>
        </div>
      </div>
      <div class="recipe">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyaCPPKVbF9T0n337dOUs_F7T9vFKwsqGnLw&usqp=CAU" alt="Recipe 4"/>
        <div class="title">Recipe 4-pasta</div>
        <div class="rating">Rating: 
          <span class="stars">&#9733;&#9733;&#9734;&#9734;&#9734;</span>
        </div>
      </div>
      
    </div>
    
  </main>

  
      <footer>
        <div class="footer">
          <p>Contact us: email@example.com</p>
          <p>Follow us on social media:</p>
          <ul class="social-media">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </footer>

    </div>
  )
}

export default recipecards