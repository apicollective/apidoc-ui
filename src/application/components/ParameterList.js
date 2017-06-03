// @flow
import React from 'react';
import classnames from 'classnames';
import { Link } from 'utils';

import Markdown from 'components/Markdown';
import {
  buildNavHref,
  getType,
  isImport,
  isImportOrInService,
  simplifyName,
} from 'utils';

import type { Service } from 'generated/version/ServiceType';

import styles from 'application/components/parameter-list.css';

const ParameterList = (
  {
    name,
    type,
    required,
    description,
    example,
    defaultValue,
    service,
    importedServices,
    parentModel,
  }: {
    name: string,
    type: string,
    required: boolean,
    description?: string,
    example?: string,
    defaultValue?: string,
    service: Service,
    importedServices: Service[],
    parentModel: string,
  } = {}
) => {
  const possibleImportType = `${parentModel.substring(0, parentModel.lastIndexOf('.'))}.${type}`;
  const modelType = isImport(possibleImportType, importedServices)
    ? possibleImportType
    : type;
  const typeToHrefFn = isImportOrInService(
    getType(modelType),
    service,
    importedServices
  )
    ? buildNavHref({
        organization: service.organization.key,
        application: service.application.key,
        model: getType(modelType),
      })
    : null;

  return (
    <div className={styles.container}>
      <div className={styles.meta}>
        <a name={`${getType(parentModel)}.${name}`} className={styles.name}>
          {name}
        </a>
        {/* <p onClick={typeClickFn} className={classnames(styles.type, typeClickFn ? styles.pointer : null)}>
          {simplifyName(modelType)}
          </p> */}
        <Link
          tabIndex="0"
          toHref={typeToHrefFn}
          className={classnames(styles.type)}
        >
          {simplifyName(modelType)}
        </Link>
        {required ? <p className={styles.required}>required</p> : null}
      </div>
      <div className={styles.info}>
        {description
          ? <Markdown source={description} className={styles.description} />
          : <p className={styles.noContent}>No description</p>}
        {example
          ? <p className={styles.sample}>
              <span className={styles.sampleTitle}>Example</span>{example}
            </p>
          : null}
        {defaultValue
          ? <p className={styles.sample}>
              <span className={styles.sampleTitle}>Default</span>{defaultValue}
            </p>
          : null}
      </div>
    </div>
  );
};

export default ParameterList;
