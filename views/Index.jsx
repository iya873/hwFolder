const React = require('react')

const body = {
    background: 'linear-gradient(35deg, yellow, blue) no-repeat'
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
        return (
            <>
                <body style={body}>
                    <header style={header}>
                        <img style={logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'></img>
                    <h1>See All The Pokemon!</h1>
                    </header>
                </body>
            </>
        )
    }
}

module.exports = Index