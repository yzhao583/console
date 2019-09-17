export const CONST = Object.freeze({
  // http://kubernetes.io/docs/user-guide/images/#bypassing-kubectl-create-secrets
  PULL_SECRET_TYPE: 'kubernetes.io/dockerconfigjson',
  PULL_SECRET_DATA: '.dockerconfigjson',
});

export const ANNOTATIONS = Object.freeze({
  displayName: 'openshift.io/display-name',
  providerDisplayName: 'openshift.io/provider-display-name',
  documentationURL: 'openshift.io/documentation-url',
  supportURL: 'openshift.io/support-url',
});

// Common shortcuts than span pages.
export const KEYBOARD_SHORTCUTS = Object.freeze({
  focusFilterInput: '/',
  focusNamespaceDropdown: 'n',
});

// Use a key for the "all" namespaces option that would be an invalid namespace name to avoid a potential clash
export const ALL_NAMESPACES_KEY = '#ALL_NS#';

// Use a key for the "all" applications option that would be an invalid application name to avoid a potential clash
export const ALL_APPLICATIONS_KEY = '#ALL_APPS#';

// Prefix our localStorage items to avoid conflicts if another app ever runs on the same domain.
export const STORAGE_PREFIX = 'bridge';

// This localStorage key predates the storage prefix.
export const NAMESPACE_LOCAL_STORAGE_KEY = 'dropdown-storage-namespaces';
export const APPLICATION_LOCAL_STORAGE_KEY = 'dropdown-storage-applications';
export const LAST_NAMESPACE_NAME_LOCAL_STORAGE_KEY = `${STORAGE_PREFIX}/last-namespace-name`;
export const LAST_PERSPECTIVE_LOCAL_STORAGE_KEY = `${STORAGE_PREFIX}/last-perspective`;
export const API_DISCOVERY_RESOURCES_LOCAL_STORAGE_KEY = `${STORAGE_PREFIX}/api-discovery-resources`;
export const COMMUNITY_PROVIDERS_WARNING_LOCAL_STORAGE_KEY = `${STORAGE_PREFIX}/community-providers-warning`;

// Bootstrap user for OpenShift 4.0 clusters
export const KUBE_ADMIN_USERNAME = 'kube:admin';

export const RH_OPERATOR_SUPPORT_POLICY_LINK = 'https://access.redhat.com/third-party-software-support';

// Package manifests for the OperatorHub use this label.
export const OPERATOR_HUB_LABEL = 'openshift-marketplace';

export const OC_DOWNLOAD_LINK = 'https://mirror.openshift.com/pub/openshift-v4/clients/oc/4.2';
export const ODO_DOWNLOAD_LINK = 'https://mirror.openshift.com/pub/openshift-v4/clients/odo/latest';

export enum FLAGS {
  AUTH_ENABLED = 'AUTH_ENABLED',
  PROMETHEUS = 'PROMETHEUS',
  OPERATOR_LIFECYCLE_MANAGER = 'OPERATOR_LIFECYCLE_MANAGER',
  CHARGEBACK = 'CHARGEBACK',
  OPENSHIFT = 'OPENSHIFT',
  CAN_GET_NS = 'CAN_GET_NS',
  CAN_LIST_NS = 'CAN_LIST_NS',
  CAN_LIST_NODE = 'CAN_LIST_NODE',
  CAN_LIST_PV = 'CAN_LIST_PV',
  CAN_LIST_STORE = 'CAN_LIST_STORE',
  CAN_LIST_CRD = 'CAN_LIST_CRD',
  CAN_LIST_PACKAGE_MANIFEST = 'CAN_LIST_PACKAGE_MANIFEST',
  CAN_LIST_OPERATOR_GROUP = 'CAN_LIST_OPERATOR_GROUP',
  CAN_LIST_CHARGEBACK_REPORTS = 'CAN_LIST_CHARGEBACK_REPORTS',
  CAN_CREATE_PROJECT = 'CAN_CREATE_PROJECT',
  SHOW_OPENSHIFT_START_GUIDE = 'SHOW_OPENSHIFT_START_GUIDE',
  SERVICE_CATALOG = 'SERVICE_CATALOG',
  OPERATOR_HUB = 'OPERATOR_HUB',
  CLUSTER_API = 'CLUSTER_API',
  CLUSTER_VERSION = 'CLUSTER_VERSION',
  MACHINE_CONFIG = 'MACHINE_CONFIG',
  MACHINE_AUTOSCALER = 'MACHINE_AUTOSCALER',
  CONSOLE_CLI_DOWNLOAD = 'CONSOLE_CLI_DOWNLOAD',
  CONSOLE_NOTIFICATION = 'CONSOLE_NOTIFICATION',
  CONSOLE_EXTERNAL_LOG_LINK = 'CONSOLE_EXTERNAL_LOG_LINK',
}

