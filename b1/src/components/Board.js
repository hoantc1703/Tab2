import React, {Component} from "react";
import Square from "./Square";


export default class Board extends Component{
    
    renderSquare(i){
        return <Square value = {this.props.squares[i]} 
        onClick = {() => this.props.onClick(i)}
        />
    }

    renderSquare1(i){
        return (
        <div>
            <Square value = {this.props.squares[i]} image = {this.props.logo}> 
                
            </Square>
            
        </div>
        

        )
    }   
    render() {
        return (
            <div>
                <div className="border-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    
                </div>
                <div className="border-row">
                    {/* <img src={logo} style={{width:200, height: 200}}/>
                    <img src={logo1} style={{width:200, height: 200}}/>
                    <img src={logo} style={{width:200, height: 200}}/> */}
                </div>
                <div className="border-row">
                    {this.renderSquare1(3)}
                    {this.renderSquare1(4)}
                    {this.renderSquare1(5)}
                </div>

            </div>
        )
    }
}