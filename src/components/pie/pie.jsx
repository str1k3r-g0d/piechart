import React, {Component} from 'react';

class Pie extends Component {
    

    //Circumference defined:-
    circumference = 20;
    radius = this.circumference/(2 * Math.PI);
    //Initital Offset:-
    initOffset = 25;
    
    //ARC 1 components:-
    arc1_perc = 20;
    arc1_dasharray1 = this.circumference * (this.arc1_perc/100);
    arc1_dasharray2 = this.circumference * ((100 - this.arc1_perc)/100);

    //ARC 2 components:-
    arc2_perc = 50;
    arc2_dasharray1 = this.circumference * (this.arc2_perc/100);
    arc2_dasharray2 = this.circumference * ((100 - this.arc2_perc)/100);
    arc2_offset = this.circumference - this.arc1_dasharray1 + this.initOffset;

    //ARC 3 components:-
    arc3_perc = 100 - (this.arc1_perc + this.arc2_perc);
    arc3_dasharray1 = this.circumference * (this.arc3_perc/100);
    arc3_dasharray2 = this.circumference * ((100 - this.arc3_perc)/100);
    arc3_offset = this.circumference - (this.arc1_dasharray1 + this.arc2_dasharray1) + this.initOffset;
    


    render() {
        return(
            <div style = {{width: "100%", backgroundColor: "white"}}>
                <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
                    <circle class="donut-hole" cx="21" cy="21" r={`${this.radius}`} fill="#fff"></circle>
                    <circle class="donut-ring" cx="21" cy="21" r={`${this.radius}`} fill="transparent" stroke="#d2d3d4" stroke-width="4" stroke-dasharray={`${this.arc1_dasharray1} ${this.arc1_dasharray2}`} stroke-dashoffset={`${this.initOffset}`}></circle>

                    <circle class="donut-segment" cx="21" cy="21" r={`${this.radius}`} fill="transparent" stroke="#ce4b99" stroke-width="10" stroke-dasharray={`${this.arc2_dasharray1} ${this.arc2_dasharray2}`} stroke-dashoffset={`${this.arc2_offset}`}></circle>
                    <circle class="donut-segment" cx="21" cy="21" r={`${this.radius}`} fill="transparent" stroke="green" stroke-width="12" stroke-dasharray={`${this.arc3_dasharray1} ${this.arc3_dasharray2}`} stroke-dashoffset={`${this.arc3_offset}`}></circle>
                    <circle class="donut-hole" cx="21" cy="21" r={`${this.radius}`} fill="#fff"></circle>
                </svg>
            </div>
                 
           
        )
    }

}


export default Pie;

