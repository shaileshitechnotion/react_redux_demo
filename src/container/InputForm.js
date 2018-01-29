import React, { Component } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Lable from '../components/Lable';

import { connect } from 'react-redux';

import {  
    addName,getName
} from '../action/reduxdemo';

class InputForm extends Component {

  
    addData = (e) => {
       
        this.props.addName({ title: e.target.value });
       
    };

   
    
  render() {
      
      
    return (
      <div style={{width:"400px", margin:"0 auto",marginTop:"10%"}}>
          <Input onChange={this.addData}/>
            <Button name="Submit" onClick={() => this.props.addName({ name: 'I am a geo dude!' })} />
           
            {/* <button type="submit" onClick={() => this.props.addName({ title: 'I am a geo dude!' })}>Submit</button> */}
            <button type="submit" onClick={() => this.props.addName({ title: 'I am a geo dude!' })}>Submit</button>
            <Lable name={this.props.name.title} />
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({  
    name: state.name,
    gname:state.gname
  });
  
  const mapDispatchToProps = {  
    addName,getName
  };
  
  const AppContainer = connect(  
    mapStateToProps,
    mapDispatchToProps
  )(InputForm);

export default AppContainer;
