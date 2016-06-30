import React, { PropTypes } from 'react';

import H1 from '../../../../components/H1';
import H2 from '../../../../components/H2';
import ParameterList from '../../ParameterList';
import ReactMarkdown from 'react-markdown';
import { simplifyName } from '../../../../utils';

import styles from './enumModel.css';

const EnumModel = ({ enumName, spec }) => {
  const enumModel = spec.enums.find(m => m.name === enumName);
  enumModel.values = enumModel.values.map((value) => (
    { name: value.name, description: value.description, type: 'string', required: false }
  ));
  return (
    <div>
      <H1>{simplifyName(enumModel.name)}</H1>
      <ReactMarkdown source={enumModel.description ? enumModel.descriptionu : ''} className={styles.description} />
      <H2>Values</H2>
      {enumModel.values.map((value, id) => (
        <ParameterList key={id} {...value} spec={spec} />
      ))}
    </div>
  );
};
EnumModel.propTypes = {
  enumName: PropTypes.string.isRequired,
  spec: PropTypes.object.isRequired,
};

export default EnumModel;
