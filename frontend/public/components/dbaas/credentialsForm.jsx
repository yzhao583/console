import React from "react";
import * as _ from 'lodash-es';
import { k8sGet, k8sCreate } from '@console/internal/module/k8s';
import { SecretModel } from '@console/internal/models';
import { currentAuthorization, currentAuthentication, currentNS } from './const';
import { errorModal } from '@console/internal/components/modals';

class CredentialsForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            orgId: "",
            orgPublicKey: "",
            orgPrivateKey: "",
            postResponse: "",
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        let newSecret = {
            apiVersion: "v1",
            kind: "Secret",
            metadata: {
                name: "dbaas-vendor-credentials",
                namespace: currentNS,
                labels: {
                    "related-to": "dbaas-operator",
                    type: "dbaas-vendor-credentials",
                },
            },
            stringData: {
                orgId: Buffer.from(this.state.orgId).toString(),
                publicApiKey: Buffer.from(this.state.orgPublicKey).toString(),
                privateApiKey: Buffer.from(this.state.orgPrivateKey).toString(),
            },
            type: "Opaque",
        };

        //create secret based on user's input
        k8sGet(SecretModel, "dbaas-vendor-credentials", currentNS, {}).then((oldSecrets) => {
            if (!_.isEmpty(oldSecrets)) {
                console.log("Secret already exist")
            } else {
                k8sCreate(SecretModel, newSecret)
                    .then((nsSecrets) => {
                        this.setState({ postResponse: nsSecrets })
                    })
                    .catch((err) => {
                        if (err?.response?.status != 409) {
                            errorModal({ error: err?.message });
                        }
                    });
            }
        })
            .catch((err) => {
                if (err?.response?.status == 404) {
                    k8sCreate(SecretModel, newSecret)
                        .then((nsSecrets) => {
                            this.setState({ postResponse: nsSecrets })
                        })
                        .catch((err) => {
                            if (err?.response?.status != 409) {
                                errorModal({ error: err?.message });
                            }
                        });
                } else {
                    errorModal({ error: err?.message });
                }
            });

        let requestOpts = {
            method: "POST",
            headers: {
                Authorization: "Bearer " + process.env.REACT_APP_OCP_API_AUTHORIZATION,
                Authentication: "Bearer: " + currentAuthentication,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                apiVersion: "dbaas.redhat.com/v1",
                kind: "DBaaSService",
                metadata: {
                    name: "atlas-dbaas-service",
                    namespace: currentNS,
                    labels: {
                        "related-to": "dbaas-operator",
                        type: "dbaas-vendor-service",
                    },
                },
                spec: {
                    provider: {
                        name: "MongoDB Atlas",
                    },
                    credentialsSecretName: "dbaas-vendor-credentials",
                    credentialsSecretNamespace: "dbaas-operator",
                },
            }),
        };
        fetch(
            '/api/kubernetes/apis/dbaas.redhat.com/v1/namespaces/' + currentNS + '/dbaasservices',
            requestOpts
        )
            .then((response) => response.json())
            .then((data) => this.setState({ postResponse: data }))

        this.props.setDBaaSServiceStatus();
        this.props.setActiveTab(2)

    };

    render() {
        return (
            <form
                id="credentials-form"
                onSubmit={this.handleSubmit}
            >
                <div className="radio-div">
                    <label className="text-field-label" htmlFor="orgId">
                        Organization ID
            </label>
                    <br />
                    <input
                        id="orgId"
                        className="text-field"
                        value={this.state.orgId}
                        name="orgId"
                        onChange={(event) => this.setState({ orgId: event.target.value })}
                    />
                    <br />
                    <label className="text-field-label" htmlFor="orgPublicKey">
                        Organization Public Key
            </label>
                    <br />
                    <input
                        id="orgPublicKey"
                        className="text-field"
                        value={this.state.orgPublicKey}
                        name="orgPublicKey"
                        onChange={(event) =>
                            this.setState({ orgPublicKey: event.target.value })
                        }
                    />
                    <br />
                    <label className="text-field-label" htmlFor="orgPrivateKey">
                        Organization Private Key
            </label>
                    <br />
                    <input
                        id="orgPrivateKey"
                        className="text-field"
                        value={this.state.orgPrivateKey}
                        name="orgPrivateKey"
                        onChange={(event) =>
                            this.setState({ orgPrivateKey: event.target.value })
                        }
                    />
                    <br />
                    <button id="credential-select-button" className="select-button">
                        Submit
            </button>
                </div>
            </form>
        );
    }
}

export default CredentialsForm;