import React from "react";
import InstanceTable from "./instanceTable";
import { currentAuthorization, currentAuthentication, currentNS } from './const';

class InstancesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showResults: false,
            instances: [],
        };
        // eslint-disable-next-line
        this.fetchInstances = this.fetchInstances.bind(this);
        // eslint-disable-next-line
        this.parsePayload = this.parsePayload.bind(this);
    }

    componentDidUpdate() {
        if (this.props.dbaaSServiceStatus && this.state.instances.length == 0) {
            this.fetchInstances();
        }
    }

    fetchInstances() {
        setTimeout(
            function () {
                var requestOpts = {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + currentAuthorization,
                        Authentication: "Bearer: " + currentAuthentication,
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                };
                fetch(
                    '/api/kubernetes/apis/dbaas.redhat.com/v1/namespaces/' + currentNS + '/dbaasservices/atlas-dbaas-service',
                    requestOpts
                )
                    .then((response) => response.json())
                    .then((data) => this.parsePayload(data));
                this.setState({ showResults: true });
            }.bind(this),
            3000
        );
    };

    parsePayload(responseJson) {
        let instances = [];

        responseJson.status.projects.forEach(function (value) {
            if (value.hasOwnProperty("clusters")) {
                value.clusters.forEach(function (value) {
                    instances.push(value);
                });
            }

        });
        this.setState({ instances: instances });
    }


    render() {
        return (
            <form id="instances-form">
                <div className="instance-table">
                    <InstanceTable isLoading={!this.state.showResults} data={this.state.instances} />
                </div>
            </form>
        );
    }
}

export default InstancesForm;