export const TEST_FIELDS = [
  {
    "path": "commonConfig.version",
    "displayName": "Version",
    "description": "Product version installed.",
    "type": null,
    "required": false,
    "validation": null,
    "capabilities": [
      "urn:alm:descriptor:com.tectonic.ui:label"
    ]
  },
  {
    "path": "pod.resources",
    "displayName": "Resource quotas",
    "description": "Limits describes the minimum/maximum amount",
    "type": null,
    "required": false,
    "validation": null,
    "capabilities": [
      "urn:alm:descriptor:com.tectonic.ui:resourceRequirements"
    ]
  },
  {
    "path": "k8resourcetest",
    "displayName": "k8resource prefix test",
    "description": "Limits describes the minimum/maximum amount",
    "type": null,
    "required": false,
    "validation": null,
    "capabilities": [
      "urn:alm:descriptor:io.kubernetes:testgroup"
    ]
  },
  {
    "path": "checkboxtest",
    "displayName": "checkbox test",
    "description": "Limits describes the minimum/maximum amount",
    "type": null,
    "required": false,
    "validation": null,
    "capabilities": [
      "urn:alm:descriptor:com.tectonic.ui:checkbox"
    ]
  },
  {
    "path": "imagepullpolicytest",
    "displayName": "image pull policy test",
    "description": "Limits describes the minimum/maximum amount",
    "type": null,
    "required": true,
    "validation": null,
    "capabilities": [
      "urn:alm:descriptor:com.tectonic.ui:imagePullPolicy"
    ]
  },
  {
    "path": "updatestrategytest",
    "displayName": "update strategy test",
    "description": "Limits describes the minimum/maximum amount",
    "type": null,
    "required": false,
    "validation": null,
    "capabilities": [
      "urn:alm:descriptor:com.tectonic.ui:updateStrategy"
    ]
  },
  {
    "path": "selectortest",
    "displayName": "selector test",
    "description": "Limits describes the minimum/maximum amount",
    "type": null,
    "required": false,
    "validation": null,
    "capabilities": [
      "urn:alm:descriptor:com.tectonic.ui:selector:"
    ]
  },
  {
    "path": "namespaceselectortest",
    "displayName": "namespace selector test",
    "description": "Limits describes the minimum/maximum amount",
    "type": null,
    "required": false,
    "validation": null,
    "capabilities": [
      "urn:alm:descriptor:com.tectonic.ui:namespaceSelector"
    ]
  },
  {
    "path": "nodeaffinitytest",
    "displayName": "node affinity test",
    "description": "Limits describes the minimum/maximum amount",
    "type": null,
    "required": false,
    "validation": null,
    "capabilities": [
      "urn:alm:descriptor:com.tectonic.ui:nodeAffinity"
    ]
  },
  {
    "path": "podaffinitytest",
    "displayName": "pod affinity test",
    "description": "Limits describes the minimum/maximum amount",
    "type": null,
    "required": false,
    "validation": null,
    "capabilities": [
      "urn:alm:descriptor:com.tectonic.ui:podAffinity"
    ]
  },
  {
    "path": "endpointlisttest",
    "displayName": "end points test",
    "description": "Limits describes the minimum/maximum amount",
    "type": null,
    "required": false,
    "validation": null,
    "capabilities": [
      "urn:alm:descriptor:com.tectonic.ui:endpointList"
    ]
  }
]

