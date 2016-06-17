import React, { Component, PropTypes } from 'react';

import CopyText from './copy-text';

const Section = (props) => {
    const { title, data, onCopy } = props;

    return (
      <section>
        <h3>{title}</h3>
        <ul className={`section-list ${title.toLowerCase()}-section`}>
        { data.map( (item, i) => {
          return <li key={i}><CopyText onCopy={ onCopy } text={item}>{item}</CopyText></li>
        }) }
        </ul>
      </section>
    );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCopy: PropTypes.func.isRequired
}

export default Section;
