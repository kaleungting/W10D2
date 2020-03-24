import React from "react";

class Headers extends React.Component {
  render() {
    const selected = this.props.selectedPane;
    const headers = this.props.panes.map((pane, index) => {
      const title = pane.title;
      const status = index === selected ? "active" : "";

      return (
        <li
          key={index}
          className={status}
          onClick={() => this.props.onTabChosen(index)}
        >
          {title}
        </li>
      );
    });

    return <ul className="tab-headers">{headers}</ul>;
  }
}

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0
    };

    this.selectTab = this.selectTab.bind(this);
    this.panes = [
      { title: "one", content: "I am the first" },
      { title: "two", content: "Second pane here" },
      { title: "three", content: "Third pane here" }
    ];
  }

  selectTab(index) {
    this.setState({ selectedPane: index });
  }

  render() {
    const pane = this.panes[this.state.selectedPane];
    return (
      <div>
        <h1>Tabs</h1>
        <div className="tabs">
          <Headers
            selectedPane={this.state.selectedPane}
            onTabChosen={this.selectTab}
            panes={this.panes}
          ></Headers>
          <div className="tab-content">
            <article>{pane.content}</article>
          </div>
        </div>
      </div>
    );
  }
}

// <Headers index={index} title={title} content={content} selectTab={this.selectTab} />
