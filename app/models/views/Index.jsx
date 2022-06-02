const React = require('react')
const pokemon = require('../pokemon')
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

class Index extends React.Component {
    render() {
        const {pokemon} = this.props;
        return (
            <>
                <body style={body}>
                    <header style={header}>
                    <h1>See All The Pokemon!</h1>
                        <img style={logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'></img>
                    </header>
                    <div>
                        {pokemon.map((pokemon, i) => {
                            return (
                                <ul>
                                    <a href={`/pokemon/${i}`}> <li>{pokemon.name.toUpperCase()}</li></a>
                                </ul>
                                )
                            })}
                    </div>

                <footer>
                    Created by Nekked Hippie
                </footer>
                </body>
            </>
        )
    }
}

module.exports = Index