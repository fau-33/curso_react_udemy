import MyComponent from "./MyComponent";

const FirstComponent = () => {
  // função
  /**
   * multi line
   */
  return(
    <div>
      {/** algum comentário */}
        <h1>Meu primeiro componente</h1>
        <p className="teste">meu texto</p>
        <MyComponent/>
    </div>
  );
}

export default FirstComponent;