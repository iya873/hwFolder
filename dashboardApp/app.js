

class Header extends React.Component {
    render() {
        return (
            <h1>Welcome Back</h1>
        )
    }
}

class Wrapper extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                {this.props.children}
            </div>
        )
    }
}

class Panel extends React.Component {
    render() {
        return (
            <div>
                <aside className='section1'>
                    <div className='pWrap'>
                    <p>DASHBOARD</p>
                    <p>WIDGET</p>
                    <p>REVIEWS</p>
                    <p>CUSTOMERS</p>
                    <p>ONLINE ANALYSIS</p>
                    <p>SETTINGS</p>
                    </div>
                </aside>
            </div>
        )
    }
}
class ColumnWrapper extends React.Component{
    render() {
        return (
            <div className='columnWrap'>
                {this.props.children}
            </div>
        )
    }
}
class Column extends React.Component {
    render() {
        return (
            <section className='miniSection'>
                {this.props.children}
                </section>  
        )
    }
}

class MainDiv extends React.Component {
    render() {
        return (
            <section className='mainDiv'>
                <h2>WEBSITE VISITORS</h2>
                <p>821</p>
                {this.props.children}
            </section>
        )
    }
}
class InnerDiv extends React.Component {
    render() {
        return (
            <div className='innerDiv'></div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header />
                <Wrapper>
                 <Panel />
                    <ColumnWrapper>
                <Column>
                            <h2>REVIEWS</h2>
                            <p>1,281</p>
                </Column>
                <Column>
                            <h2>AVERAGE RATING</h2>
                            <p>4.6</p>
                </Column>
                <Column>
                            <h2>SENTIMENT ANALYSIS</h2>
                                <p>960</p>
                                <p>122</p>
                                <p>321</p>
                </Column>
                    </ColumnWrapper>
                <MainDiv>
                <InnerDiv />
                </MainDiv>
                </Wrapper>
            
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)