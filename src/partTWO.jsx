import { placeholder } from "@babel/types";

ComponentWillmount and componentWillUpdate - are deprecated
getting 2 new methods in the placeholder

1. static getDerivedStateFromProps
    - its a static method so must have that first
    -return the new updated state based upon the this.props.
    https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
- you prob don't need derived state 
    - Idea is: for rare cases when your component needs to take incoming props from parents and set its own different state
    - this is one NOT used frequently


2. getSnapshotbeforeUpdate 
    - method that lets you create backup of current way things are
    - saving data, maybe a object with multiple points of data
    - like a snapshot 
    - not frequently used
    

    - in this course we will be using mostly ComponentWillmount and Render 