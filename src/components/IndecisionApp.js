import React from 'react';
import AddOption from './Addoption';
import Header from './Header';
import Action from './Action';
import Options from './Options'; 
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state = {
        options:[],
        selectedOption:undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };

    handleClearOption = () =>{
        this.setState(() => ({selectedOption:undefined}));
    }

    handleDeleteOption = (optionToRemove) => {
       this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
       }));
    };

    handlePick = () => {
        const random_num = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random_num];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid option';
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'Option Already Added';
        }
        this.setState((prevState) => ({
            options:  prevState.options.concat(option)
        }));
    };

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({options}));
            }
        }
        catch(e){}
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    
    render(){
        const subtitle='Put your life in the hands of Computer.';

        return (
            <div>
                <Header  subtitle={subtitle}/>
                <div className="container">
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <div className="widget">
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
                </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearOption={this.handleClearOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    option:[]
};
