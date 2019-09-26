import React from 'react';
import Cover from '../Components/Products/Cover';

class Product extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        album: [],
        click: false,
      }

      this.click = () =>{
          
          this.setState({
            ...this.state,
              click:true
          }, () => console.log(this.state)) 
          
      }
  
    }
  
    componentDidMount() {

      fetch("http://localhost:4000/api/product/")
        .then((response) => {
          return response.json();
        }
        ).then((jsonData) => {
          return jsonData.data;
        }
        ).then((jsonStr) => {
          this.setState({ album: jsonStr });
          console.log(this.state)
        });
    }

    render() {
      return (
        <div className="App">
        <div className="card__container">
          {this.state.album.map((info) => {
            return <Cover state={info} click={this.click}/>
          })}
        </div>
        </div>
      );
    }
  }

    export default Product