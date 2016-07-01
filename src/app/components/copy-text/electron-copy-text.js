import React, { Component, PropTypes } from 'react';

class CopyText extends Component {

  handleClick(e) {
    const { text, onCopy } = this.props;

    clipboard.writeText(text);
    onCopy(`${text} copied!`);
    console.log("copying electron style");
    setTimeout(function() { onCopy(""); }, 1500);

  }

  render() {
    const { text, children } = this.props;
    return (
      <div>
        <div className="copy-text-text" onClick={ (e) => this.handleClick(e) }>
          { children }
        </div>
      </div>
    );
  }
}

CopyText.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onCopy: PropTypes.func.isRequired
}

export default CopyText;
