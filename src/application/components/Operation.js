// @flow
import React from 'react';
import { Link } from 'react-router';
import Markdown from '../../components/Markdown';
import Header from '../components/Header';
import Request from '../components/Request';
import Response from '../components/Response';
import ResourceCard from '../components/ResourceCard';
import H1 from '../../components/H1';

import type { Operation as OperationType, Service } from '../../generated/version/ServiceType';

import styles from './operation.css';

const Operation = ({ service, operation, applicationKey, organizationKey, resource, method, path, importedServices }: {
  service: Service,
  operation: OperationType,
  applicationKey: string,
  organizationKey: string,
  resource: string,
  method: string,
  path: string,
  importedServices: Service[],
}) =>
  <div className={styles.content}>
    <div className={styles.header}>
      <H1 className={styles.h1}>
        <Link
          className={styles.link}
          to={`/org/${organizationKey}/app/${applicationKey}/m/${resource}`}
        >
          {resource}
        </Link>
      </H1>
      {operation.resourceDescription && <Markdown
        source={operation.resourceDescription}
        className={styles.description}
      />}
    </div>
    <div className={styles.resource}>
      <ResourceCard
        method={operation.method}
        path={operation.path}
      />
    </div>
    {operation.description && <Markdown source={operation.description} className={styles.description} /> }
    <div className={styles.headers}>
      <Header
        appKey={applicationKey}
        orgKey={organizationKey}
        key={`${method}${resource}${path}-header`}
        operation={operation}
        service={service}
        importedServices={importedServices}
      />
    </div>
    <div className={styles.request}>
      <Request
        key={`${method}${resource}${path}-request`}
        operation={operation}
        service={service}
        importedServices={importedServices}
      />
    </div>
    <Response
      appKey={applicationKey}
      orgKey={organizationKey}
      key={`${method}${resource}${path}-response`}
      operation={operation}
      service={service}
      importedServices={importedServices}
    />
  </div>;

export default Operation;
