import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import classnames from 'classnames';

import { buildNavHref, getType, isImportOrInSpec, onClickHref } from '../../../utils';

import styles from './parameterList.css';

const ParameterList = ({ name, type, required, description, example, defaultValue, spec, imports, parentModel }) => {
  const typeClickFn = isImportOrInSpec(getType(type), spec, imports) ?
                      onClickHref(buildNavHref(
                        { organization: spec.organization.key, application: spec.application.key, model: getType(type) }
                      )) : null;

  return (<div className={styles.container}>
    <div className={styles.meta}>
      <a name={`${getType(parentModel)}.${name}`} className={styles.name}>{name}</a>
      <p onClick={typeClickFn} className={classnames(styles.type, typeClickFn ? styles.pointer : null)}>{type}</p>
      {required ? <p className={styles.required}>required</p> : null}
    </div>
    <div className={styles.info}>
      {description ?
        <ReactMarkdown source={description} className={styles.description} />
        :
        <p className={styles.noContent}>No description</p>
      }
      {example ? <p className={styles.example}>Example: {example}</p> : null}
      {defaultValue ? <p className={styles.default}>Default: {defaultValue}</p> : null}
    </div>
  </div>);
};

ParameterList.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  parentModel: PropTypes.string.isRequired,
  spec: PropTypes.object.isRequired,
  imports: PropTypes.array.isRequired,
  description: PropTypes.string,
  example: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default ParameterList;
