import React, { Component, PropTypes } from 'react';

class CopyText extends Component {

  handleClick(e) {
    const { copyText: input } = this.refs;
    const { onCopy } = this.props;
    console.log("handling click", e);
    console.log(input.value);
    input.select();

    try {
      document.execCommand('copy');
      input.blur();

      onCopy(`${input.value} copied!`);
      setTimeout(function() { onCopy(""); }, 1500);
    }
    catch (err) {
      console.log("haha");
    }
  }

  render() {
    const { text, children } = this.props;
    return (
      <div>
        <input className="copy-text-input" ref="copyText" type="disabled" value={ text } readOnly />
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
