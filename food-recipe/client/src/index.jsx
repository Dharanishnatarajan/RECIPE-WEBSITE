import "./index.css"
import { Link } from "react-router-dom"

const Index = () => {
    return (
        <>
            <div className="navbar">
                <nav>
                    <ul>
                        <li><a><img src="images/Magic Recipes.jpg"></img></a></li>
                        <li><a className="right" href="#rec" h>Recipes</a></li>
                        <li><Link to={"/login"}>Login</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="section">
                <p className="para1">Add <span className="apa">Magic</span></p>
                <p className="para2">to your food...!</p>
                <button className="click"><Link to={"/recipies"}>Get your recipe</Link></button>

            </div>
            <div className="avail" id="rec">
                <h1>Available Recipes</h1>
            </div>
            <div className="design">
                <div className="hi">
                    <h3>North Indian</h3>
                    <a><img src="images/north.jpg"></img></a>
                </div>
                <div className="hi">
                    <h3>South Indian</h3>
                    <a><img src="images/istockphoto-1024558722-612x612.jpg"></img></a>
                </div>
                <div className="hi">
                    <h3>Desserts</h3>
                    <a><img src="images/images.jpg"></img></a>
                </div>
                <div className="hi">
                    <h3>Pasta</h3>
                    <a><img src="images/photo-1555949258-eb67b1ef0ceb.avif"></img></a>
                </div>
            </div>
            <div class="design">
                <div className="hi">
                    <h3>Chicken</h3>
                    <a><img src="images/pexels-photo-2338407.jpeg"></img></a>
                </div>
                <div className="hi">
                    <h3>Fish</h3>
                    <a><img src="images/fried-fish-carp-fresh-vegetable-salad-wooden-table_2829-19923.avif"></img></a>
                </div>
                <div className="hi">
                    <h3>Mutton</h3>
                    <a><img src="images/istockphoto-465150864-612x612.jpg"></img></a>
                </div>
                <div className="hi">
                    <h3>Salad</h3>
                    <a><img src="images/Epic-summer-salad-hub-2646e6e.jpg"></img></a>
                </div>
            </div>
            <div className="design">
                <div className="hi">
                    <h3>Fried Rice</h3>
                    <a><img src="images/fried rice.jpeg"></img></a>
                </div>
                <div className="hi">
                    <h3>Cookies</h3>
                    <a><img src="images/cookies.jpeg"></img></a>
                </div>
                <div className="hi">
                    <h3>Icecream</h3>
                    <a><img src="images/icecream.jpeg"></img></a>
                </div>
                <div className="hi">
                    <h3>Sandwitch</h3>
                    <a><img src="images/sandwiches.jpeg"></img></a>
                </div>
            </div>
            <div className="design">
                <div className="hi">
                    <h3>Egg Recipe</h3>
                    <a><img src="images/egg.jpeg"></img></a>
                </div>
                <div className="hi">
                    <h3>Milkshake</h3>
                    <a><img src="images/milkshake.jpeg"></img></a>
                </div>
                <div className="hi">
                    <h3>Drinks</h3>
                    <a><img src="images/cold drinkks.jpeg"></img></a>
                </div>
                <div className="hi">
                    <h3>Hot Drinks</h3>
                    <a><img src="images/hot drinks.jpeg"></img></a>
                </div>
            </div>
            <div className="design">
                <div className="hi">
                    <h3>Bread</h3>
                    <a><img src="images/pexels-photo-1775043.jpeg"></img></a>
                </div>
                <div className="hi">
                    <h3>Naan</h3>
                    <a><img src="images/naan.jpeg"></img></a>
                </div>
                <div className="hi">
                    <h3>Prawns</h3>
                    <a><img src="images/prawns.jpeg"></img></a>
                </div>
                <div className="hi">
                    <h3>Fried Recipe</h3>
                    <a><img src="images/fries.jpeg"></img></a>
                </div>
            </div>

            <div className="footer" id="footerid">
                <div className="footerText1">
                    <h3>Magic Recipes</h3>
                    <p>Who We Are</p>
                    <p>Our Team</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className="footerText2">
                    <h3>Help</h3>
                    <p>Editorial Guidelines</p>
                    <p>Frequently Asked Questions</p>
                </div>
                <div className="footerText3">
                    <h3>Keep in Touch</h3>
                </div>


            </div>

        </>
    )
}

export default Index