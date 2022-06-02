const React = require('react')
const pokemon = require('../models/pokemon')
const body = {
    background: 'yellow'
}
const logo = {
    width: '40%',
    height: '100px'
}
const header = {
    textAlign: 'center',
    color: 'white'
}
class Show extends React.Component {
    render() {
        const  pokemon  = this.props.pokemon;
        return (
            <>
                <body style={body}>
                    <header style={header}>
                    <h1>Gotta Catch 'Em All</h1>
                        <img style={logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'></img>
                    </header>
                    <nav>
                    <a href='/pokemon'>Back</a>
                    </nav>
                    <div>
                        <h2>Meet: {pokemon.name.toUpperCase() }</h2>
                        <img src={pokemon.img}></img>
                    </div>

                <footer>
                    Created by Nekked Hippie
                </footer>
                </body>
            </>
        )
    }
}

module.exports = Show