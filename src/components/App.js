import React, {Component} from "react";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainContent from "./MainContent/MainContent";
import MovieList from "./MovieList/MovieList";
import FormAdd from "./FormAdd/FormAdd";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import './common-styles.scss';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isOpenAddMoviePopup: false,
            movieArray: [
                {
                    title: 'Pulp Fiction',
                    description: 'Action & Adventure',
                    year: '2004',
                    id: 1
                },
                {
                    title: 'Bohemian Rhapsody',
                    description: 'Drama, Biography, Music',
                    year: '2003',
                    id: 2
                },
                {
                    title: 'Kill Bill: Vol 2',
                    description: 'Oscar winning Movie',
                    year: '1994',
                    id: 3
                },
                {
                    title: 'Avengers: War of Infinity',
                    description: 'Action & Adventure',
                    year: '2004',
                    id: 4
                },
                {
                    title: 'Inception',
                    description: 'Action & Adventure',
                    year: '2003',
                    id: 5
                },
                {
                    title: 'Reservoir dogs',
                    description: 'Oscar winning Movie',
                    year: '1994',
                    id: 6
                }
            ]
        }
    }
    toggleOpenAddMoviePopup = () => {
        this.setState({
            isOpenAddMoviePopup: !this.state.isOpenAddMoviePopup
        })
    }
    removeMovie = (id) => {
        this.setState(({movieArray}) => {
            return {
                movieArray: movieArray.filter(item => item.id !== id)
            }
        })
    }
    render() {
        return (
            <>
                <Header toggleOpen={this.toggleOpenAddMoviePopup} />
                <MainContent>
                    <ErrorBoundary>
                        <MovieList movieArray={this.state.movieArray} removeMovie={this.removeMovie} />
                    </ErrorBoundary>
                </MainContent>
                <Footer>
                    <p>
                        <strong>netflix</strong>roulette
                    </p>
                </Footer>
                <FormAdd isOpen={this.state.isOpenAddMoviePopup} toggleOpen={this.toggleOpenAddMoviePopup} />
            </>
        )
    }
}

export default App;