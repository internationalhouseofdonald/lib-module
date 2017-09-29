import { Component } from 'react';
import { ModuleList } from './ModuleList';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          module: "React.js",
          description: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug."
        },
        {
          module: "Webpack",
          description: "Webpack is a module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into a small number of bundles - often only one - to be loaded by the browser."
        }
      ]
    }
  }
  render() {
    return (
      <div className="app">
        <div className="jumbotron">
          <h1 style={{fontSize: "8rem"}}>Features</h1>
        </div>
        <ModuleList modules={this.state.list} />
      </div>
    )
  }
}