const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="/img/pizza.jpg" alt="pizza" />
                    <div>
                    Phot by <a href="https://unsplash.com/s/photos/pizza">Brenda Godinez<a/> on <a href="https://unsplash.com/s/photos/pizza">unsplash</a>
                    </div>
                </div>     
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home