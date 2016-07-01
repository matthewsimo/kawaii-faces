import React, { Component, PropTypes } from 'react';

import WebCopyText from './web-copy-text';
import ElectronCopyText from './electron-copy-text';

class CopyText extends Component {

  render() {
    const CopyTextComponent = window.env === 'electron' ? ElectronCopyText : WebCopyText;
    return (
      <CopyTextComponent { ...this.props } />
    );
  }
}

export default CopyText;

