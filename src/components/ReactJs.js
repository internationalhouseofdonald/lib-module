import { render } from 'react-dom';
import { Component } from 'react';

export class ReactJs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          module: "React.js",
          description: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug."
        }
      ]
    }
  }
  render() {
    return(
      <div>
        <h1>
          {this.state.list[0].module}
        </h1>
        <p>
          {this.state.list[0].description}
        </p>
      </div>
    )
  }
}