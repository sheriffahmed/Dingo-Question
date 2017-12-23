const React = require("react");
const ReactDom = require("react-dom");
const axios = require("axios");

const styles = {
  img: {
    height: "15em"
  }
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      imgURL: ""
    };
  }

  getRandomImage = () => {
    axios
      .get('https://dog.ceo/api/breed/dingo/images/random')
      .then(response => {
        this.setState({
          imgURL: response.data.message
        })
      })
      .catch(err => {
        console.log(err)
      })
  };

  componentDidMount() {
    this.getRandomImage();
  }

  render() {
    const { imgURL } = this.state;

    return (
      <div>
        <h3> Random Dingo Pictures </h3>
        <div>
          <img style={styles.img} alt="" src={imgURL} />
        </div>
        <p>
          <button onClick={this.getRandomImage}>
            {" "}
            one more!{" "}
          </button>
        </p>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));