export const TEST_DROPDOWN_ITEMS = {
  "builder-dockercfg-pvftq-Secret": {
    "kindLabel": "Secret",
    "name": "builder-dockercfg-pvftq"
  },
  "builder-token-2fj89-Secret": {
    "kindLabel": "Secret",
    "name": "builder-token-2fj89"
  },
  "builder-token-h24vx-Secret": {
    "kindLabel": "Secret",
    "name": "builder-token-h24vx"
  },
  "business-automation-operator-dockercfg-bg7wc-Secret": {
    "kindLabel": "Secret",
    "name": "business-automation-operator-dockercfg-bg7wc"
  },
  "business-automation-operator-token-rt5cr-Secret": {
    "kindLabel": "Secret",
    "name": "business-automation-operator-token-rt5cr"
  },
  "business-automation-operator-token-v6b2p-Secret": {
    "kindLabel": "Secret",
    "name": "business-automation-operator-token-v6b2p"
  },
  "console-cr-form-dockercfg-kcljv-Secret": {
    "kindLabel": "Secret",
    "name": "console-cr-form-dockercfg-kcljv"
  },
  "console-cr-form-token-bz8hv-Secret": {
    "kindLabel": "Secret",
    "name": "console-cr-form-token-bz8hv"
  },
  "console-cr-form-token-whkjq-Secret": {
    "kindLabel": "Secret",
    "name": "console-cr-form-token-whkjq"
  },
  "default-dockercfg-vjz4s-Secret": {
    "kindLabel": "Secret",
    "name": "default-dockercfg-vjz4s"
  },
  "default-token-9c5j6-Secret": {
    "kindLabel": "Secret",
    "name": "default-token-9c5j6"
  },
  "default-token-wbwgd-Secret": {
    "kindLabel": "Secret",
    "name": "default-token-wbwgd"
  },
  "deployer-dockercfg-lzzwf-Secret": {
    "kindLabel": "Secret",
    "name": "deployer-dockercfg-lzzwf"
  },
  "deployer-token-bwpmw-Secret": {
    "kindLabel": "Secret",
    "name": "deployer-token-bwpmw"
  },
  "deployer-token-nfvbf-Secret": {
    "kindLabel": "Secret",
    "name": "deployer-token-nfvbf"
  },
  "prometheus-k8s-dockercfg-q8l6n-Secret": {
    "kindLabel": "Secret",
    "name": "prometheus-k8s-dockercfg-q8l6n"
  },
  "prometheus-k8s-token-kkx24-Secret": {
    "kindLabel": "Secret",
    "name": "prometheus-k8s-token-kkx24"
  },
  "prometheus-k8s-token-vczph-Secret": {
    "kindLabel": "Secret",
    "name": "prometheus-k8s-token-vczph"
  },
  "prometheus-operator-0-27-0-dockercfg-m8l5l-Secret": {
    "kindLabel": "Secret",
    "name": "prometheus-operator-0-27-0-dockercfg-m8l5l"
  },
  "prometheus-operator-0-27-0-token-kmjls-Secret": {
    "kindLabel": "Secret",
    "name": "prometheus-operator-0-27-0-token-kmjls"
  },
  "prometheus-operator-0-27-0-token-lnckk-Secret": {
    "kindLabel": "Secret",
    "name": "prometheus-operator-0-27-0-token-lnckk"
  },
  "proxy-tls-Secret": {
    "kindLabel": "Secret",
    "name": "proxy-tls"
  },
  "ssk-businesscentral-app-secret-Secret": {
    "kindLabel": "Secret",
    "name": "ssk-businesscentral-app-secret"
  },
  "ssk-kieserver-app-secret-Secret": {
    "kindLabel": "Secret",
    "name": "ssk-kieserver-app-secret"
  },
  "ssk-rhpamsvc-dockercfg-2gv8c-Secret": {
    "kindLabel": "Secret",
    "name": "ssk-rhpamsvc-dockercfg-2gv8c"
  },
  "ssk-rhpamsvc-token-5x8gv-Secret": {
    "kindLabel": "Secret",
    "name": "ssk-rhpamsvc-token-5x8gv"
  },
  "ssk-rhpamsvc-token-gsr5x-Secret": {
    "kindLabel": "Secret",
    "name": "ssk-rhpamsvc-token-gsr5x"
  }
}
