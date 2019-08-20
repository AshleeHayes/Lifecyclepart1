Lifecycle Methods

import React, {Component} from "react"
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

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
    



 1.   render() {
        return (
            <div>
                Code goes here
            </div>
            - Render is like waking up and putting your clothes on for the DynamicsCompressorNode.Changing your clothis is like changing this.state.
        
        
export default App
