export default MultipleStyles;
function MultipleStyles() {
    const divStyle = {
    backgroundColor: "#302e2eff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center" 
    };
    const tStyle = {
    color: "blue",
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "10px"
};

    const pstyle = {
    color: "green",
    fontSize: "18px"
};  
return (
    <div style={divStyle}>
    <h1 style={tStyle}>Welcome to Code Circle</h1>
    <p style={pstyle}>Learn Front-End and Back-End development</p>
    </div>
);
}
