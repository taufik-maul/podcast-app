import React, { Component } from 'react';

const MyContext = React.createContext();

class DataProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            keyword: null,
            podcast: null
        }
    }

    async componentDidMount() {
        const url = "https://json-server-heroku-svoqwyfacm.now.sh/podcasts";
        if(this.state.podcasts == null) {
            const response = await fetch(url);
            const data = await response.json();
            this.setState({
                podcast: data,
                loading: false
            })
        }
    }

    findPodcast = (keyword) => {
        this.setState({
            keyword: keyword
        });
    }

    getPodcastData = () => {
        const result = [];
        let self = this;
        if(!this.state.loading){
            this.state.podcast.map((podcast) => {
                if (self.state.keyword && podcast.title.toLowerCase().indexOf(self.state.keyword.toLowerCase()) === -1) 
                    return;
                result.push(podcast);
            })
        }
        return result;
    }

    findById = (podcastid) => {
        let data = null;
        if(!this.state.loading){
            data = this.state.podcast.find( podcast => podcast.id === parseInt(podcastid));
        }
        return data;
    }

    render() {
        return (
            <MyContext.Provider value={{
                podcasts: this.getPodcastData(),
                keyword: this.state.keyword,
                loading: this.state.loading,
                find: this.findPodcast,
                findById: this.findById
            }}>
                {this.props.children}
            </MyContext.Provider >
        );
    }
}

export {
    MyContext,
    DataProvider
};