Lifecycle Methods

import React, {Component} from "react"
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";
import { endianness } from "os";

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class TodoList extends Component {
    constructor() {
        super()
        this.state = {}
    }

    3. ComponentWillReceiveProps(nextProps) {
        - like getting a gift 
        every time it gets a prop it runs this comp it will run every tiem a parentcomp passes a prop to a child comp
        // can check to see if new props are diff than existing props, if not different don't do anything, if diff then rerender
// receives parameter called nextProps
        THIS IS DEPRACATED and is now unsafe 
}
    
 2.   componentDidMount() {
      // like saying you were just born
     this component did just mount to the screen
     runs as soon as component shows up on the screen - RE RENDER does not run compdidmount again 
     // used for API call when you need to get data from an external source, ex: I need to get data before i am able to accurately display
     // GET 
    }
    

    3. shouldComponentUpdate(nextProps, nextState) {
        // return TRUE if you want it update
        // return FALSE if you don't want it to 
        - should I change my clothes or not ?
            If react has any question whether needs to rerender or not it will auto rerender 
        -this method gives us chanc to optimize up, you can add logic here to see if its important to even render or not
    }

    4. componentWillUnMount() {
        all good things come to an end, comp will eventually unmount(disappear) from screen
            - primarily used for cleanup
            ex: event listener - run code every time someone scrolls on screen, you could remove event listener here
            - place to tear down or clean up code before it disappears
    
    }


 1.   render() {
        return (
            <div>
                Code goes here
            </div>
            - Render is like waking up and putting your clothes on for the DynamicsCompressorNode.Changing your clothis is like changing this.state.
        
        
export default App
