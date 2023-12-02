import React, {createContext,useContext} from "react";
// import "./style.css";
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             products: []
//         };


//     }
//     componentDidMount() {
//         fetch("https://dummyjson.com/products")
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 this.setState({ products: data.products })
//             })
//     }
//     render() {
//      const style={
//         display:"flex",
//         height: "8rem"
//      }   
//         return (
//             <>
//                 {
//                     this.state.products.map((item, index) => (
//                         <React.Fragment key={index}>
//                             <img src={item.thumbnail} alt="Products" loading="lazy" />
//                             <h3>{item.title}</h3>
//                             <p>{item.description}</p>
//                             <div style={style}>
//                                 {item.images.map((img, ind) => (
//                                     <img src={img} key={ind} loading="lazy" />
//                                 ))}
//                             </div>
//                             <br />
//                         </React.Fragment>

//                     ))
//                     }
//             </>
//              );
             
//    }            
        
// }

const ThemeContext =createContext();

 
function App2(props) {
    let theme ={
        backgroundColor: "black",
        color:"white"
    }
         
 return(
    <>
    <ThemeContext.Provider value={theme}>
    <Section /> 
    </ThemeContext.Provider>
      
    </>
 );
}

export default App2;
function Section({theme}) {
    return(
        <section>
            <Form/>
        </section>
    );
}

function Form() {
    return(
        <form>

            <Input type={"text"}/>
            <Input type={"submit"}/>




        </form>
    );
}






function Input({type}){
  const theme2= useContext(ThemeContext);
  console.log(theme2);
  
return <input type ={type} style={theme2}/>

}   