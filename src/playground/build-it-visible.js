
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility:false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState)=>{
                return{
                    visibility : !prevState.visibility
                };
            });
    }
    render(){
        return(
            <div>
                <h1>Visibility</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility?'Hide details':'Show Details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )
                }
            </div>
        );
    }
}

ReactDOM.render(<Toggle/>,document.getElementById("app"));
/*let visibility = false;

const appRoot = document.getElementById("app");
const toggleVisibility = () =>{
    visibility = !visibility;
    render();
}

const render= () =>{
    const template=(<div>
        <h1>Visibility</h1>
        <button onClick = {toggleVisibility}>
            {visibility?'Hide Details':'Show Details'}
        </button>
        {visibility && (
            <div>
                <p>Hey. These are some details.</p>
            </div>
        )}
    </div>
    );

    ReactDOM.render(template,appRoot);
};
render();*/