import * as _ from 'lodash';
import { AddAction } from '@console/dynamic-plugin-sdk';
import {
  ModelDefinition,
  ModelFeatureFlag,
  RoutePage,
  Plugin,
  HrefNavItem,
} from '@console/plugin-sdk';
import { FLAG_DBAAS } from './const';
import { rhoasTopologyPlugin, TopologyConsumedExtensions } from './topology/rhoas-topology-plugin';
import * as models from './models';

type ConsumedExtensions =
  | ModelDefinition
  | ModelFeatureFlag
  | RoutePage
  | AddAction
  | HrefNavItem
  | TopologyConsumedExtensions;

const plugin: Plugin<ConsumedExtensions> = [
  {
    type: 'ModelDefinition',
    properties: {
      models: _.values(models),
    },
  },
  {
    type: 'Page/Route',
    properties: {
      exact: true,
      path: ['/dbaas/ns/:ns/:service'],
      loader: async () =>
        (
          await import(
            './components/service-list/ServiceListPage' /* webpackChunkName: "services-kafka-plugin-releases-kafka-page" */
          )
        ).default,
    },
    flags: {
      required: [FLAG_DBAAS],
    },
  },
  ...rhoasTopologyPlugin,
];

export default plugin;
