import React, {Component} from 'react';

class Pie extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return(
            <div style = {{ backgroundColor: "white"}}>
                <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
                <circle class="donut-hole" cx="21" cy="21" r="15" fill="#fff"></circle>
                <circle class="donut-ring" cx="21" cy="21" r="15" fill="transparent" stroke="#d2d3d4" stroke-width="4"></circle>

                <circle class="donut-segment" cx="21" cy="21" r="15" fill="transparent" stroke="#ce4b99" stroke-width="4" stroke-dasharray="50 50" stroke-dashoffset="3"></circle>
                <circle class="donut-segment" cx="21" cy="21" r="15" fill="transparent" stroke="green" stroke-width="4" stroke-dasharray="30 70" stroke-dashoffset="3"></circle>
                </svg>
            </div>
                 
           
        )
    }

}


export default Pie;

