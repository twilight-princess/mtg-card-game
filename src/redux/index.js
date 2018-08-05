import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import axios from "axios"

const initialState = {
    deck: [],
    foundCard: {
        name: "",
        colors: [],

    },
    loading: false
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "START_LOADING":
            return {
                ...prevState,
                loading: true
            }
        case "GET_CARD":
            return {
                ...prevState,
                foundCard: action.card,
                loading: false
            }
        case "ADD_TO_DECK":
            return {
                ...prevState,
                deck: [...prevState.deck, prevState.foundCard],
                loading: false
            }
        case "LOGIN":
            return {
                ...prevState,
                loggedIn: true,
                currentUser: prevState.user,
                loading: false 
            }
        case "LOGOUT":
            return {
                ...prevState,
                loggedIn: false,
                currentUser: null,
                loading: false 
            }
        case "CREATE_USER":
            return {
                ...prevState,
                username: action.user,
                decks: [],
                loading: false
            }
        default:
            return prevState;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

//ACTION CREATORS

export const getCard = (...args) => {
    let url = "https://api.magicthegathering.io/v1/cards?random=true&pageSize=1"
    if (args) {
        args.map(arg => {
            url += "&" + arg.name + "=" + arg.value
        })
    }
    return dispatch => {
        console.log("dis: ", dispatch)
        //DO THE PROMISE STUFF
        store.dispatch({type: "START_LOADING"});
        axios.get(url)
            .then(response => {
                store.dispatch({
                    type: "GET_CARD",
                    card: { 
                    name: response.data.cards[0].name,
                    colors: response.data.cards[0].colors || [],
                    manaCost: response.data.cards[0].manaCost,
                    types: response.data.cards[0].types,
                    description: response.data.cards[0].text,
                    power: response.data.cards[0].power,
                    toughness: response.data.cards[0].toughness,
                    image: response.data.cards[0].imageUrl
                    }
                })
            })
    }
}
export const addToDeck = () => {
    return dispatch => {
        store.dispatch({
            type :"ADD_TO_DECK"
        })
    }
}

export const createUser = (username) => {
    return dispatch => {
        axios.post('http://localhost:8080/user', {username: username})
            .then(response => {
                if (response) {
                    store.dispatch({
                        type: "LOGIN",
                        user: {
                            username: response.data.user,
                            decks: response.data.user.decks || []
                        }
                    })
                }
            })
    }
}

export const toggleLogin = (user) => {
    return dispatch => {
        if (user) {
            type: "LOGOUT"
        } else {
            type: "LOGIN"
        }
        store.dispatch({
            type: "TOGGLE_LOGIN"
        })
        axios.post('localhost:8080/user')
    }
}

export default store;
