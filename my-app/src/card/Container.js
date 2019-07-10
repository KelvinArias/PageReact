import React from 'react';
import ElementCard from './listCards';


class ConsContent {
    constructor(url,title,contentCard,footer){
      this.url = url;
      this.title = title;
      this.contentCard = contentCard;
      this.footer = footer;
    }  
}

class Cards extends React.Component
{
    constructor(props){
      super(props);
      this.state = {
        content: []
      }
    }
   
    AddCard = () =>
    {
        try 
        {
          let name = document.querySelector("#img").files[0].name;
          var url = "img/" + name;
        } catch (error) {
          var url = "img/481234-PGFQZM-430.jpg";
        }
        let title = document.querySelector("#title").value;
        let contentCard = document.querySelector("#content").value;
        let footer = document.querySelector("#footer").value;
        let x = new ConsContent(url,title,contentCard,footer);
       
      this.setState(state => {
        const content = state.content.concat(x);
        return {content};
      });
    }
  
    render(){
      return (
       <div className="container">
          <div className="row">
            <div className="col s12 m12 flow-text center-align my-5">
                <h1 className="h1">Cards</h1>
            </div>
            <div className="row">
              <div className="col s12 m12 l4">
                  <div className="input-field pl-0 col s12">
                      <input id="title" type="text" className="validate" />
                      <label for="title">Title</label>
                  </div>
                  <div className="input-field pl-0 col s12">
                      <input id="content" type="text" className="validate" />
                      <label for="content">Content</label>
                  </div>
                  <div className="input-field pl-0 col s12">
                      <input id="footer" type="text" className="validate" />
                      <label for="footer">Footer</label>
                  </div>
                  <div class="input-field pl-0 col s12">
                      <input id="img" type="file" className="validate" />
                  </div>
                  <button onClick={this.AddCard} className="waves-effect mt-5 waves-light btn">
                         Add Card
                  </button>
              </div>
              <div className="col s12 m12 l8">
                <div id="container" className="row">
                  <ElementCard list={this.state.content} />
                </div>
              </div>
              {}
            </div>
          </div>
     </div>
      )
  }
}
export default Cards;